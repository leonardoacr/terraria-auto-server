const { exec } = require('child_process');

const runTerrariaServer = async (terrariaServerPath, keySender, delay) => {
    console.log('Starting Terraria server...');
    const serverProcess = exec(`wt.exe "${terrariaServerPath}"`);

    const simulateKey = async (key, delayMs) => {
        await delay(delayMs);
        keySender.sendKey(key);
    };

    console.log('Pressing keys...');

    const delayTime = 300;

    await delay(2000);

    await simulateKey('1', delayTime);
    await simulateKey('enter', delayTime);
    await simulateKey('enter', delayTime);
    await simulateKey('enter', delayTime);
    await simulateKey('y', delayTime);
    await simulateKey('enter', delayTime);
    await simulateKey('enter', delayTime);

    serverProcess.on('exit', (code) => {
        console.log(`Terraria server exited with code ${code}`);
    });
};

module.exports = runTerrariaServer;
