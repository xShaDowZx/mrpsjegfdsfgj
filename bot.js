const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Playing`,"#help")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Nameless Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 client.on('ready',  () => {
    console.log('By : _xShaDowZx');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  }); 
  
  client.on('ready', () => {
     console.log(`----------------`);
        console.log(`Made By _xShaDowZx - Script By : _xShaDowZx`);
          console.log(`----------------`);
        console.log(`ON ${client.guilds.size} Servers '     Script By : _xShaDowZx ' `);
      console.log(`----------------`);
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(` ON ${client.guilds.size} Servers - *help`,"*")
  client.user.setStatus("Online")
  });
  client.on("guildCreate", guild => {
    console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
  });
  
//warn 
client.on('message', msg => { 
    if (msg.content.startsWith('*warn')) {
      if(!msg.member.hasPermission("MUTE_MEMBERS")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('**mention a user/player ```Example: *warn @unknown#1547 spamming```**')
      if (!args[1]) return msg.reply('**Reason for warning**')
      if (msg.guild.channels.find('name', '⚠-warns')) {
        msg.guild.channels.find('name', '⚠-warns').send(`
      ***You have been warned*** : ${msg.mentions.members.first()}
      ***___Because you did the following___***
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
});

//ban
client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
    var prefix = "*"
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user! ```Example: *ban @unknown#1547 spamming```**");
       if(toBan.id === ("447121312960479242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});

//kick
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
    var prefix = "*"
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(!toReason) return message.reply("**# - Mention a user!  ```Example: *kick @unknown#1547 spamming```**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});

//clear
client.on('message', msg => {
  var prefix ="*"
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Set the number of messages you want to delete 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n The number of messages that have been cleared: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

//mute
const ms = require ('ms')
client.on('message',function(message) {
  var prefix = "*"
    let muteRole = message.guild.roles.find(r => r.name === "Muted");
    let muteId = message.mentions.users.first();
    let messageArray = message.content.split(" ");
    let muteReason = messageArray[3];
    let Swearing = '1h';
    let Advertising = '4h';
    let Spam = '2h';
   if(message.content.startsWith(prefix + "mute")) {
       if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send("**- You don't have the needed permissions!**");
       if(!muteId) return message.channel.send("**- Mention someone!**");
       if(muteId === message.author) return message.channel.send('**- You cannot mute yourself!**');
       if(muteId === client.user) return message.channel.send('**- You cannot mute me!**');
       message.guild.channels.forEach((channel, id) => {
      message.channel.overwritePermissions(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.channel.send(`
    \`\`\`ml
" Select the reason number "
1 : Insults and verbal abuse (annoying )
2 : Advertising
3 : Spamming
\`\`\`
__you have 20 seconds to choose __`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, ms(Swearing));
       message.channel.send(`**The player ${muteId} got muted Reason  Insults and verbal abuse**`);
      });
    });

message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, ms(Advertising));
       message.channel.send(`**The player ${muteId} got muted Reason Advertising**`);
      });
    });
message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      message.guild.member(muteId).addRole(muteRole)
      .then(() => { setTimeout(() => {
           message.guild.member(muteId).removeRole(muteRole);
       }, ms(Spam));
       message.channel.send(`**The player ${muteId} got muted Reason Spamming **`);
      });
    });
   });
   }
});

  
  
  client.login(process.env.BOT_TOKEN);
