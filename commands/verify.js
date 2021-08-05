module.exports = {
    
    name: 'verify',
    description:  "verify command",
    execute(message, args, Discord) {
        // import mentionUser from './mentionUser.js';
        const menUs = require('./mentionUser.js');
        //test1
        // function makeChannel(message){
        //     var server = message.guild;
        //     var name = message.author.username;

        //     server.createChannel(name, "text");
        // }

        // console.log('Test')
        function CreateCH(message) {
        return    message.guild.channels.create(message.member + '-verify', {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: message.channel.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: message.author.id,
                        allow: ['VIEW_CHANNEL'],
                    },
                ],
            });
        }
        

        const verifyRole = message.guild.roles.cache.find(role => role.name === "Pending").id;
        const verifyCH = message.guild.channels.cache.find(c => c.name == "verify");

        if (args === undefined) return;
        if (message.channel.id == verifyCH) 
        {
        if (message.member.roles.cache.some(role => role.name === 'Verified')) 
            {
                message.channel.send('You are already Verified');
            } else {
                if (message.member.roles.cache.some(role => role.name === 'Pending')) 
                    {
                        message.channel.send('You already have the role');
                    } else 
                    {
                    //console.log(verifyRole); ---> debug
                        message.member.roles.add(verifyRole);
                        //let NewChannel = CreateCH(message);
                        CreateCH(message)
                        .then((result) => {
                            message.reply('Click here --->' + '<#' + result + '>').catch(console.error);
                            menUs.mentionUser(message, result, Discord);
                            // module.exports = { result1: result.id };
                            
                        }).catch();
                        
                        
                            
                        //const vrChannel = message.guild.channels.cache.find(channel => channel.name == message.member + "-verify");
                        // console.log(NewChannel)
                        
                        
                        
                    }
                }
        }
}


        
}