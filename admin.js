const Admin = {
    command_list: {
        type: 'admin',
        commands: ['purge']
    },
    purge: (message, n) => {
        message.channel.bulkDelete(n);
        message.channel.send(`Deleted ${n} message(s)!`).then(msg => {
            msg.delete({timeout: 2000});
        });

    }
}

module.exports.Admin = Admin;