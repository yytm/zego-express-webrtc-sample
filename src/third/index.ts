import { checkAnRun, enterRoom, push } from '../common';

$(async () => {
    await checkAnRun();

    $('#externalCaptureV').click(async () => {
        let loginSuc = false;
        try {
            loginSuc = await enterRoom();
            if (loginSuc) {
                push({
                    custom: {
                        source: $('#externerVideo')[0],
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    });
});
