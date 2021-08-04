module.exports = {
    name: 'ตอบ',
    description:  "recognize the text and turn it into an array",
    execute(message, args, Discord, client) {
        let ansCH = message.guild.channels.cache.find(c => c.name == message.member + '-verify');
        if (args === undefined) return;
        if (message.channel.id == ansCH) 
        {
            if (message.member.roles.cache.some(role => role.name === 'Pending'))
            {
                const msgEmbed = require('./msgToEmbed.js');
                let newArgs = args.slice(" ");
                msgEmbed.sendEmbed(message, newArgs, Discord, client);
            } else message.channel.reply ('Insufficent Role');
        }
    }
}