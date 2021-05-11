const en = {
    title: 'WebRTC Sample Demo',
    base: 'Basic Function',
    advanced: 'Advanced',
    auxiliary: 'Auxiliary tools',
    complete: 'Completed Demo',
    api: 'Api documentation',
    issues: 'issues',
    source: 'source',
    jump: 'go',
    basicPushPull: 'publish and play',
    basicPushPullContent: 'publish and play stream',
    pureAudio: 'pure audio',
    pureAudioContent: 'publish and play audio only',
    thirdVideo: 'Third-party audio and video streaming',
    thirdVideoContent: 'Supports pushing and pulling third-party audio and video',
    message: 'Real time message',
    messageContent: 'real time message',
    tokenRole: 'token role',
    tokenRoleContent: 'token role',
    cdn: 'CDN',
    cdnContent:
        'Pull the stream through the CDN, this function needs to apply to the configuration to use before it can also be used to transfer to other CDN',
    clickPlay: 'click to play',
    addCdn: 'Increase retweet cdn',
    removeCdn: 'Delete retweet cdn',
    cdnPlay: 'play CDN stream',
    pushThird: 'Push third-party videos',
    mixStream: 'Mix Stream',
    stopMixStream: 'stop mix stream',
    mixStreamContent: 'mix stream and play the stream from CDN',
    mixAudio: 'mix audio',
    mixAudioContent:
        'The mixing function refers to playing background music during the live broadcast, and can also be heard by the pull stream end',
    stopMixAudio: 'stop mix audio',
    realTimeMix: 'real-time mixing',
    stopRealTimeMix: 'stop real-time mixing',
    screenSharing: 'Screen Sharing',
    stopScreenSharing: 'stop screen sharing',
    screenSharingContent: 'screen sharing',
    transcode: 'Transcoding',
    transcodeContent: 'H264 and VP8 transcoding',
    docsSharing: 'File sharing',
    docsSharingContent: 'File sharing',
    whiteboard: 'whiteboard',
    whiteboardContent: 'whiteboard',
    detect: 'webRTC detection',
    detectContent: 'test whether the page supports webrtc, detect the supported resolution and connectivity',
    token: 'token detection',
    tokenContent: 'Check if the token is the same as the one generated in the server',
    assistDev: 'assist development',
    assistDevContent: 'It is used for auxiliary debugging in the development stage of accessing SDK',
    audioDevices: 'microphone devices',
    videoDevices: 'camera devices',
    playMode: 'play mode',
    auto: 'auto',
    all: 'video and audio',
    onlyVideo: 'only video',
    onlyAudio: 'only audio',
    roomid: 'room ID',
    enterRoomPush: 'enterRoom(publish)',
    enterRoomPlay: 'enterRoom(noPublish)',
    enableCamera: 'enable / disable camera',
    enableMicrophone: 'enable / disable microphone',
    soundText: 'sound: ',
    unenableSound: 'stop soundwave',
    resumeSound: 'resume soundwave',
    shareScreen: 'screen sharing',
    leaveRoom: 'leave room',
    userlist: 'staff',
    barrage: 'barrage',
    customMessage: 'custom message',
    videoCodeType: 'video coding',
    assistDevPageTitle: 'Assist Development',
    enterRoom: 'enter room',
    startPublish: 'strat publish',
    stopPublish: 'stop publish'
};

const zh = {
    title: '视频互动及通讯功能Demo',
    base: '基础功能',
    advanced: '进阶功能',
    auxiliary: '辅助工具及组件',
    complete: '完整 Demo',
    api: 'Api 文档',
    issues: '常见问题',
    source: '源码',
    jump: '前往',
    basicPushPull: '基础推拉流',
    basicPushPullContent: '推流,拉流',
    pureAudio: '纯音频',
    pureAudioContent: '推拉纯音频流',
    thirdVideo: '第三方音视频推流',
    thirdVideoContent: '支持推拉第三方的音视频',
    message: '实时消息',
    messageContent: '实时消息功能',
    tokenRole: 'token 鉴权',
    tokenRoleContent: 'token 鉴权',
    cdn: 'CDN',
    cdnContent: '通过CDN拉取流,该功能需向即构申请配置方可使用，也支持转推到其他CDN',
    clickPlay: '点击播放',
    addCdn: '增加转推cdn',
    removeCdn: '删除转推cdn',
    cdnPlay: '播放cdn',
    pushThird: '推第三方视频',
    mixStream: '混流',
    stopMixStream: '停止混流',
    mixStreamContent: '混流，转推到cdn,页面播放cdn地址流',
    mixAudio: '混音',
    mixAudioContent: '混音功能指在直播过程中播放背景音乐，并且能够让拉流端也听到',
    stopMixAudio: '停止混音',
    realTimeMix: '实时混音',
    stopRealTimeMix: '停止实时混音',
    screenSharing: '推流进阶',
    stopScreenSharing: '停止捕捉屏幕',
    screenSharingContent: '屏幕共享',
    transcode: '混流转码(微信浏览器-safari11互通)',
    transcodeContent: '微信浏览器不支持H264,safari11只支持h264，互通需要转码（测试中。。）',
    docsSharing: '文件共享',
    docsSharingContent: '文件共享',
    whiteboard: '互动白板',
    whiteboardContent: '互动白板',
    detect: 'webrtc检测',
    detectContent: '用于测试页面是否支持webrtc，检测所支持分辨率及连通性检测',
    token: 'token检测',
    tokenContent: '检测token是否与后台生成的相同',
    assistDev: '开发调试',
    assistDevContent: '用于接入SDK的开发阶段进行辅助调试',
    audioDevices: '音频设备',
    videoDevices: '视频设备',
    playMode: '拉流模式',
    auto: '自动',
    all: '音视频',
    onlyVideo: '只拉视频',
    onlyAudio: '只拉音频',
    roomid: '房间号',
    enterRoomPush: '进入房间（推流）',
    enterRoomPlay: '进入房间（不推流）',
    enableCamera: '启用/关闭摄像头',
    enableMicrophone: '启用/关闭麦克风',
    soundText: '当前音量：',
    unenableSound: '停止获取音浪',
    resumeSound: '恢复获取音浪',
    shareScreen: '共享屏幕',
    leaveRoom: '退出房间',
    userlist: '房间人员',
    barrage: '弹幕消息',
    customMessage: '发送自定义消息',
    videoCodeType: '视频编码',
    assistDevPageTitle: '辅助开发调试',
    enterRoom: '进入房间',
    startPublish: '开始推流',
    stopPublish: '停止推流'
};

export { en, zh };
