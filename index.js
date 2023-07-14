const checkLocalServerStatus = require('./modules/checkLocalServerStatus');
const runTerrariaServer = require('./modules/runTerrariaServer');
const runNgrokServer = require('./modules/runNgrokServer');
const getLocalIPv4 = require('./modules/getLocalIPv4');
const delay = require('./modules/delay');
const keySender = require('node-key-sender');
const env = require('dotenv');

env.config();

const terrariaServerPath = process.env.TERRARIA_SERVER_PATH;
const ngrokExePath = process.env.NGROK_EXE_PATH;

const main = async () => {
    console.log('terraria server path: ', terrariaServerPath)
    await runTerrariaServer(terrariaServerPath, keySender, delay);
    await delay(2000);
    const localIPv4 = await getLocalIPv4();
    const isServerOnline = await checkLocalServerStatus(localIPv4, 7777);

    if (isServerOnline) {
        console.log('Opening a new tab on Windows Terminal to run Ngrok...');

        try {
            await runNgrokServer(localIPv4, 7777, ngrokExePath);
        } catch (error) {
            console.error('Error running ngrok server:', error);
        }
    }
};

main();
