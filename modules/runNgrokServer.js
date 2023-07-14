const { exec } = require('child_process');
const axios = require('axios');
const { parse } = require('url');
const delay = require('./delay');
const getIPAddress = require('./getIpAddress');

const runNgrokServer = async (ip, port, ngrokPath) => {
    console.log('Starting ngrok server...');
  
    const ngrokCommand = `wt.exe -w 0 "${ngrokPath}" tcp ${ip}:${port}`;

    exec(ngrokCommand);
    await delay(2000);

    const apiUrl = 'http://localhost:4040/api/tunnels/';

    const response = await axios.get(apiUrl);
    const xmlData = response.data;

    const publicUrl = xmlData.tunnels[0].public_url;

    if (publicUrl) {
        const { hostname, port } = parse(publicUrl);

        try {
            const publicIpAddress = await getIPAddress(hostname);
            console.log(`Public server running on: ${publicIpAddress}:${port}`);
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        throw new Error('Failed to retrieve Ngrok public URL.');
    }
};

module.exports = runNgrokServer;
