const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
  client.user.setStatus("Online")
  });
  client.on("guildCreate", guild => {
    console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
  });
//Activity
client.on('ready',() =>{

setInterval(function(){

client.user.setActivity(` ON ${client.guilds.size} Servers - *help`,"*")

},10000)

});

//warn 
client.on('message', msg => { 
    if (msg.content.startsWith('*warn')) {
      if(!msg.member.hasPermission("MUTE_MEMBERS")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('**Mention a user/player ```Example: *warn @unknown#1547 spamming```**')
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
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**You dont have enough permissions!**");
       if(!toBan) return message.reply("** Mention a user! ```Example: *ban @unknown#1547 spamming```**");
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
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**You dont have enough permissions!**');
       if(!toReason) return message.reply("**Mention a user!  ```Example: *kick @unknown#1547 spamming```**")
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
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "*mute") {
        if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply("** You dont have permissions **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** There is no Mute Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You must mention person first ```Example: *mute @unknown#1547 spamming```**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('User:', 'Shut up / tell')
    .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) return message.reply('** You dont have permissions **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. The member was given Muted**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**Done The member got muted .. :white_check_mark:**").catch(console.error);
});
  }

};

});
//unmute
   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "*unmute") {
        if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply("** You dont have permissions **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** There is no Mute Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You must mention person first ```Example: *unmute @unknown#1547```**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('User:', 'Shut up / tell')
    .addField('Unmuted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) return message.reply('** You dont have permissions **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. Done Unmuted **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**Done Unmuted .. :white_check_mark:**").catch(console.error);
});
  }

};

});

//mutechannel and unmutechannel
client.on('message', message => {

    if (message.content === "*mutechannel") {
                        if(!message.channel.guild) return message.reply(' **This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You do not have permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**Chat has been muted **:white_check_mark: ")
           });
             }
if (message.content === "*unmutechannel") {
    if(!message.channel.guild) return message.reply(' **This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You do not have permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**Chat has been unmuted** :white_check_mark:")
           });
             }

});
//mute voice
client.on('message', message => {
  var prefix = "*"
      if(message.content.startsWith(prefix + 'mutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You do not have permission to give mute voice**:x: ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("**Mention a player to give him mute** ```Example: *mutevoice @unknown#1547```");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("**Try again.**");
      }
      muteMember.setMute(true);
      if(muteMember) {
        message.channel.sendMessage("**User got voice muted successfully.**");
      }
    }
  });
//unmute voice
  client.on('message', message => {
    var prefix = "*"
    if(message.content.startsWith(prefix + 'unmutevoice')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You do not have permission to give mute voice**:x: ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
       
    if(message.mentions.users.size === 0) {
        return message.reply("**Mention a player to unmute him** ```Example: *unmutevoice @unknown#1547```");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("**Try again.**");
    }
    muteMember.setMute(false);
    if(muteMember) {
      message.channel.sendMessage("**User got unmuted voice successfully.**");
    }
  }
});
client.on('message', message => {
	const prefix = '*'
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.reply("**Mention a player to move it to you** ```Example: *move @unknown#1547```")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`**You moved <@${usermentioned}> to your voice channel successfully :white_check_mark: **`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("**You can`t move this member **"+ message.mentions.members.first() +" **He must/should join voice to channel to move it**")
}
} else {
 message.channel.send("**You have to be in voice channel if you want to move him to you**")
}
} else {
message.react("❌")
 }}});
//report
client.on('message', msg => { 
if (msg.content.startsWith(`*report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply('**You must mention person first** ```Example: *report @unknown#1547 spamming``` ')

  if (!args[1]) return msg.reply(`**Ummm .. Write your report**`)

  if (msg.guild.channels.find('name', '📝-report')) { //channel name

    msg.guild.channels.find('name', '📝-report').send(`
  **:warning: Report** : ${msg.mentions.members.first()}
  ***Reported by***:  : ${msg.member}
  **Room** : ${msg.channel.name}
  ***:red_circle: Reason*** : :arrow_right: **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
});
//sug
client.on('message', msg => { 
if (msg.content.startsWith(`*sug`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply('**You must mention yourself first** ```Example: *sug  @YourName#1547 adding new commands``` ')

  if (!args[1]) return msg.reply(`**Ummm .. Write your suggestion**`)

  if (msg.guild.channels.find('name', '📋-suggestions')) { //channel name

    msg.guild.channels.find('name', '📋-suggestions').send(`
  ***Done by:***:  : ${msg.member}
  **Room** : ${msg.channel.name}
  ***:sparkle: Suggestion***: :arrow_right: **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
});
//your bot has been added to new server
client.on('guildCreate', guild => {
    client.channels.get("467682139975057408").send(`**Nameless Bot joined a new server ✅
  Server name: __${guild.name}__
  Server owner: __${guild.owner}__**`)
  });

 client.on('message' , message => {
   var prefix ="*"
     if (message.content === prefix + "botservers?") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***Total servers ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});
//bot owner 
client.on('message', message => {
  var prefix = "*"
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["236192758765715456"]; 
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**   The owner of the bot is here**` + `✅`)
} else {
   message.reply('**You are not the owner of the bot**' + '❌');   
}
}
});

//Welcome
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '👋-welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('**:hugging:  | name :  **',`**${member}**`)
        .addField('**:loudspeaker: | Welcome to Codes**' , `**Welcome to the server, ${member} :wave: **`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('**➡| You are the member number**',`**${member.guild.memberCount}**`)
               
                  .addField("**Name:**",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' **Server**', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
//GoodBye
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**Good Bye! :raised_hand::skin-tone-1: :pensive:**`)
        .setDescription(`**Good bye Nice to meet you** :raised_hand::skin-tone-1: :pensive:`)
        .addField('**:bust_in_silhouette:   remain**',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== We wish you the best ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '😢-good-bye')
    if (!channel) return;
    channel.send({embed : embed});
    });


//help
client.on('message', message => {
    if (message.content === "*help") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════ {✯Choose✯} ══════─ :sparkle:**')
.addField('     **❧ *help-1 ➺ Setup the bot :wrench: ** ','**════════════**') 
.addField('     **❧ *help-2 ➺ General commands :fire:**','**════════════**') 
.addField('     **❧ *help-3 ➺ Music Commands __(Coming Soon)__ :musical_note: **' ,'**════════════**') 
.addField('     **❧ *help-4 ➺ Management orders__(Staff Commands)__ :no_entry:**' ,'**════════════**') 
.addField('     **❧ :pushpin: Important ➺ give the bot needed __permissions__ So it can work without any problems :no_entry:**' ,'**════════════**') 
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});

//help-1
client.on('message', message => {
if (message.content === "*help-1") { 
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**This is for management only (Who have __ADMINISTRATOR__ ON can setup the bot)**");
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════ {✯Choose✯} ══════─ :sparkle:**')
.addField('     **❧ *help-setup-warn ➺ Setup warn :warning: ** ','**════════════**')  //Done
.addField('     **❧ *help-setup-report ➺ Setup report 📝** ','**════════════**')  //Done
.addField('     **❧ *help-setup-sug  ➺ Setup suggestions 📋** ','**════════════**')  //Done
.addField('     **❧ *help-setup-welcome ➺ Setup welcome message 👋** ','**════════════**') //Done
.addField('     **❧ *help-setup-goodbye ➺ setup goodbye message  😢** ','**════════════**') //Done
.addField('     **❧ *help-setup-AutoRole ➺ setup Auto Role :gear: ** ','**════════════**') //Done
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});

//help warn
client.on('message', message => {
if (message.content === "*help-setup-warn") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════  {✯Setup warn :warning:✯} ══════─ :sparkle: **')
.addField('** How to setup warn?  **',"**Just Make new channel and name it ```⚠-warns```**") 
.addField('** :pushpin: Important:  **',"**After you make `⚠-warns` go to this channel __perms__ then got to `@everyone` __disable send messages__**") 
.addField('** :ok_hand: The warn is going to be like this in `⚠-warns` channel  **',"**https://imgur.com/XZd9yR3**") 
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help report
client.on('message', message => {
if (message.content === "*help-setup-report") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════  {✯Setup report 📝✯} ══════─ :sparkle: **')
.addField('** How to setup warn?  **',"**Just Make new channel and name it ```📝-report```**") 
.addField('** :pushpin: Important:  **',"**After you make `📝-report` go to this channel __perms__ then got to `@everyone` and __disable send messages__**")
.addField('** :ok_hand: The report is going to be like this in `📝-report` channel  **',"**https://imgur.com/vNQALax**") 
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help suggestions
client.on('message', message => {
if (message.content === "*help-setup-sug") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════  {✯Setup suggestions 📋✯} ══════─ :sparkle: **')
.addField('** How to setup warn?  **',"**Just Make new channel and name it ```📋-suggestions```**") 
.addField('** :pushpin: Important:  **',"**After you make `📋-suggestions` go to this channel __perms__ then got to `@everyone` __disable send messages__**") 
.addField('** :ok_hand: The suggestions is going to be like this in `📋-suggestions` channel  **',"**https://imgur.com/PVrgyn8**") 
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help welcome
client.on('message', message => {
if (message.content === "*help-setup-welcome") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════  {✯Setup welcome message 👋✯} ══════─ :sparkle: **')
.addField('** How to setup warn?  **',"**Just Make new channel and name it ```👋-welcome```**") 
.addField('** :pushpin: Important:  **',"**After you make `👋-welcome` go to this channel __perms__ then got to `@everyone` __disable send messages__**") 
.addField('** :ok_hand: The welcome message is going to be like this in `👋-welcome` channel  **',"**https://imgur.com/kFf9Mar**")
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help goodbye
client.on('message', message => {
if (message.content === "*help-setup-goodbye") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════  {✯Setup goodbye message  👋✯} ══════─ :sparkle: **')
.addField('** How to setup warn?  **',"**Just Make new channel and name it ```😢-good-bye```**")
.addField('** :pushpin: Important:  **',"**After you make `😢-good-bye` go to this channel __perms__ then got to `@everyone` __disable send messages__**") 
.addField('** :ok_hand: The goodbye message is going to be like this in `😢-good-bye` channel  **',"**https://imgur.com/OA6EJGW**")
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help AutoRole
client.on('message', message => {
if (message.content === "*help-setup-AutoRole") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════  {✯Setup AutoRole :gear:✯} ══════─ :sparkle: **')
.addField('** How to setup AutoRole?  **',"**Just Make new role and name it ```Member```**")
.addField('** :ok_hand: **',"**I am sorry we can just do Auto role for Member (For now)**")
.addField("**:red_circle:  Nameless Support Discord :tools:   **","**-https://discord.gg/atk3A2C**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//Staff commands 
client.on("message", message => {
  var prefix ="*"
    if (message.content === (prefix + "help-4")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`


 **
╔[❖════════════❖]╗
              Nameless Bot
╚[❖════════════❖]╝

╔[❖════════════❖]╗
              Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
  :radioactive:Management orders:no_entry:
╚[❖════════════❖]╝

__(Staff Commands)__

❖ *clear :octagonal_sign:➾ Clear Chat

❖ *kick  :outbox_tray: ➾ Kick members

❖ *ban :no_entry: ➾ Ban members

❖ *warn  :warning: ➾ Warn members

❖ *mute  :neutral_face: ➾ Mute members

❖ *unmute  :smiley: ➾ Unmute members

❖ *mutechannel  :notepad_spiral: ➾ Mute channels

❖ *unmutechannel  :pencil: ➾ Unmute channels

❖ *mutevoice  :no_mouth: ➾ Mute members (Voice)

❖ *unmutevoice  :smile: ➾ Unmute members (Voice)

❖ *move  :airplane: ➾ Move members to your Voice channel (Voice)

════════════

:red_circle: Nameless Support Discord :tools: ➾ https://discord.gg/atk3A2C

════════════

**`)
   message.channel.sendEmbed(embed)
   
   }
   }); 
//Music commands 
client.on("message", message => {
  var prefix ="*"
    if (message.content === (prefix + "help-3")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`


 **
╔[❖════════════❖]╗
              Nameless Bot
╚[❖════════════❖]╝

╔[❖════════════❖]╗
              Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
    :musical_note: Music Commands :musical_note:
╚[❖════════════❖]╝

__(Coming Soon)__

❖ *play :musical_note:➾ Plays stated youtube URL

❖ *stop  :musical_keyboard: ➾ Stops music playing

❖ *pause :musical_score: ➾ Pauses current music

❖ *resume  :recycle: ➾ Resumes current song

❖ *skip  :left_right_arrow: ➾ Skip the song

════════════

:red_circle: Nameless Support Discord :tools: ➾ https://discord.gg/atk3A2C

════════════

**`)
   message.channel.sendEmbed(embed)
   
   }
   }); 
//achieve
const sql = require("sqlite");
client.on("message", async message => {
  var prefix = "*"
    if (message.content.startsWith(prefix + "achieve")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});
client.on('message', message => {
  var prefix = "*"
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage('**:ping_pong: Pong! In **`' + `${client.ping}` + ' ms`');
    }
});
//avatar 
client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
//server
client.on('message', function(msg) {
         var prefix = "*"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ Number of members__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ Number of members online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ Voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ Owner__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ Server Id__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ The server was done in__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//id
client.on('message', message => {
    var prefix = "*"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'Bot';
}else {
var w = 'Member';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| Your Name:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ID:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| Your account type:',"**"+ w + "**",true)    
.addField('📛| The code is right for your account:',"**#" +  `${z.discriminator}**`,true)
.addField('**The date in which your account was created | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**The date you entered the server| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | The date of creating your full account:**', message.author.createdAt.toLocaleString())
.addField("**The last message for you | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**Mention correctly  ❌ **').catch(console.error);

}

});
//member
client.on('message', message => {
    if(message.content == '*member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });
//say
client.on('message', message => {
  var prefix = "*"
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "say") {
     message.channel.sendMessage(args.join("  "))
     message.delete()
    }
});
//bot
client.on('message', message => {
  if(message.content === "*bot") {
      const embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
      .setDescription(`**On** **__${client.guilds.size}__ Servers 🌐**
**With** **__${client.users.size}__ Users 👥**
**and** **__${client.channels.size}__ Channels 📚** `)
             message.channel.sendEmbed(embed);
         }
});
//MC skins
client.on("message", message => {
    var prefix = "*"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "MCskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
//Date and time
client.on('message' , async (message) => {
    var prefix = "*"
      if (message.content.startsWith(prefix + 'day')) {
  var today = new Date()
  let Day = today.toString().split(" ")[0].concat("day");
  let Month = today.toString().split(" ")[1]
  let Year = today.toString().split(" ")[3]
  message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
  }
  }); 
//emoji 
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
  var prefix = "*"
       if(message.content.startsWith(prefix + "emoji")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});
//flip
client.on('message' , async (message) => {
  var prefix = "*"
 if (message.content.startsWith(prefix + 'flip')) {
  let args = message.content.split(" ").slice(1);
if(!args[0]) return message.channel.send('Correct usage: **ks!reverse (text to reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Wait... You broke it!`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}
});
//Link
client.on('message', message => {
    if (message.content.startsWith("*Link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**The link was sent with a private message**")

message.author.send(`**Link duration: day
Number of uses of the link : 100**`)


    }
});
//invite my bot to your discord server
             client.on('message', message => {
				    var prefix = "*"
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("** :arrow_right: Invite Nameless Bot to your Discord Server!**")
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=465993722342014986&permissions=8&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});
//uptime 
client.on('message', message => {
    var prefix = "*"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

//calculate
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
	var prefix = "*"
 if (msg.content.startsWith(prefix + 'calculate')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});
//tag
const figlet = require('figlet');
client.on('message', message => {
  var prefix = "*"
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('**Please write the text you want**');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});
//server avatar
client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`** __${message.guild.name}__ Server Avatar: :arrow_down: **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });
//Join Support Server
             client.on('message', message => {
				    var prefix = "*"
                if(message.content === prefix + "Support") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("** :arrow_right: Join Nameless Support Discord!**")
                    .setURL("https://discord.gg/YnaS8Up");
                   message.channel.sendEmbed(embed);
                  }
});

//help commands
client.on("message", message => {
  var prefix ="*"
    if (message.content === (prefix + "help-2")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
 **
╔[❖════════════❖]╗
              Nameless Bot
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
         :globe_with_meridians: General commands
╚[❖════════════❖]╝


❖ *ping :stopwatch:➾ Check your connection speed

❖ *avatar  :camping: ➾ Shows your avatar or other players/members avatar

❖ *ser-av  :tent:  ➾ Shows your server avatar

❖ *bot :floppy_disk: ➾ Info about the bot

❖ *server  :recycle: ➾ For server information

❖ *id  :id: ➾ Shows your ID

❖ *roles  :eight_pointed_black_star:  ➾ Shows your server roles

❖ *member :hearts: ➾ Shows everyone Status

❖ *emoji  :gem: ➾ Write your word in emoji

❖ *flip  :arrows_clockwise: ➾ Flip your word

❖ *calculate :thinking: ➾ calculate

❖ *tag :pen_ballpoint: ➾ put your name or any other name

❖ *uptime  :timer: ➾ Bot uptime

❖ *day :cloud: ➾ Shows the date and the time

❖ *hack  :satellite:  ➾ Fake hack 

❖ *sh  🔎  ➾ Search for members in your discord server

❖ *Link  :link: ➾ Give you your Discord invite link 

❖ *MCskin :heart_eyes: ➾ Shows your minecraft skin 

❖ *achieve :clap: ➾ Achieve something in minecraft

❖ *sug :notepad_spiral: ➾ Your suggestion

❖ *report :pencil: ➾ Report members

❖ *Staff 💙  ➾ Shows Nameless Bot Staff Team

❖ *inv :red_circle: ➾ Invite Nameless bot to your discord server

❖ *Support :wrench:  ➾ Join Nameless Support Discord
════════════

:red_circle: Nameless Support Discord :tools: ➾ https://discord.gg/atk3A2C

════════════

**`)
   message.channel.sendEmbed(embed)
   
   }
   }); 
//Anti Spam
const ms = require("ms");

const fs = require("fs");


var user = {};
var warn = {};

client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`Sender ${message.author.username}#${message.author.discriminator} `)
      .setDescription("**:white_check_mark:  | `Spamming`\n\nName:\n"+`${message.author.username}#${message.author.discriminator}`+"\nYou got\n  __Muted__\n**")
      .setFooter("【✭ Nameless Bot Anti-Spam ✭】")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle("**:scales: | You have been Muted**")
      .setDescription(`**:small_blue_diamond: You have break the server rules\n \n:gun: : You got __Muted__\n :clock1: Time and date of punishment:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`In case the mute by mistake, contact server staff`**")
          .setFooter("【✭ Nameless Bot Anti-Spam ✭】")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});
//fake hack
client.on('message', message => {
  var prefix = "*"
     if(message.content.startsWith(prefix + "hack")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("**【✭ Nameless Bot ✭】**", '**Who do you want to hack? ```Example: *hack @unknown#1547 Test```**')
            .setFooter(`Nameless Bot`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("**【✭ Nameless Bot ✭】**", `**Reason for hacking**`)
        return message.channel.send({embed});
    }
    embed.addField("**【✭ Nameless Bot ✭】**", `**Done ${user.tag}! got hacked**`)
        .setFooter(`Nameless`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("**【✭ Nameless Bot ✭】**", `**You got hacked**`)
        .addField("**Reason for hacking**", `**${reason}**`)
        .setFooter(`**Hack type: is Unknown**`);
    user.send({embed: embed1});
}
});
//Roles
client.on('message', message => {
    if (message.content === '*roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('**Roles**:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

///search for member
client.on('message', message => {
  var prefix = "*"
   let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "sh")) {
let Embed = new Discord.RichEmbed()
        .setColor(0x36393e);
    if (!args[0]) {
        Embed.setFooter(`Example: *sh Name`);
        return message.channel.send(Embed); 
    }

    if (args[0].length <= 1) {
        Embed.setFooter(`Incorrect usage: sh < 1+ characterSeach >`);
        return message.channel.send(Embed); 
    }
    let array = []; 
    let number = 0; 
    message.guild.members.map(m => { 
        if (m.user.username.toUpperCase().includes(args[0].toUpperCase())) { 
            number++; 
            array.push(`${number}. ${m.user.username}`); 
        }
    });
    Embed.setTitle(`Results for "${args[0]}"`);
    Embed.setDescription(`\`\`\`${array.slice(0, 30).join(`\n`)}\`\`\``);

    message.channel.send(Embed);
   
   }
}); 
//Auto role
client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
    console.log(`[INFO] ${client.user.username}`)
    console.log(`[INFO] ${client.users.size}`)
    console.log(`[INFO] ${client.guilds.size}`)
    console.log(`[BOT] Auto Role `)
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Member'));
});

//Anti Adv
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('MANAGE_MESSAGES'))
        message.delete()
    return message.reply(`** :anger: __Advertising__ is not allowed here! :angry: **`)
    }
});
//Staff
client.on("message", message => {
  var prefix ="*"
    if (message.content === (prefix + "Staff")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
**
⫷༺Nameless Bot Staff༺⫸

Nameless Head Developers👑:
-【✭ @_xShaDowZx#1920 ✭】 
-【✭ @Witherr#1360 ✭】
════════════
Nameless Support Manager:
-༺ @_𝕱𝖊𝖆𝖗𝖑𝖊𝖘𝖘#0175 ༻
════════════
Nameless Supporters:
:one: -@BarisE#5634 
:two: -@Ashton#0546 
:three: -@SammyB#0788 
════════════
:red_circle: Nameless Support Discord :tools: ➾ https://discord.gg/atk3A2C
════════════
**`)
   message.channel.sendEmbed(embed)
   
   }
   }); 
 
client.login(process.env.BOT_TOKEN);
