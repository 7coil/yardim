const Discord = require('discord.js');
const querystring = require('querystring');
const https = require('https');
var message, object, RichEmbed, command, user, input, prefix, client;

function subsequenceFromStartLast(sequence, at1) {
  var start = at1;
  var end = sequence.length - 1 + 1;
  return sequence.slice(start, end);
}


client = (new Discord.Client());
prefix = '>>';
client.login('');
console.log('Welcome to Moustacheminer Server Services!');
client.on('ready', () => {  console.log('Client is ready');
});client.on('message', (message) => {  if ((message.content).indexOf(prefix) + 1 == 1) {
    input = subsequenceFromStartLast((message.content), ((prefix.length + 1) - 1)).trim();
    console.log(input);
    if (input) {
      command = input.split(' ')[0];
      user = (message.author);
      console.log(command);
      if (command == 'help') {
        message.reply('A wise man once said: _"I\'ll make my bot in Turkish"_ **Use the `>>yardım` command for help.**',);
      } else if (command == 'yardım') {
        message.reply('TürkiyeYardımSa',(JSON.parse('{ 	"embed": { 		"title": "TürkiyeYardımSa", 		"description": "Bu bir bok gemisi. Amerika Birleşik Devletleri, Kaliforniya eyaletinde kansere neden olduğu biliniyorsa, lütfen kullanmayın. Eğer kullanırsan, dikkatli ol!", 		"url": "https://moustacheminer.com/", 		"fields": [ 			{ 				"name": "`>>help`", 				"value": "Provides nothing of use to the end user" 			}, 			{                 "name": "`>>yardım`",                 "value": "Provides nothing of use to the end user"             }, 			{                 "name": "`>>kullanıcı`",                 "value": "Provides nothing of use to the end user"             } 		] 	} }')));
      } else if (command == 'kullanıcı') {
        object = ({});
        RichEmbed = (new Discord.RichEmbed());
        RichEmbed = (RichEmbed.setTitle((user.username)));
        RichEmbed = (RichEmbed.setURL('https://moustacheminer.com/'));
        RichEmbed = (RichEmbed.setDescription('Kullanıcı'));
        RichEmbed = (RichEmbed.setThumbnail((user.displayAvatarURL)));
        RichEmbed = (RichEmbed.addField('ID',(user.id),true));
        RichEmbed = (RichEmbed.setDescription('Kullanıcı zamanında oluşturuldu'));
        RichEmbed = (RichEmbed.setTimestamp((user.createdAt)));
        object['embed'] = RichEmbed;
        message.reply('bilgi',object);
      } else if (command == 'lider') {
        object = ({});
        RichEmbed = (object.setImage('https://upload.wikimedia.org/wikipedia/commons/5/5f/Elizabeth_II_greets_NASA_GSFC_employees%2C_May_8%2C_2007_edit.jpg'));
        object['embed'] = RichEmbed;
        message.reply('Yüce lider',object);
      } else if (command == 'sa') {
        message.reply('Iyi günün hoş vakti!',);
        message.react('🇸');
        message.react('🇦');
      }
    }
  }
});