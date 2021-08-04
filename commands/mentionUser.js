    function mentionUser(message, result, Discord) {
        console.log(result.id);
        message.guild.channels.cache.get(result.id).send('<@' + message.member + '>' + '\nวิธีการตอบ -> \"+ตอบ <ใส่คำตอบ1> <ใส่คำตอบ2> <ใส่คำตอบ3>\"' +'\nโปรดใส่สายการเรียน' +'\nได้ลิงค์ดิสมาจากใคร' + '\nโปรดใส่รุ่นปีการศึกษา (83,84)');

        }
    module.exports = {mentionUser};
