const { MessageReaction } = require("discord.js");

            // const ver = require('./verify.js');
            async function sendEmbed(message, textV, Discord, client, result) {
                let createDate = message.member.user.createdAt.toString()
                let verifyEmbed = new Discord.MessageEmbed()
                .setTitle('ผู้ใช้ -> ' + message.member.user.tag)
                .addFields(
                    {name: 'สายการเรียน', value: textV[0]},
                    {name: 'ได้ลิงค์ดิสมาจากใคร', value: textV[1]},
                    {name: 'วันสร้างไอดี', value: createDate},
                    {name: 'รุ่น', value: textV[2]},
                    {name: 'UserID', value: message.member.user.id}
                )
                .setImage(message.member.user.displayAvatarURL())
                .setColor(0x00AE86)
                .setFooter(message.member.user.tag)
                .setTimestamp();
                // console.log (textV);

                const channel = message.guild.channels.cache.find(c => c.name == "verify-output");
                const allowServerAccess = message.guild.roles.cache.find(role => role.name === "Verified");
                const verifyRole = message.guild.roles.cache.find(role => role.name === "Pending").id;

                const allowAccEmote = '✅';
                const denyAccEmote = '❌';
                // console.log (channel);

                let messageEmbed = await message.guild.channels.cache.find(c => c.name == "verify-output").send(verifyEmbed);
                messageEmbed.react(allowAccEmote);
                messageEmbed.react(denyAccEmote);

                client.on('messageReactionAdd', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;

                    if (reaction.message.channel.id == channel) {
                        let fetchedChannel = message.guild.channels.cache.find(r => r.name === message.member.user.id + '-verify');
                        if (reaction.emoji.name === allowAccEmote) {
                            // console.log(message.member.user.id); // debug
                            console.log (message.guild.member.cache);
                            await reaction.message.guild.members.cache.get(message.member.user.id).roles.add(allowServerAccess);
                            await fetchedChannel.delete();
                            message.member.roles.remove(verifyRole);
                            message.member.user.send('You have been verified');
                            
                        } 
                        if (reaction.emoji.name === denyAccEmote) {
                            message.member.roles.remove(verifyRole)
                            await fetchedChannel.delete();
                            message.member.user.send('Your Verification has been denied');
                            
                        } 
                    }
                });

            }
            module.exports = {sendEmbed};