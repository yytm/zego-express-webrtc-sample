import '../common';
import { checkAnRun, logout, publishStreamId, useLocalStreamList, zg } from '../common';
import { getBrowser } from '../assets/utils';
import flvjs from 'flv.js';

$(async () => {
    await checkAnRun();
    const taskID = 'task-' + new Date().getTime();
    const mixStreamID = 'mixwebrtc-' + new Date().getTime();
    const mixVideo = $('#mixVideo')[0] as HTMLVideoElement;
    let hlsUrl: string;
    let flvPlayer: flvjs.Player | null = null;
    $('#mixStream').click(async () => {
        try {
            const streamList = [
                {
                    streamID: publishStreamId,
                    layout: {
                        top: 0,
                        left: 0,
                        bottom: 240,
                        right: 320,
                    },
                },
            ];
            if (useLocalStreamList.length !== 0) {
                streamList.push({
                    streamID: useLocalStreamList[0].streamID,
                    layout: {
                        top: 240,
                        left: 0,
                        bottom: 480,
                        right: 320,
                    },
                });
            }

            const [result] = await zg.startMixStream({
                taskID,
                inputList: streamList,
                outputList: [
                    {
                        streamID: mixStreamID,
                        outputUrl: 'rtmp://test.aliyun.zego.im/zegodemo',
                        outputBitrate: 300 * 1000,
                        outputFps: 15,
                        outputWidth: 320,
                        outputHeight: 480,
                    },
                ],
            });

            if (navigator.userAgent.indexOf('iPhone') !== -1 && getBrowser() == 'Safari' && result && result.hlsUrl) {
                hlsUrl = result.hlsUrl.replace('http', 'https');
                mixVideo.src = hlsUrl;
            } else if (result.flvUrl) {
                const flvUrl = result.flvUrl.replace('http', 'https');
                console.log('mixStreamId: ' + mixStreamID);
                console.log('mixStreamUrl:' + flvUrl);
                alert('混流开始。。。');
                if (flvjs.isSupported()) {
                    flvPlayer = flvjs.createPlayer({
                        type: 'flv',
                        url: flvUrl,
                    });
                    flvPlayer.attachMediaElement(mixVideo);
                    flvPlayer.load();
                }
            }
            mixVideo.muted = false;
            $('#mixVideo').css('display', '');
        } catch (err) {
            alert('混流失败。。。');
            console.log('err: ' + JSON.stringify(err));
        }
    });

    $('#stopMixStream').click(async () => {
        try {
            await zg.stopMixStream(taskID);
            alert('停止混流成功。。。');
            if (flvPlayer) {
                flvPlayer.destroy();
                flvPlayer = null;
            }
            console.log('stopMixStream success: ');
            $('#mixVideo').css('display', 'none');
        } catch (err) {
            alert('停止混流失败。。。');
            console.log('stopMixStream err: ', err);
        }
    });

    $('#leaveRoom').unbind('click');
    $('#leaveRoom').click(function() {
        mixVideo.src = '';
        $('#mixVideo').css('display', 'none');
        logout();
    });
});