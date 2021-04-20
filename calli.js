////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
///////////////////////////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const calli = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s!";
const cooldown = new Set();
const cdtime = 5;
///////////////////////////////////////////////////////////////////////////////
const callicolor = "0D26DD";
const calliImage = "";
const callitrue  = "";
const callifalse = "";
const calliwarn  = "";
///////////////////////////////////////////////////////////////////////////////
calli.login("ODMxNDUyODUzNjk1NTQ1MzQ1.YHVczw.t1qYT2YMDIg1_JcznRVCyZ3JMNs");
///////////////////////////////////////////////////////////////////////////////
calli.on("ready", () => {
  console.log(`${calli.user.tag}`);
  calli.user.setActivity(`${prefix}help`, {
    Type: "Playing"
  });
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    let help = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setImage(calliImage)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`
━────╮<a:1me:818520018856706090>╭────━
<a:zangana4:828964501562720286> **Public Command**
\`${prefix}botinfo\` - \`${prefix}userinfo\`
\`${prefix}serverinfo\` - \`${prefix}ping\`
\`${prefix}members\` - \`${prefix}id\`
\`${prefix}botlink\` - \`${prefix}stats\`
\`${prefix}avatar\` - \`${prefix}contact\`
\`${prefix}apply\`
━────╮<a:2me:818520018392186920>╭────━
<a:zangana7:818521426574311495> **Moderation Command**
\`${prefix}lock\` - \`${prefix}unlock\`
\`${prefix}ban\` - \`${prefix}kick\`
\`${prefix}rules\` - \`${prefix}aembed\`
\`${prefix}hide\` - \`${prefix}show\`
\`${prefix}tk\`
━────╮<a:3me:818520020190888016>╭────━
<a:zangana1:818521427862355968> **Security Command**
\`${prefix}anti ban {number}\`
\`${prefix}anti kick {number}\`
\`${prefix}anti channelD {number}\`
\`${prefix}anti channelC {number}\`
\`${prefix}anti roleD {number}\`
\`${prefix}anti roleC {number}\`
\`${prefix}settings\`
━────╮<a:4me:818520018697715803>╭────━
<a:zangana9:818520014088437831> **Music Command**
\`${prefix}play\` - \`${prefix}skip\`
\`${prefix}stop\` - \`${prefix}loop\`
\`${prefix}nowplaying\` - \`${prefix}lyrics\`
\`${prefix}queue\` - \`${prefix}remove\`
\`${prefix}resume\` - \`${prefix}search\`
\`${prefix}volume\`
====================
<:zangana6:818521426330910750> **Links**
[Bot Website](https://sumbotxyz-by-Tosaku-shita-koda.powermidia.repl.co) - [Support Website](https://mwqaa-shkhSy-be-Spiced1111.powermidia.repl.co)
 
 `);
    message.channel.send(help);
  }
});

///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "shoffdfvfvfdcvfvfvfdfvvfw anti")) {
    let showanti = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setImage(calliImage)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`
━────╮🛠╭────━
**Security**
\`${prefix}anti ban {number}\`
\`${prefix}anti kick {number}\`
\`${prefix}anti channelD {number}\`
\`${prefix}anti channelC {number}\`
\`${prefix}anti roleD {number}\`
\`${prefix}anti roleC {number}\`
━────╮🛠╭────━
      `);
    message.channel.send(showanti);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("❗ | You cant send `here` .");
    msg.react(callifalse);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("❗ | You cant send `everyone` .");
    msg.react(callifalse);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  var ms = require("ms");

  var moment = require("moment");

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let embed = new Discord.MessageEmbed()
    .setTitle("Examples:")
    .setColor(callicolor).setDescription(`${prefix}ban @metion 1h share
${prefix}ban @metion 1d selfbot
${prefix}ban @metion 1w swearing
`);
  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");

    if (!message.guild.member(calli.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");

    let user = message.mentions.users.first();

    let Reason = message.content
      .split(" ")
      .slice(3)
      .join(" ");

    let time = messageArray[2];

    if (message.mentions.users.size < 1) return message.channel.send(embed);

    if (!message.guild.member(user).bannable)
      return message.reply("**I Don't Have Permission For Ban This User**");

    if (!Reason) {
      message.guild.member(user).ban({ reason: Reason });
    }

    if (!Reason && time) {
      message.guild.member(user).ban(7, user);
    }

    if (!time) {
      message.guild.member(user).ban(7, user);
    }
    if (time === "0") {
      message.guild.member(user).ban(7, user);
    }
    if (time) {
      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    }

    if (time && Reason && user) {
      message.guild.member(user).ban({ reason: Reason });

      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    }

    message.channel.send(
      `:white_check_mark:  ${user.tag} banned from the server ! :airplane:`
    );
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  var prefix = "p!";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply("You Don't Have KICK_MEMBERS Permission")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(calli.user).hasPermission("KICK_MEMBERS"))
      return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.reply("Mention Someone");
    if (!reason) reason = "Null";
    if (!message.guild.member(user).bannable)
      return message.reply("I can not be higher than my rank");

    message.guild.member(user).kick(7, user);

    message.channel.send(
      `**:white_check_mark: ${user} has been kicked ! :airplane:**`
    );
    user.send(
      `**:airplane: You are has been kicked in ${message.guild.name} reason: **`
    );
    message.delete();
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on('message', bas7wo => {
let moment = require("moment");
let error = "❌";
let success = "✅";
let lodeing = "🤔";
        if (bas7wo.content.startsWith(prefix + "userinfo")) {
            if (bas7wo.author.bot) return;
            if (bas7wo.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`request BY ${msg.author.tag}`).setTimestamp())
 
            var args = bas7wo.content.split(" ").slice(1);
            let user = bas7wo.mentions.users.first();
            var men = bas7wo.mentions.users.first();
            var heg;
            if (men) {
                heg = men
            } else {
                heg = bas7wo.author
            }
            var mentionned = bas7wo.mentions.members.first();
            var h;
            if (mentionned) {
                h = mentionned
            } else {
                h = bas7wo.member
            }
            moment.locale('ar-TN');
            let id = new Discord.MessageEmbed()
                .addField('**JOINED DISCORD :**', `${moment(heg.createdTimestamp).format('YYYY/M/D')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``, true)
                .addField('**JOINED SERVER :**', `${moment(h.joinedAt).format('YYYY/M/D')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
                .setThumbnail(heg.avatarURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }));
            bas7wo.channel.send(id)
        }
    })
//////////////////////////////////////////////////////////////////////////////
calli.on("message", msg => {
  if (msg.content === prefix + "serverinfo") {
    const embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setThumbnail(msg.guild.iconURL())
      .setTitle(`${msg.guild.name}`, true)
      .setTitle(`${msg.guild.name}`, true)
      .addField("Server ID", `${msg.guild.id}`, true)
      .addField("Created On", msg.guild.createdAt.toLocaleString())
      .addField("Owner Server", `${msg.guild.owner}`, true)
      .addField("Members", `**[${msg.guild.memberCount}]**`, true)
      .addField("Channels", `**[${msg.guild.channels.cache.size}]**`, true)
      .addField("Region", `**[${msg.guild.region}]**`, true)
      .addField("Roles", `**[ ${msg.guild.roles.cache.size} ]**`, true);
    msg.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", msg => {
  if (msg.content === prefix + "botinfo") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(calli.user.username, calli.user.avatarURL())
      .setThumbnail(calli.user.avatarURL())
      .setColor(callicolor)
      .setTitle(` ${calli.user.username} `)
      .addField("servers", `**${calli.guilds.cache.size}**`, true)
      .addField("channels", `**${calli.channels.cache.size}**`, true)
      .addField("Users", `**${calli.users.cache.size}**`, true)
      .addField("My Name", `**${calli.user.tag}**`, true)
      .addField("My ID", `**${calli.user.id}**`, true)
      .addField("Owner Bot", `! ZANGANA#7784`, true);

    msg.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "invite"))
    message.channel.send(
      `<@${message.author.id}>, https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot`
    );
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(calli.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${calli.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot`
      )
      .setColor(callicolor)
      .setDescription(
        `🔒 | Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${callifalse}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(calli.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${calli.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot`
      )
      .setColor(callicolor)
      .setDescription(
        `🔓 | UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${callitrue}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(calli.ping)}`;
      msg.channel.send(`**Time taken: ${PinG} ms.**`);
    });
  }
});
//////////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
calli.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Just Can Online Ownership**");
    if (message.content.startsWith(prefix + "anti ban")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].banLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti kick")) {
        let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].kickLimits}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(embed);
    }
        if (message.content.startsWith(prefix + "anti roleD")) {
          let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].roleDelLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].roleCrLimits}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
    let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].chaDelLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].chaCrLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti time")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].time}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(embed);
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
calli.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Channels\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Channels\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Role\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Roles\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("ban member");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("member kick");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Kick\` Many \`Members\` ${calliwarn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 2,
        chaDelLimit: 2,
        roleDelLimit: 2,
        kickLimits: 2,
        chaCrLimit: 2,
        roleCrLimits: 2
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("kick member");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "settings") {
    if (message.author.id !== message.guild.ownerID) return;
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");
    let embed = new Discord.MessageEmbed()
      .setTitle("")

      .setURL("")

      .setDescription(
        `AntiBan
Enabled: ${callitrue}
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled: ${callitrue}
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannel C - D
Enabled: ${callitrue}
Maximum Create : ${config[message.guild.id].chaCrLimit}
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiRole C - D
Enabled: ${callitrue}
Maximum Create : ${config[message.guild.id].roleCrLimits}
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiTime
Enabled: ${callitrue}
Maximum Time : ${config[message.guild.id].time}`
      )
      .setColor(callicolor)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});

/////////////////////{  Membwers  }///////////
calli.on("message", message => {
    if(message.content === prefix+"members") {
        message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status !== 'offline');
           
            message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`)
        });
    }
})
/////////////////////////
calli.on('message', naarCodes=> {
let command = naarCodes.content.toLowerCase().split(" ")[0];
if (command == `${prefix}RULES` || command == `${prefix}rules` || command == `${prefix}Rules`) {
   if (naarCodes.author.bot) return;
    var angelo = new Discord.MessageEmbed()
    .setTitle(`rules of ${naarCodes.guild.name}`)
.setDescription(`
\`R1\`- Swearing is forbidden
\`R2\`- Not Spam
\`R3\`- Posting links is prohibited
\`R4\`- Respect for members 
\`R5\`- Do not send files other than pictures and videos
\`R6\`- It is forbidden to interfere in the affairs of the administration
\`R7\`- It is forbidden to order anything literally, whether arranged, credited or nitrous 
\`R8\`- It is forbidden to speak about politics or religions
\`R9\`- Not to bully any of the members 
\`R10\`- Do not disturb the sound rheum 
\`R11\`- It is forbidden to sell literally anything on the server
`)
.setColor("#E74C3C")
    .setThumbnail(naarCodes.guild.iconURL({dynamic: true}))
    naarCodes.channel.send(angelo)
  }
});
 ////////////////////////
calli.on("guildCreate", (naarCodes) => {
   let channel = calli.channels.cache.get(naarCodes.channels.cache.filter(naar=> naar.permissionsFor(calli.user).has("SEND_MESSAGES") && naar.type === "text").map(angelo => angelo.id)[0])    
       channel.send(" Supas Bo Zyad kedne ProM2 Bots Bo Servarakat ")
      });
//////////////////
calli.on("message", id => {if (!id.guild) return;if (id.content.startsWith(prefix + "id")) {var embed = new Discord.MessageEmbed().setColor("RANDOM").setDescription("").setTimestamp().addField("YOUR ID", `${id.author.id}`).setFooter(`ID by: ${id.author.tag}`,'https://cdn.discordapp.com/attachments/809575811849256991/823991896782274560/2633881.png')
id.channel.send(embed)
}});
///////////////
calli.on("message", async(eren) => { 
  if(eren.content.toLowerCase().startsWith(prefix + "apply")) { 
  if(!eren.guild || eren.author.bot) return;
  let channel = eren.guild.channels.cache.get("829074433251082241")
  
   if(!channel) return eren.channel.send(new Discord.MessageEmbed()
   .setTitle(`!صـاحب البوت لم يقم بوضع ايدي الروم المُرسل اليه بياناتك الـتقديمية`)
   .setFooter(`لـشراء نسخة كود التقديم المطورة تواصل مع : 'Eren.#5336`)
   .setColor(`RED`)) 
    eren.channel.send(`**Created By: '! ZANGANA#7784**`).then(e => {
    	setTimeout(() => {
    	e.edit(`#` + "1" + " - " + "أسـمك")
    	}, 2000)
    	
      e.channel.awaitMessages(q1 => q1.author == eren.author,{ max: 1, time: 10000 } ).then (m1 => {
      m1 = m1.first();
      var hisName = m1.content;
      e.delete();
      
      eren.channel.send(`**Created By: '! ZANGANA#7784**`).then(e1 => {
    	setTimeout(() => {
    	e1.edit(`#` + "2" + " - " + "عـمرك")
    	}, 2000)
    	
      e1.channel.awaitMessages(q2 => q2.author == eren.author,{ max: 1, time: 10000 } ).then ( (m2) => {
      m2 = m2.first();
      var hisAge = m2.content;
      e1.delete();
      
      eren.channel.send(`**Created By: '! ZANGANA#7784**`).then(e2 => {
    	setTimeout(() => {
    	e2.edit(`#` + "3" + " - مـدة تفاعلك")
    	}, 2000)
      
      e2.channel.awaitMessages(q3 => q3.author == eren.author,{ max: 1, time: 60*1000 } ).then ( (m3) => {
      m3 = m3.first();
      var hisTafa3l = m3.content;
      e2.delete();
      
      eren.channel.send(`**Created By: '! ZANGANA#7784**`).then(e3 => {
    	setTimeout(() => {
    	e3.edit(`#` + "4" + " - " + `لـماذا هـذا السيرفر بالـتحديد ؟`)
    	}, 2000)

      e3.channel.awaitMessages(q4 => q4.author == eren.author,{ max: 1, time: 60*1000 } ).then ( (m4) => {
      m4 = m4.first();
      var hisTafa3l1 = m4.content;
    	e3.delete();
    	
    	eren.channel.send(`> ✅ - تـم ايصـال بـياناتك الـتقديمية`).then(msg => {
    		setTimeout(() => {
    			msg.delete();
    		}, 4000)
    	})
    	channel.send(new Discord.MessageEmbed()
    	.setTitle(`بـيانات تـقديم جديدة`)
    	.addField(`منشن المُقدم :`, eren.author)
    	.addField(`أسـم الـمُقدم بالـواقع :`, hisName)
    	.addField(`عـمر الـمُقدم :`, hisAge)
    	.addField(`مـدة تـفاعل الـمُقدم :`, hisTafa3l)
    	.addField(`سـبب اختياره لهذا الـسيرفر :`, hisTafa3l1)
    	.setFooter(`ايـدي المُقدم :` + " " + eren.author.id))
    	
            })
              })
        })
       })
    

            
            
           
  })
  })
      })
    })
  }
 
  
 });




calli.on('message', async(eren) => {
	if(eren.content.toLowerCase().startsWith(prefix + "yes")) { 
		let role = eren.guild.roles.cache.get("829074651513618442");
	if(!role) {
			return eren.channel.send(`> لا يمكن ايجاد على هذه الرول`)
		}
		let user = eren.mentions.members.first();
		if(!user) {
			return eren.channel.send(`> قُم بتحديد الشخص من خلال المنشن`)
		}
		eren.react("✅")
		eren.guild.members.cache.get(user.id).roles.add(role).catch(err => {
			return eren.channel.send(`> Error : ${err.message}`)
		}) 
		
		eren.guild.channels.cache.get("828313601504575538").send(`> ${user} تـم قبولك , بالتوفيق ❤️`)
		
		
	}
})
calli.on('message', async(eren) => {
	if(eren.content.toLowerCase().startsWith(prefix + "no")) { 
				let user = eren.mentions.members.first();
		if(!user) {
			return eren.channel.send(`> قُم بتحديد الشخص من خلال المنشن`)
		}
		eren.react("✅")
		eren.guild.channels.cache.get("828313601504575538").send(`> ${user} تـم رفضك , للاسف 💔`)
		
		
	}
})
///////////////////
calli.on('message', redxfire => {
    if (redxfire.content.startsWith(prefix + "aembed")) {
        let BY = redxfire.content.split(" ").slice(2).join(" ")
        let REDXFIRE = redxfire.content.split(" ")
        let embed = new Discord.MessageEmbed()
        .setDescription(`${BY}`)
        .setColor(`${REDXFIRE[1]}`)
        .setThumbnail(redxfire.guild.iconURL())
        redxfire.channel.send(embed)
    }
})
//////////////////////
calli.on('message', async message => {
    if(message.content.startsWith(prefix + "botlink")){
     let bot = message.content.split(" ").slice(1).join(" ");
if(!bot) return message.channel.send(`> ** :confused: - Please send a bot id **`)
if(isNaN(bot)) return message.channel.send('Please aproved vaild id');
message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=${bot}&Permissions=8&scope=bot`)
    }
    })
//////////////////
calli.on('message', message => {
var prefix = "p!";//برفكس بوتك
      if(message.content === prefix + "hide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});

calli.on('message', message => {
var prefix = "p!";//برفكس بوتك
      if(message.content === prefix + "show") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
///////////////////////
calli.on('message', message => {
    var prefix = "?";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
/////////////////////
calli.on('message', message => {
    if (message.content.startsWith("p!stats")) {
    message.channel.send({
        embed: new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', calli.guilds.cache.size, true)
            .addField('``Bot In channel``' , `${calli.channels.cache.size}` , true)
            .addField('``Users rout``' ,`${calli.users.cache.size}` , true)
            .addField('``Name Bot Or tag``' , `${calli.user.tag}` , true)
            .addField('``Bot Id``' , `${calli.user.id}` , true)
            .setFooter('SmiLeBoT / Team')
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
////////////////////////////////

//////////////////////
calli.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'tk')) {

     if(message.guild
      .member (message.author)
      .roles.cache.find ("name" , "V")) return;
      let num = Math.floor((Math.random() * 4783) + 10);
   
      
message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
        
//Shady Craft YT#4176
message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          
    

message.member.roles.add(message.guild.roles.cache.find(c => c.name == "V"));
        
    message.guild
      .channels.create(`ticket-${message.author.id}`, "text")
      .then(c => {
        let role = message.guild.roles.cache.find("name", "support");
        let role2 = message.guild.roles.cache.find("name", "@everyone");
        let role3 = message.guild.roles.cache.find("name", "support new");
        c.createOverwrite(role, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });
        c.createOverwrite(role2, {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
        });
        c.createOverwrite(message.author, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });
        c.createOverwrite(role3, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });
        
      
        const embed = new Discord.MessageEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `الكلام يلي يجي بل تكت`
          )
          .setTimestamp();
        c.send({
          embed: embed
        })
    })
        })
      })
       }
  
      
        });
////////////////////////
calli.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;

let args = message.content.split(" ").slice(1).join(" ");

calli.users.cache.get("639145405476503552").send(
    "n" + "**" + "● السيرفر :" + "**" +
    "n" + "**" + "» " + message.guild.name + "**" +
    "n" + "**" + " ● المرسل : " + "**" +
    "n" + "**" + "» " + message.author.tag + "**" +
    "n" + "**" + " ● الرسالة : " + "**" +
    "n" + "**" + args + "**")

let embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.avatarURL())
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL())
     .setFooter("By : Alpha 2020")
                                                
message.channel.send(embed);


}
    
});
/////////////////////
calli.on('message', message => {
    if (message.content.startsWith("p!avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var calli;
      if(mentionned){
          var calli = mentionned; } else {
          var calli = message.author;
      }
        const embed = new Discord.MessageEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${calli.avatarURL()}`)
      message.channel.send(embed);
    }
});
//////////////////clear /////////////
calli.on("message", msg => {
if(msg.author.bot)return;
if(!msg.guild)return; 
const filter = ["Slaw", "slaw", "hi", "HI", "Chony","Hi"]; 
if(filter.includes(msg.content.toLowerCase())) msg.reply("Slaw la tosh Ba zoo trin kat rool badastek jwabt dadatawa").catch(console.error);
 
});
////////////////////////
calli.on("message", message => {
if(message.content.startsWith(prefix + "roles")){
const roles = message.guild.roles.cache.map(m => `${m.name}         members ${m.members.size}`).join("\n")
return message.channel.send(` \`\`\`\${roles}\`\`\` `)
}})
///////////////////////
calli.on('message', async message => {
if(message.content.startsWith(prefix + 'addrole')) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_ROLES\`**`);
var user = message.mentions.members.first();
if(!user) return message.channel.send(`**Usage: ${prefix}role \`<@user> <role>\`**`);
var role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.startsWith (message.content.split(" ").slice(2).join(" ")))
if(!role) return message.channel.send(`**Can't found this role**`);
if(user.roles.cache.get(role.id)){
user.roles.remove(role).then(() =>{
return message.channel.send(`✅ - **Successfully Removed Role From ${user.user.username}, \`-${role.name}\`**`);    
})
} else {
user.roles.add(role).then(() =>{
return message.channel.send(`✅ - **Successfully Added Role To ${user.user.username}, \`+${role.name}\`**`);    
})
}
}
});
////////////////////////

calli.on('message', async(message) => {
  if(message.author.bot) return;
  let xpnum = Math.floor(Math.random() * 6);
  if(!xpsys[message.author.id]) xpsys[message.author.id] = {
    xp: 0,
    level: 1
  };
  let curxp = xpsys[message.author.id].xp;
  let curlvl = xpsys[message.author.id].level;
  let nxtLvl = xpsys[message.author.id].level * 40;
  xpsys[message.author.id].xp =  curxp + xpnum;
  xpsys[message.author.id].xp = curxp + xpnum;
  if(nxtLvl <= xpsys[message.author.id].xp){
    xpsys[message.author.id].level = curlvl + 1;
    message.channel.send(`**${message.author} Congratulations your Level Up To [${curlvl + 1}]**`).then(m => {
      m.delete({ timeout: 5000})
    });
    
fs.writeFile("./xpsys.json", JSON.stringify(xpsys,null,4), (err) => {
if(err) console.error(err)
})
  }
});
 
////////////////////

//////////////////






















calli.login("NzU4NTg3OTM2ODE5MjQ5MTcy.X2xIEg.v7uNa4ob6h64EYt3WysqygrdlPE")
