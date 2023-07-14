const ping = require('ping');

const checkLocalServerStatus = async (ip, port) => {
    const res = await ping.promise.probe(ip, { port, timeout: 3000 });

    if (res.alive) {
        console.log('Local server is online!');
        return true;
    } else {
        console.log('Local server is offline!');
        return false;
    }
};

module.exports = checkLocalServerStatus;
