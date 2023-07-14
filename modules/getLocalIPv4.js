const { exec } = require('child_process');
const getLocalIPv4 = () => {
    return new Promise((resolve, reject) => {
        const command = 'ipconfig';

        exec(command, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                const ipv4Regex = /IPv4[.\s]+: (\d+\.\d+\.\d+\.\d+)/g;
                const ipv4Matches = stdout.match(ipv4Regex);

                if (ipv4Matches && ipv4Matches.length > 0) {
                    const ipv4Address = ipv4Matches[0].split(':')[1].trim();
                    resolve(ipv4Address);
                } else {
                    reject(new Error('Failed to retrieve local IPv4 address.'));
                }
            }
        });
    });
};

module.exports = getLocalIPv4;
