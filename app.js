const Discord = require('discord.js');
const util = require('./util');
const Util = util.Util;
const {Admin} = require('./admin');
const client = new Discord.Client();
const client_secret = require('./config.json')['config']['client_secret'];
const prefix = '.';


client.once('ready', () => {
    console.log('Bot is online...');
})

client.on('message', (message) => {
    const msg = message.content;
    const channel = message.channel;
    const args = msg.trim(prefix.length).split(' ');
    const cmd = args[0].slice(prefix.length).toLowerCase();
    const commands = [Util.command_list, Admin.command_list];

    for(var i = 0; i < commands.length; i++) {
        let command = commands[i];

        switch (command.type) {
            case "util":
                if(command.commands.indexOf(cmd) > -1) {
                    switch (cmd) {
                        case 'ping':
                            Util.send(channel, Util.ping(client));
                    }
                }
                break;

            case 'admin':
                if(command.commands.indexOf(cmd) > -1) {
                    switch (cmd) {
                        case 'purge':
                            Admin.purge(message, parseInt(args[1]));
                    }
                }

        }
    }
})

client.login(client_secret);