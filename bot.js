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
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
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
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
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
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' You do not have permissions');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**Chat has been muted **:white_check_mark: ")
           });
             }
if (message.content === "*unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permissions');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**Chat has been unmuted** :white_check_mark:")
           });
             }

});
//report
client.on('message', msg => { 
if (msg.content.startsWith(`*report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply('**You must mention person first** ```Example: *report @unknown#1547 spamming``` ')

  if (!args[1]) return msg.reply(`Ummm .. Write your report`)

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

  if (!msg.mentions.members.first()) return msg.reply('**You must mention yourself first** ```Example: *sug  @unknown#1547 adding new commands``` ')

  if (!args[1]) return msg.reply(`Ummm .. Write your suggestion`)

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
    client.channels.get("466223542166618123").send(`**Woops new server ✅
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
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});

//help-1
client.on('message', message => {
if (message.content === "*help-1") { 
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**This is for management (Owner/Staff) only**");
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**:sparkle: ─══════ {✯Choose✯} ══════─ :sparkle:**')
.addField('     **❧ *help-setup-warn ➺ Setup warn :warning: ** ','**════════════**')  //Done
.addField('     **❧ *help-setup-report ➺ Setup report 📝** ','**════════════**')  //Done
.addField('     **❧ *help-setup-sug  ➺ Setup suggestions 📋** ','**════════════**')  //Done
.addField('     **❧ *help-setup-welcome ➺ Setup welcome message 👋** ','**════════════**') //Done
.addField('     **❧ *help-setup-goodbye ➺ setup goodbye message  😢** ','**════════════**') 
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
.addField('** :ok_hand: The warn is going to be like this in ⚠-warns channel  **',"**https://imgur.com/XZd9yR3**") 
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
.addField('** :ok_hand: The report is going to be like this in 📝-report channel  **',"**https://imgur.com/vNQALax**") 
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
.addField('** :ok_hand: The suggestions is going to be like this in 📋-suggestions channel  **',"**https://imgur.com/PVrgyn8**") 
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
.addField('** :ok_hand: The welcome message is going to be like this in 👋-welcome channel  **',"**https://imgur.com/kFf9Mar**") 
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
.addField('** :ok_hand: The goodbye message is going to be like this in 😢-good-bye channel  **',"**https://imgur.com/OA6EJGW**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//Staff commands 
client.on('message', message => {
if (message.content === "*help-4") {
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('This property is for management only');
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**:radioactive: Management orders__(Staff Commands)__ :no_entry:**","** **")
.addField("***clear :octagonal_sign:**","**-Clear Chat**")
.addField("***kick  :outbox_tray:**","**-Kick members**")
.addField("***ban  :no_entry:**","**-Ban members**")
.addField("***warn :warning: **","**-Warn members**")
.addField("***mute :no_mouth: **","**-Mute members**")
.addField("***unmute :smiley:  **","**-Unmute members**")
.addField("***mutechannel :notepad_spiral:  : **","**-Mute channels**")
.addField("***unmutechannel :pencil: **","**-Unmute channels**")
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//Music commands 
client.on('message', message => {
if (message.content === "*help-3") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("** :musical_note: Music Commands __(Coming Soon)__ :musical_note: **","** **")
.addField("**#play :musical_note:**","**-Turn on the desired**")
.addField("**#stop  :musical_keyboard:**","**-Stop required**")
.addField("**#pause :musical_score:**","**-Turn off the temp timer**")
.addField("**#resume :mute: **","**-Turn on the desired after the stop**")
.addField("**#skip :left_right_arrow:**","**-Skip the song**")
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
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
  .addField('**Memory used 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**Connection Speed  📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**using the processor 💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 Number of servers**' , `${client.guilds.size}`, true)
        .addField('**users number 👥 **' , `${client.users.size}`, true)
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
                    embed.setTitle("**:arrow_right: Invite Nameless Bot!**")
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

///Help Codes
client.on('message', message => {
    if (message.content === "*help-2") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**:globe_with_meridians: __General commands__**","** **")
.addField("***ping :stopwatch:**","**-Check your connection speed**")
.addField("***avatar :camping:**","** -Pictures of the chosen person**")
.addField("***bot :floppy_disk:**","**  -Info about the bot**")
.addField("***server :recycle:**","** -For server information**")
.addField("***id :id: **", "**-Shows your ID**")
.addField("***member :hearts: **", "**-Shows who everyone Status**")
.addField("***emoji :gem: **", "**-Write your word in emoji**")
.addField("***flip :arrows_clockwise: **","**-Flip your word**")
.addField("***uptime :timer: **","**-Bot uptime**")
.addField("***day :cloud: **","**-Shows the date and the time**")
.addField("***Link :link: **","**-Give you your Discord invite link**")
.addField("***MCskin :heart_eyes:  **", "**-Shows your minecraft skin**")
.addField("***achieve :clap: **", "**-Achieve something in minecraft**")
.addField("***sug :notepad_spiral: **", "**-Your suggestion**")
.addField("***report :pencil: **","**-Report members**") 
.addField("***inv :red_circle:  **","**-Invite Nameless bot to your discord server**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});


 
  client.login(process.env.BOT_TOKEN);
