module.exports = {
    name: 'ตอบ',
    description:  "recognize the text and turn it into an array",
    execute(message, args, Discord, client) {
        let ansCH = message.guild.channels.cache.find(c => c.name == message.member + '-verify');
        if (args === undefined) return;
        if (message.channel.id == ansCH) 
        {   
            // function sleep(ms) {
            //     return new Promise((resolve) => {
            //       setTimeout(resolve, ms);
            //     });
            //   }
            
            if (message.member.roles.cache.some(role => role.name === 'Pending'))
            {
                if (message.member.roles.cache.some(role => role.name === 'Pending-Verification'))
                {
                    message.guild.members.cache.get(message.member.user.id).send ("No Spam");
                }
                else {
                const msgEmbed = require('./msgToEmbed.js');
                let PverifyRole = message.guild.roles.cache.find(role => role.name === "Pending-Verification").id;
                let newArgs = args.slice(" ");
                msgEmbed.sendEmbed(message, newArgs, Discord, client);
                let fetchedChannel = message.guild.channels.cache.find(c => c.name === message.member.user.id + '-verify');
                message.member.roles.add(PverifyRole);
                }
                // async function init() {
                //     console.log(1);
                //     await sleep(2000);
                //     console.log(2);
                //   }
                // fetchedChannel.delete();
            } else message.channel.send('Insufficent Role');
        }
    }
}