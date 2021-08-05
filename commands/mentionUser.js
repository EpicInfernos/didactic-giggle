    function mentionUser(message, result, Discord) {
        console.log(result.id);
        message.guild.channels.cache.get(result.id).send('<@' + message.member + '>' + '\nวิธีการตอบ -> \"+ตอบ <ใส่คำตอบ1>\t<ใส่คำตอบ2>\t<ใส่คำตอบ3>\t<ใส่คำตอบ4>"' +'\n1.) โปรดใส่สายการเรียน:' +'\n2.) ได้ลิงค์ดิสมาจากใคร:' + '\n3.) โปรดใส่รุ่นปีการศึกษา (83,84,etc.):' + '\n4.) เหตุผลที่อยากเข้าดิสคอร์ดนี้:' + '\nตัวอย่างวิธีการตอบ -> "+ตอบ วิทย์-คณิต เพื่อน 84 อยากมาหาเพื่อนคุย"' );

        }
    module.exports = {mentionUser};
