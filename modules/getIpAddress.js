const { exec } = require('child_process');
const getIPAddress = (domain) => {
    return new Promise((resolve, reject) => {
        const command = `ping ${domain}`;

        exec(command, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                const ipAddressRegex = /\[(.*?)\]/;
                const ipAddressMatch = ipAddressRegex.exec(stdout);
                
                if (ipAddressMatch && ipAddressMatch[1]) {
                    const ipAddress = ipAddressMatch[1];
                    resolve(ipAddress);
                } else {
                    reject(new Error('Failed to retrieve IP address.'));
                }
            }
        });
    });
};

module.exports = getIPAddress;
