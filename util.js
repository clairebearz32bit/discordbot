const Util = {
    command_list: {
        type: 'util',
        commands: ['ping']
    },
    send: (channel, msg) => {
        channel.send(msg);
    },
    ping: (client) => {
        return client.ws.ping;
    }
}

module.exports = {
    Util: Util
}
