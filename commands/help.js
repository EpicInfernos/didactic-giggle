
module.exports = 
    {
    name: 'help',
    description:  "Bot manual",
    execute(message,args, Discord) 
        {
            //if (message = undefined) return;
            const manualEmbed = new Discord.MessageEmbed()
                .setColor('#FF6E15')
                .setTitle('Info')
                .setAuthor('Creator: Inferno')
                .setDescription("TU Verify")
                .addFields(
                    {name: 'Bot Description', value: 'Bot for verifying Students'},
                    {name: 'Requirements :', value: '\n<#verify> Text Channel\n <#verify-output Text Channel>'},
                    {name: 'Roles needed :', value: '\n<Pending> Role\n <Verified> Role'}
                    
                    
                )
                .setFooter('TUVerify bot V1.0.0')
                .setTimestamp();
            message.channel.send(manualEmbed);
        }

    }