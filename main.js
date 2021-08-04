const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//prefix
const { prefix, token } = require('./config.json');

//fs
const fs = require('fs');
const { type } = require('os');
const { result } = require('./commands/verify');

//commands folder
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('TUverify is Online')
});

client.on
('message', message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //constant for command regcogintion
    const args = message.content.slice(prefix.length).split(/ +/);
    // console.log(typeof args);   
    // console.log(Object.getOwnPropertyNames(args));
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, Discord, client);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}

    
});




client.login(token);