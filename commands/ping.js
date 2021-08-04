module.exports = {
    name: 'ping',
    description:  "This is a ping command!",
    execute(message,args) {
        // console.log('Test')
        if (args === undefined) return;
        message.channel.send('pong!');
    }
}