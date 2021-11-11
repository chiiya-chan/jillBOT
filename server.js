const express = require("express")
const app = express()
let { spongeCase } = require("sponge-case");
const ms = require("ms");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

app.get("/", (req, res) => {
  res.send("ello")
})

app.listen(3000, () => {
  console.log("Bot launched")
})

let Discord = require("discord.js");

let { Client, intents } = require('discord.js');
let client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES"] });
const collect = require('collect.js');
var zalgo = require('to-zalgo');
var banish = require('to-zalgo/banish');
const { MessageActionRow, MessageSelectMenu, MessageEmbed} = require("discord.js");
const wait = require('util').promisify(setTimeout);



//-----------------------------------------//
client.on("ready", () => {
  client.user.setPresence({ activities: [{ name: 'jill!help' }] })

})


const ReactionRoleManager = require("djs-reaction-role");const manager = new ReactionRoleManager(client, { storage: "./role.json"});client.reactionRoleManager = manager;


client.on('messageCreate', async (message) => {


  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith("jill!poll")) {
    let temp = "jill!poll";
    let sentence = message.content.slice(temp.length + 1);
    if (!sentence) return message.reply("Correct Usage: `jill!poll test`")
    message.delete(2000);
    const pollTopic = await message.channel.send(`**People, ${message.author.username}#${message.author.discriminator}** has a question: **${sentence}**`);
    pollTopic.react("✅");
    pollTopic.react("❎");
    console.log(message.guild);
  };
})


client.on("messageCreate", message => {





  if (message.content.toLowerCase().startsWith("jill!mock")) {
    let temp = "jill!mock", content = message.content.slice(temp.length + 1);
    if (message.guild.me.permissions.has("MANAGE_MESSAGES")) message.delete();
     let embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .setDescription(`mocked: \n**${content}**`)
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("PURPLE")
 client.channels.cache.get('907681260091109407').send({embeds: [embed]})
 
    if (!content) return message.channel.send("Input your sentence first, dummy.")
   
   
    var content1 = spongeCase(content);
    message.channel.send(content1);
   
  }

  if (message.content.toLowerCase().startsWith("jill!zalgo")) {
    let temp = "jill!zalgo", content = message.content.slice(temp.length + 1);
    if (message.guild.me.permissions.has("MANAGE_MESSAGES")) message.delete();
     let embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .setDescription(`zalgo'd: \n**${content}**`)
  .setThumbnail(message.author.displayAvatarURL())
   .setColor("PURPLE")
 client.channels.cache.get('907681260091109407').send({embeds: [embed]})
 var content1 = zalgo(content);
    message.channel.send(content1);
  }

  if (message.content.toLowerCase().startsWith("jill!letter")) {
    let temp = "jill!letter", content = message.content.slice(temp.length + 1);
     let embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .setDescription(`used letter: \n**${content}**`)
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("PURPLE")
 client.channels.cache.get('907681260091109407').send({embeds: [embed]})
    if (!content) return message.channel.send("Input your sentence first, dummy.")
    content = content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u0111]/g, "\u0064").replace(/[\u0110]/g, "\u0064")
      .replace(/0/g, '0️⃣')
      .replace(/1/g, '1️⃣')
      .replace(/2/g, '2️⃣')
      .replace(/3/g, '3️⃣')
      .replace(/4/g, '4️⃣')
      .replace(/5/g, '5️⃣')
      .replace(/6/g, '6️⃣')
      .replace(/7/g, '7️⃣')
      .replace(/8/g, '8️⃣')
      .replace(/9/g, '9️⃣')
      .replace(/[\u0021]/g, '❗').replace(/[\u003F]/g, '❓')

    let newMsg = "";
    content = content.toLowerCase();


    for (let i = 0; i < content.length; i++) {
      if (content.charCodeAt(i) >= 97 && content.charCodeAt(i) <= 122) {
        regTemp = String.fromCodePoint(content.charCodeAt(i) + 127365);
        newMsg += regTemp;
        newMsg += " ";
      } else {
        newMsg += content[i];

      }
    }
    message.channel.send(newMsg);
  }




  if (message.content.toLowerCase().startsWith("jill!emojify")) {
    let temp = "jill!emojify";
    let content = message.content.slice(temp.length + 1);
    if (message.guild.me.permissions.has("MANAGE_MESSAGES")) message.delete();
     let embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .setDescription(`emojified: \n**${content}**`)
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("PURPLE")
 client.channels.cache.get('907681260091109407').send({embeds: [embed]})
  
    var emoji = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '🤓', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡', '😠', '😇', '🤠', '🤡', '🤥', '😷', '🤒', '🤕', '🤢', '🤧', '😈', '👿', '👹', '👺', '💀', '☠', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿', '👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿', '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿', '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '👼', '👼🏻', '👼🏼', '👼🏽', '👼🏾', '👼🏿', '👮', '👮🏻', '👮🏼', '👮🏽', '👮🏾', '👮🏿', '🕵', '🕵🏻', '🕵🏼', '🕵🏽', '🕵🏾', '🕵🏿', '💂', '💂🏻', '💂🏼', '💂🏽', '💂🏾', '💂🏿', '👷', '👷🏻', '👷🏼', '👷🏽', '👷🏾', '👷🏿', '👳', '👳🏻', '👳🏼', '👳🏽', '👳🏾', '👳🏿', '👱', '👱🏻', '👱🏼', '👱🏽', '👱🏾', '👱🏿', '🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿', '🤶', '🤶🏻', '🤶🏼', '🤶🏽', '🤶🏾', '🤶🏿', '👸', '👸🏻', '👸🏼', '👸🏽', '👸🏾', '👸🏿', '🤴', '🤴🏻', '🤴🏼', '🤴🏽', '🤴🏾', '🤴🏿', '👰', '👰🏻', '👰🏼', '👰🏽', '👰🏾', '👰🏿', '🤵', '🤵🏻', '🤵🏼', '🤵🏽', '🤵🏾', '🤵🏿', '🤰', '🤰🏻', '🤰🏼', '🤰🏽', '🤰🏾', '🤰🏿', '👲', '👲🏻', '👲🏼', '👲🏽', '👲🏾', '👲🏿', '🙍', '🙍🏻', '🙍🏼', '🙍🏽', '🙍🏾', '🙍🏿', '🙎', '🙎🏻', '🙎🏼', '🙎🏽', '🙎🏾', '🙎🏿', '🙅', '🙅🏻', '🙅🏼', '🙅🏽', '🙅🏾', '🙅🏿', '🙆', '🙆🏻', '🙆🏼', '🙆🏽', '🙆🏾', '🙆🏿', '💁', '💁🏻', '💁🏼', '💁🏽', '💁🏾', '💁🏿', '🙋', '🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿', '🙇', '🙇🏻', '🙇🏼', '🙇🏽', '🙇🏾', '🙇🏿', '🤦', '🤦🏻', '🤦🏼', '🤦🏽', '🤦🏾', '🤦🏿', '🤷', '🤷🏻', '🤷🏼', '🤷🏽', '🤷🏾', '🤷🏿', '💆', '💆🏻', '💆🏼', '💆🏽', '💆🏾', '💆🏿', '💇', '💇🏻', '💇🏼', '💇🏽', '💇🏾', '💇🏿', '🚶', '🚶🏻', '🚶🏼', '🚶🏽', '🚶🏾', '🚶🏿', '🏃', '🏃🏻', '🏃🏼', '🏃🏽', '🏃🏾', '🏃🏿', '💃', '💃🏻', '💃🏼', '💃🏽', '💃🏾', '💃🏿', '🕺', '🕺🏻', '🕺🏼', '🕺🏽', '🕺🏾', '🕺🏿', '👯', '🕴', '🗣', '👤', '👥', '🤺', '🏇', '⛷', '🏂', '🏌', '🏄', '🏄🏻', '🏄🏼', '🏄🏽', '🏄🏾', '🏄🏿', '🚣', '🚣🏻', '🚣🏼', '🚣🏽', '🚣🏾', '🚣🏿', '🏊', '🏊🏻', '🏊🏼', '🏊🏽', '🏊🏾', '🏊🏿', '⛹', '⛹🏻', '⛹🏼', '⛹🏽', '⛹🏾', '⛹🏿', '🏋', '🏋🏻', '🏋🏼', '🏋🏽', '🏋🏾', '🏋🏿', '🚴', '🚴🏻', '🚴🏼', '🚴🏽', '🚴🏾', '🚴🏿', '🚵', '🚵🏻', '🚵🏼', '🚵🏽', '🚵🏾', '🚵🏿', '🏎', '🏍', '🤸', '🤸🏻', '🤸🏼', '🤸🏽', '🤸🏾', '🤸🏿', '🤼', '🤼🏻', '🤼🏼', '🤼🏽', '🤼🏾', '🤼🏿', '🤽', '🤽🏻', '🤽🏼', '🤽🏽', '🤽🏾', '🤽🏿', '🤾', '🤾🏻', '🤾🏼', '🤾🏽', '🤾🏾', '🤾🏿', '🤹', '🤹🏻', '🤹🏼', '🤹🏽', '🤹🏾', '🤹🏿', '👫', '👬', '👭', '💏', '👩‍❤️‍💋‍👨', '👨‍❤️‍💋‍👨', '👩‍❤️‍💋‍👩', '💑', '👩‍❤️‍👨', '👨‍❤️‍👨', '👩‍❤️‍👩', '👪', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '🏻', '🏼', '🏽', '🏾', '🏿', '💪', '💪🏻', '💪🏼', '💪🏽', '💪🏾', '💪🏿', '🤳', '🤳🏻', '🤳🏼', '🤳🏽', '🤳🏾', '🤳🏿', '👈', '👈🏻', '👈🏼', '👈🏽', '👈🏾', '👈🏿', '👉', '👉🏻', '👉🏼', '👉🏽', '👉🏾', '👉🏿', '☝', '☝🏻', '☝🏼', '☝🏽', '☝🏾', '☝🏿', '👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿', '🖕', '🖕🏻', '🖕🏼', '🖕🏽', '🖕🏾', '🖕🏿', '👇', '👇🏻', '👇🏼', '👇🏽', '👇🏾', '👇🏿', '✌', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿', '🤞', '🤞🏻', '🤞🏼', '🤞🏽', '🤞🏾', '🤞🏿', '🖖', '🖖🏻', '🖖🏼', '🖖🏽', '🖖🏾', '🖖🏿', '🤘', '🤘🏻', '🤘🏼', '🤘🏽', '🤘🏾', '🤘🏿', '🤙', '🤙🏻', '🤙🏼', '🤙🏽', '🤙🏾', '🤙🏿', '🖐', '🖐🏻', '🖐🏼', '🖐🏽', '🖐🏾', '🖐🏿', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿', '👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿', '👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿', '👎', '👎🏻', '👎🏼', '👎🏽', '👎🏾', '👎🏿', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿', '👊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿', '🤛', '🤛🏻', '🤛🏼', '🤛🏽', '🤛🏾', '🤛🏿', '🤜', '🤜🏻', '🤜🏼', '🤜🏽', '🤜🏾', '🤜🏿', '🤚', '🤚🏻', '🤚🏼', '🤚🏽', '🤚🏾', '🤚🏿', '👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿', '👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿', '✍', '✍🏻', '✍🏼', '✍🏽', '✍🏾', '✍🏿', '👐', '👐🏻', '👐🏼', '👐🏽', '👐🏾', '👐🏿', '🙌', '🙌🏻', '🙌🏼', '🙌🏽', '🙌🏾', '🙌🏿', '🙏', '🙏🏻', '🙏🏼', '🙏🏽', '🙏🏾', '🙏🏿', '🤝', '🤝🏻', '🤝🏼', '🤝🏽', '🤝🏾', '🤝🏿', '💅', '💅🏻', '💅🏼', '💅🏽', '💅🏾', '💅🏿', '👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿', '👃', '👃🏻', '👃🏼', '👃🏽', '👃🏾', '👃🏿', '👣', '👀', '👁', '👁‍🗨', '👅', '👄', '💋', '💘', '❤', '💓', '💔', '💕', '💖', '💗', '💙', '💚', '💛', '💜', '🖤', '💝', '💞', '💟', '❣', '💌', '💤', '💢', '💣', '💥', '💦', '💨', '💫', '💬', '🗨', '🗯', '💭', '🕳', '👓', '🕶', '👔', '👕', '👖', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🛍', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '⛑', '📿', '💄', '💍', '💎', '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦌', '🦄', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🐘', '🦏', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🦇', '🐻', '🐨', '🐼', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🦅', '🦆', '🦉', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦐', '🦑', '🦋', '🐌', '🐛', '🐜', '🐝', '🐞', '🕷', '🕸', '🦂', '💐', '🌸', '💮', '🏵', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷', '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘', '🍀', '🍁', '🍂', '🍃', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶', '🥒', '🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🥞', '🧀', '🍖', '🍗', '🥓', '🍔', '🍟', '🍕', '🌭', '🌮', '🌯', '🥙', '🥚', '🍳', '🥘', '🍲', '🥗', '🍿', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🍡', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍯', '🍼', '🥛', '☕', '🍵', '🍶', '🍾', '🍷', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃', '🍽', '🍴', '🥄', '🔪', '🏺', '🌍', '🌎', '🌏', '🌐', '🗺', '🗾', '🏔', '⛰', '🌋', '🗻', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏗', '🏘', '🏙', '🏚', '🏠', '🏡', '🏢', '🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒', '🗼', '🗽', '⛪', '🕌', '🕍', '⛩', '🕋', '⛲', '⛺', '🌁', '🌃', '🌄', '🌅', '🌆', '🌇', '🌉', '♨', '🌌', '🎠', '🎡', '🎢', '💈', '🎪', '🎭', '🖼', '🎨', '🎰', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚲', '🛴', '🛵', '🚏', '🛣', '🛤', '⛽', '🚨', '🚥', '🚦', '🚧', '🛑', '⚓', '⛵', '🛶', '🚤', '🛳', '⛴', '🛥', '🚢', '✈', '🛩', '🛫', '🛬', '💺', '🚁', '🚟', '🚠', '🚡', '🚀', '🛰', '🛎', '🚪', '🛌', '🛏', '🛋', '🚽', '🚿', '🛀', '🛀🏻', '🛀🏼', '🛀🏽', '🛀🏾', '🛀🏿', '🛁', '⌛', '⏳', '⌚', '⏰', '⏱', '⏲', '🕰', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕡', '🕖', '🕢', '🕗', '🕣', '🕘', '🕤', '🕙', '🕥', '🕚', '🕦', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌡', '☀', '🌝', '🌞', '⭐', '🌟', '🌠', '☁', '⛅', '⛈', '🌤', '🌥', '🌦', '🌧', '🌨', '🌩', '🌪', '🌫', '🌬', '🌀', '🌈', '🌂', '☂', '☔', '⛱', '⚡', '❄', '☃', '⛄', '☄', '🔥', '💧', '🌊', '🎃', '🎄', '🎆', '🎇', '✨', '🎈', '🎉', '🎊', '🎋', '🎍', '🎎', '🎏', '🎐', '🎑', '🎀', '🎁', '🎗', '🎟', '🎫', '🎖', '🏆', '🏅', '🥇', '🥈', '🥉', '⚽', '⚾', '🏀', '🏐', '🏈', '🏉', '🎾', '🎱', '🎳', '🏏', '🏑', '🏒', '🏓', '🏸', '🥊', '🥋', '🥅', '🎯', '⛳', '⛸', '🎣', '🎽', '🎿', '🎮', '🕹', '🎲', '♠', '♥', '♦', '♣', '🃏', '🀄', '🎴', '🔇', '🔈', '🔉', '🔊', '📢', '📣', '📯', '🔔', '🔕', '🎼', '🎵', '🎶', '🎙', '🎚', '🎛', '🎤', '🎧', '📻', '🎷', '🎸', '🎹', '🎺', '🎻', '🥁', '📱', '📲', '☎', '📞', '📟', '📠', '🔋', '🔌', '💻', '🖥', '🖨', '⌨', '🖱', '🖲', '💽', '💾', '💿', '📀', '🎥', '🎞', '📽', '🎬', '📺', '📷', '📸', '📹', '📼', '🔍', '🔎', '🔬', '🔭', '📡', '🕯', '💡', '🔦', '🏮', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📓', '📒', '📃', '📜', '📄', '📰', '🗞', '📑', '🔖', '🏷', '💰', '💴', '💵', '💶', '💷', '💸', '💳', '💹', '💱', '💲', '✉', '📧', '📨', '📩', '📤', '📥', '📦', '📫', '📪', '📬', '📭', '📮', '🗳', '✏', '✒', '🖋', '🖊', '🖌', '🖍', '📝', '💼', '📁', '📂', '🗂', '📅', '📆', '🗒', '🗓', '📇', '📈', '📉', '📊', '📋', '📌', '📍', '📎', '🖇', '📏', '📐', '✂', '🗃', '🗄', '🗑', '🔒', '🔓', '🔏', '🔐', '🔑', '🗝', '🔨', '⛏', '⚒', '🛠', '🗡', '⚔', '🔫', '🏹', '🛡', '🔧', '🔩', '⚙', '🗜', '⚗', '⚖', '🔗', '⛓', '💉', '💊', '🚬', '⚰', '⚱', '🗿', '🛢', '🔮', '🛒', '🏧', '🚮', '🚰', '♿', '🚹', '🚺', '🚻', '🚼', '🚾', '🛂', '🛃', '🛄', '🛅', '⚠', '🚸', '⛔', '🚫', '🚳', '🚭', '🚯', '🚱', '🚷', '📵', '🔞', '☢', '☣', '⬆', '↗', '➡', '↘', '⬇', '↙', '⬅', '↖', '↕', '↔', '↩', '↪', '⤴', '⤵', '🔃', '🔄', '🔙', '🔚', '🔛', '🔜', '🔝', '🛐', '⚛', '🕉', '✡', '☸', '☯', '✝', '☦', '☪', '☮', '🕎', '🔯', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔀', '🔁', '🔂', '▶', '⏩', '⏭', '⏯', '◀', '⏪', '⏮', '🔼', '⏫', '🔽', '⏬', '⏸', '⏹', '⏺', '⏏', '🎦', '🔅', '🔆', '📶', '📳', '📴', '♻', '📛', '⚜', '🔰', '🔱', '⭕', '✅', '☑', '✔', '✖', '❌', '❎', '➕', '➖', '➗', '➰', '➿', '〽', '✳', '✴', '❇', '‼', '⁉', '❓', '❔', '❕', '❗', '〰', '©', '®', '™', '#️⃣', '*️⃣', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '💯', '🔠', '🔡', '🔢', '🔣', '🔤', '🅰', '🆎', '🅱', '🆑', '🆒', '🆓', 'ℹ', '🆔', 'Ⓜ', '🆕', '🆖', '🅾', '🆗', '🅿', '🆘', '🆙', '🆚', '🈁', '🈂', '🈷', '🈶', '🈯', '🉐', '🈹', '🈚', '🈲', '🉑', '🈸', '🈴', '🈳', '㊗', '㊙', '🈺', '🈵', '▪', '▫', '◻', '◼', '◽', '◾', '⬛', '⬜', '🔶', '🔷', '🔸', '🔹', '🔺', '🔻', '💠', '🔘', '🔲', '🔳', '⚪', '⚫', '🔴', '🔵', '🏁', '🚩', '🎌', '🏴', '🏳'];
    const random = () => Math.floor(Math.random() * emoji.length);

    let replace = content.replace(/ /g, () => ` ${emoji[random()]} `);


    message.channel.send(replace);



  }

  if (message.content === "jill!ping" || message.content === "Jill!ping") {
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
      .setTitle("🏓 Pong.")
      .setDescription(`**${Math.round(client.ws.ping)}ms**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL());

    message.reply({ embeds: [embed] });
  }

  if (message.content === "jill!invite" || message.content === "Jill!invite") {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Press here to invite me to your bar.")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=901876393867092060&permissions=3489983526&scope=bot%20applications.commands")
      .setColor("PURPLE")
      .setImage(`https://pbs.twimg.com/media/D9TgLKoX4AA8Tkt.jpg`)
      .setFooter("Image taken from the game VA-11 HALL-A")
    message.channel.send({ embeds: [embed] });
  }
  if (message.content.toLowerCase().startsWith("jill!manuals") || message.content.toLowerCase().startsWith("jill!um")) {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Press here to open the user manuals.")
      .setURL("https://docs.google.com/document/d/1nNegXMW47JVgT9e56kFad7aAumvrVLSbSJGs_jnHbLc/edit#heading=h.lrwejna2ivrp")


      .setColor("PURPLE")
      .setImage(`https://pbs.twimg.com/media/D9TgLKoX4AA8Tkt.jpg`)
      .setFooter("Image taken from the game VA-11 HALL-A")
    message.channel.send({ embeds: [embed] });
  }

  if (message.content.toLowerCase().startsWith("thanks jill") || message.content.toLowerCase().startsWith("Thanks jill")) {
    message.channel.send("No problem.")
  }
  if (message.content === "Smoke break" || message.content === "smoke break") {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setTitle("I know I shouldn't smoke but it eases my soul")
      .setDescription(`**Glitch City never seems to rest.**`)
      .setImage(`https://cdn.discordapp.com/attachments/901898070357315674/902221134253142096/dd0yihp-c8efde70-7bd2-4db0-883d-f92a00ff7944.png`)
      .setColor("PURPLE")
      .setFooter("Credits to u/SteveChopz on Reddit")
    message.author.displayAvatarURL()
    message.channel.send({ embeds: [embed] });
  }

  if (message.content === "Drink treat" || message.content === "drink treat") {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setTitle("The amount of beer I have is alarming.")
      .setDescription(`**It's raining outside...I wonder if Boss brought her umbrella.**`)
      .setImage(`https://cdn.donmai.us/original/9a/e7/9ae72eca2831442f7c62105babab1096.gif`)
      .setFooter("Credits to ピンクの炎🌸 on Steam Community")
      .setColor("PURPLE")
    message.author.displayAvatarURL()
    message.channel.send({ embeds: [embed] });
  }


  if (message.content.toLowerCase().startsWith("jill!horny") || message.content.toLowerCase().startsWith("Jill!horny")) {
    let text = "link";
    let here = text.link("https://docs.google.com/document/d/1grVXcwfi65wQvDjH-w6I-skyZv8H6eji1R72fM1Ctvg/edit?usp=sharing?usp=sharing");
    if (message.author.bot) return;
    let user = message.mentions.users.first() || message.author

    if (user == `541882021434359811`) return message.channel.send("...Pervert.")
    if (user == 901876393867092060) return message.channel.send("...Pervert.")


    let RN = Math.floor(Math.random() * 101)



    let clean = ["This person is as pure as an angel",
      "Absolutely innocent.",
      "Cleaner than my kitchen.",
      "Is there even someone who is this pure?",
      "Wish I was as innocent as this.",
      "They're still young and clean.",
    ]

    let random0 = clean[Math.floor(Math.random() * clean.length)];

    let nothorny = ["They're not horny, but if you send them lewds, they'll take those.",
      "An unawakened monster. Let's keep the horny sleeping.",
      "The horny demon can wake up at any time...",
      "Interested in lewds, not horny though.",
      "They're half horny, half clean. Schrodinger's horniness???",

    ]
    let random1 = nothorny[Math.floor(Math.random() * nothorny.length)];

    let horny = ["This person's up to something.",
      "The perverse is rising...",
      "The horny demon is trying to escape...",
      "They're only looking at lewds. Still horny.",
      "We need to prepare the bonk because they're about to become very naughty",
    ]
    let random2 = horny[Math.floor(Math.random() * horny.length)];

    let extrahorny = ["They're very horny, be careful.",
      "The horny monster has woken up. They're up for no good.",
      "O-oh my...they're very horny...",
      "They stored lewds and...indecent contents all over their computer.",
      "Wh-what's this...horniness is over 9000?",
    ]
    let random3 = extrahorny[Math.floor(Math.random() * extrahorny.length)];


    let imgextrahorny = ["https://cdn.discordapp.com/attachments/902470717709369374/903179382498164766/dor.gif",
      "https://cdn.discordapp.com/attachments/902470717709369374/903262025927508038/72zxBuve7d3553SUckaHPzoUlWrHPbOj5PDA0cqQgvrPYBhR-U6G4gwCaQkjwHfvFxm4WFsKE50NirjiMZNwOGOSg93am50YhouNlnSECH7iaCa6k1B1CbecqcZJ3PVGNjEzF4FDmxVSweSi69VXIw.png",
      "https://cdn.discordapp.com/attachments/902470717709369374/904641735014101002/139889-anime-anime-girls-digital-art-artwork-2D-portrait-display-vertical-va-11-hall-a-Dorothy-Haze.png",
      "https://64.media.tumblr.com/d56edb46b122eb6ade38f16eab7f0f93/2d4f9592989417f1-8a/s640x960/d3e0a89879bede48ffbe1d1341f6e941667d50c7.png", "https://media.discordapp.net/attachments/902470717709369374/902470746566180884/74981800_p4_master1200.png"


    ]

    let imghorny = ["https://w0.peakpx.com/wallpaper/689/793/HD-wallpaper-dorothy-haze-game-robot-va-11-hall-a.jpg",
      "https://i.pinimg.com/originals/83/9f/76/839f7686a1e0578d72f5deaef43eecb9.png",
      "https://i.pinimg.com/originals/76/e6/36/76e636ee38414fc604b6c79ea346f480.jpg",
      "https://cdn.discordapp.com/attachments/902470717709369374/905034525493579776/tumblr_oa0bmiawcZ1qheuono1_1280.png",
      "https://cdn.discordapp.com/attachments/902470717709369374/902887277133439006/unknown.png",

    ]
    let imgnothorny = ["https://i.redd.it/oi6kc8v4m1w11.png",
      "https://pbs.twimg.com/profile_images/1021776207308840960/uRrn-3n6.jpg",
      "https://64.media.tumblr.com/dbd10c0966f0d3c533a0d767cd9123b3/tumblr_pg3xndTqNB1xxib79o1_400.jpg",
      "https://cdn.donmai.us/original/b1/d0/__anna_graem_va_11_hall_a_drawn_by_reiesu_reis__b1d0cc16ad1989e84922a90a64a17cb4.png",
      "https://cdn.discordapp.com/attachments/902470717709369374/903278994386976788/44415158.png", "https://64.media.tumblr.com/36b7b1756fbd30243ed7354241fde432/tumblr_nf1glb2QzG1tw77coo6_r2_1280.gif",
      "https://sukeban.moe/wp-content/uploads/2017/08/DGr4x6CVwAA2h2W.jpg",
      "https://cdn.discordapp.com/attachments/902470717709369374/903153471870619648/Dorothy.png"
    ]
    let imgclean = ["https://pbs.twimg.com/tweet_video_thumb/C4rJeMcWIAE2Sop.jpg", "https://iopwiki.com/images/9/96/Sei_S.png",
      "http://static.zerochan.net/Kira.Miki.full.3249295.jpg",
      "https://cdn.discordapp.com/attachments/902470717709369374/903278294823215145/latest.png",

    ]
    let CleanEmbed = new Discord.MessageEmbed()
      .setColor("WHITE")
      .setTitle("Horny rate completed.")
      .setDescription(`**${user.username}'s horny rate is ${RN}%** 
  ${random0}`)
      .setThumbnail(user.displayAvatarURL())
      .setImage(imgclean[Math.floor(Math.random() * imgclean.length)])
      .setURL("https://docs.google.com/document/d/1grVXcwfi65wQvDjH-w6I-skyZv8H6eji1R72fM1Ctvg/edit?usp=sharing")
      .setFooter("For image credits, please click the title")


    let NotHornyEmbed = new Discord.MessageEmbed()
      .setColor("FFB6C1")
      .setTitle("Horny rate completed.")
      .setDescription(`**${user.username}'s horny rate is ${RN}%** 
  ${random1}`)
      .setThumbnail(user.displayAvatarURL())
      .setImage(imgnothorny[Math.floor(Math.random() * imgnothorny.length)])
      .setURL("https://docs.google.com/document/d/1grVXcwfi65wQvDjH-w6I-skyZv8H6eji1R72fM1Ctvg/edit?usp=sharing")
      .setFooter("For image credits, please click the title")

    let HornyEmbed = new Discord.MessageEmbed()
      .setTitle("Horny rate completed.")
      .setColor("FUSCHIA")
      .setDescription(`**${user.username}'s horny rate is ${RN}%** 
  ${random2}`)
      .setThumbnail(user.displayAvatarURL())
      .setImage(imghorny[Math.floor(Math.random() * imghorny.length)])
      .setURL("https://docs.google.com/document/d/1grVXcwfi65wQvDjH-w6I-skyZv8H6eji1R72fM1Ctvg/edit?usp=sharing")
      .setFooter("For image credits, please click the title")

    let ExtraHornyEmbed = new Discord.MessageEmbed()
      .setTitle("Horny rate completed.")
      .setColor("RED")
      .setDescription(`**${user.username}'s horny rate is ${RN}%** 
  ${random3}`)
      .setThumbnail(user.displayAvatarURL())
      .setImage(imgextrahorny[Math.floor(Math.random() * imgextrahorny.length)])
      .setURL("https://docs.google.com/document/d/1grVXcwfi65wQvDjH-w6I-skyZv8H6eji1R72fM1Ctvg/edit?usp=sharing")
      .setFooter("For image credits, please click the title")



    if (RN > 16 & RN < 50) {
      message.channel.send({ embeds: [NotHornyEmbed] })
    }
    if (RN < 16) {
      message.channel.send({ embeds: [CleanEmbed] })
    }
    if (RN > 51 & RN < 84) {
      message.channel.send({ embeds: [HornyEmbed] })
    }
    if (RN > 84) {
      message.channel.send({ embeds: [ExtraHornyEmbed] })
    }
  }





  if (message.content.toLowerCase().startsWith("jill!stare") || message.content.toLowerCase().startsWith("Jill!stare")) {
    if (message.author.bot) return;
    let victim = message.mentions.users.first()
    if (!victim) message.reply("who... are you staring at?")
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("Is this a staring contest?")
        .setDescription(`**Intense air...**`)
        .setImage(`https://cdn.discordapp.com/attachments/902470717709369374/902470930280890378/20210904_125207.png`)
        .setFooter("Credits to @moshimoshibe on Twitter")
        .setColor("PURPLE")
      message.channel.send(`${message.author.username} is staring at ${victim}.`)
      message.author.displayAvatarURL()
      message.channel.send({ embeds: [embed] });
    }
  }
  if (message.content === "Small talk" || message.content === "small talk") {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setTitle("It's chilly outside.")
      .setDescription(`**Having some drinks and small talks is the best.**`)
      .setImage(`https://cdn.discordapp.com/attachments/901898070357315674/902415329630773338/unknown.png`)
      .setTitle("Image from the game VA-11 HALL-A")
      .setColor("PURPLE")
    message.author.displayAvatarURL()
    message.channel.send({ embeds: [embed] });
  }

  if (message.content.toLowerCase().startsWith("jill!jukebox") || message.content.toLowerCase().startsWith("Jill!jukebox")) {
    message.channel.send(`https://open.spotify.com/playlist/0lOWPdxkfFnJxsBjK5Ye02?si=c396f9387b894166`)
  }
  if (message.content.toLowerCase().startsWith("jill!woman") || message.content.toLowerCase().startsWith("Jill!woman")) {
    message.channel.send("This is a bar, not a strip club")
  }
  if (message.content.toLowerCase().startsWith("sex") || message.content.toLowerCase().startsWith("Sex")) {
    message.channel.send("...Pervert.")
  }


  if (message.content.toLowerCase().startsWith("Bartender!")) {
    message.reply("Right. I'll go mix your drink in a sec.")
  }

  if (message.content.toLowerCase().includes("julianal")) {

    if (message.author.bot) return;
    let filter = m => m.author.id === message.author.id;



    message.channel.send("...");
    let role = message.guild.roles.cache.find(role => role.name === "mod crime");
    message.member.roles.add(role);
    setTimeout(function() {
      message.member.roles.remove(role);
      console.log("Role has been removed");
    }, 3000000);

  }



  if (message.content.toLowerCase().startsWith("julianne!")) {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setImage(`https://cdn.discordapp.com/attachments/902470717709369374/902535086250016798/image-removebg-preview.png`)
      .setTitle("**DO NOT.CALL.ME.BY.MY.REAL.NAME.**")
      .setFooter("Image credit to Requiell#1101 on Discord")
    //message.channel.send({ embeds: [embed]})

    let question = "Wait, Julianne is your real name?";

    let filter = m => m.author.id === message.author.id;
    message.channel.send({ embeds: [embed] }).then(() => {
      message.channel.awaitMessages({
        filter,
        max: 1,
        time: 20_000,
        errors: ['time'],
      })
        .then(message => {
          message = message.first();
          //let arr = ["JULIANNE!", "Julianne!", "julianne!"];//       
          if (message.content.toLowerCase().startsWith("julianne!")) {
            message.channel.send("You asked for it.");
            let role = message.guild.roles.cache.find(role => role.name === "crime");
            message.member.roles.add(role);
            setTimeout(function() {
              message.member.roles.remove(role);
              console.log("Role has been removed");
            }, 30000);

          } else if (message.content === question) {
            message.channel.send("Yes, and I'd advise you to not call me that again in public.");
          } else {
            message.channel.send("Don't ever do that again.");
          }
        })
        .catch(() => {
          message.channel.send("God, I don't want to hear that again.");
        });
    })
  }

  if (message.content.toLowerCase().startsWith("jill!menu")) {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("BAR's menu.")
      .setDescription("Choose your drink. It's on the house.")
      .addField("**BAR DRINKS**", "`french 75` `|`  `boulevardier` `|` `old fashioned` `|` `mojito` `|` `dark n stormy` `|` `sazerac` `|` `americano` `|` `brandy crusta` `|` `cosmopolitan` `|` `margarita` `|` `martini` `|` `grasshopper`")
      .addField("**VA-11 HALL-A DRINKS**", "`bad touch` `|` `bleeding jane` `|` `bloom light` `|` `blue fairy` `|` `brandtini` `|` `cobalt velvet` `|` `crevice spike` `|` `flaming moai` `|` `fluffy dream` `|` `fringe weaver` `|`  `grizzly temple` `|` `gut punch` `|` `marsblast` `|` `mercuryblast` `|` `moonblast` `|` `piano man` `|` `piano woman` `|` `pile driver` `|` `sparkle star` `|` `sugar rush` `|` `sunshine cloud` `|` `suplex` `|` `zen star`")
      .addField("**WINE**", "`viognier` `|` `tequila` `|` `vodka` `|` `whiskey` `|`  `sauvignon blanc` `|`  `hennessy` `|` `pinot grigio` `|` `champagne` `|` `red wine` `|` `chardonnay` `|` `di valtellina` `|` `sake` `|`  `bourbon` `|` `chivas regal` `|` `gin`")
      .addField("**OTHER DRINKS**", "`milk` `|` `beer` `|` `milkshake` `|` `orange juice` `|` `coke` `|` `strongbow` `|` `water` `|` `tea` `|` `chocomilk` `|` `coffee`")
      .addField("**SEASONAL DRINKS (AVAILABLE ONLY IN CERTAIN PERIODS)**", "Type \`jill!seasonal\` to see seasonal drinks.")

      .setFooter("Thanks for using my service. \n Credits to Icun Prayitno on ArtStation")
      .setColor("PURPLE")
      .setImage(`https://cdnb.artstation.com/p/assets/images/images/029/185/397/large/icun-prayitno-render-0-smol.jpg?1596723336`)
    message.channel.send({ embeds: [embed] });
  }

  if (message.content.toLowerCase().startsWith("jill!drink")) {
    message.channel.send("Type ``jill!your drink's name``. To see what is available on our menu, type ``Jill!menu``")
  }
  ///////////////////////////MODERATION COMMANDS

  if (message.content.toLowerCase().startsWith("jill!ban")) {

    if (message.author.bot) return;

    if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You don't have the authority to do this.")
    if (!message.guild.me.permissions.has("BAN_MEMBERS"))
      return message.channel.send("Can't ban people who are at a higher position than I am.")
    const user = message.mentions.users.first();
    if (user == message.author) return message.channel.send("...Do you need me to guide you to a psychiatrist?")
    if (user == `901876393867092060`) return message.channel.send("...but why?")
  }

  if (message.content.toLowerCase().startsWith("jill!ban")) {

    if (message.author.bot) return;
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You don't have the authority to do this.")
    if (!message.guild.me.permissions.has("BAN_MEMBERS"))
      return message.channel.send("Can't ban people who are at a higher position than I am.")
    const member = message.mentions.members.first();

    if (!member) return message.channel.send("Who exactly do you want to ban?")
    member.ban({ reason: 'Deserved.', })
      .then(() => {
        let embed = new Discord.MessageEmbed()
          .setDescription(`**${member} was banned by ${message.author.username}** because they deserved it.`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          .setTimestamp()
          .setThumbnail(message.author.displayAvatarURL())
        message.channel.send({ embeds: [embed] })
      })
      .catch(() => {
        message.channel.send("You don't have the authority to do this.")
      })
  }

  if (message.content.toLowerCase().startsWith("jill!kick") || message.content.toLowerCase().startsWith("Jill!kick")) {
    if (message.author.bot) return;
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("...you're not that powerful you know.")
    if (!message.guild.me.permissions.has("KICK_MEMBERS"))
      return message.channel.send("Can't do that, sorry. I don't have such power.")
    const user = message.mentions.users.first();
    if (user == message.author) return message.channel.send("..Do you need therapies?")
    if (user == `901876393867092060`) return message.channel.send("...but why?")
  }

  if (message.content.toLowerCase().startsWith("jill!kick") || message.content.toLowerCase().startsWith("Jill!kick")) {
    if (message.author.bot) return;
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("...you're not that powerful, you know.")
    if (!message.guild.me.permissions.has("KICK_MEMBERS"))
      return message.channel.send("Can't do that, sorry. I don't have such power.")
    const member = message.mentions.members.first();

    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) reason = "dunno."
    if (!member) return message.channel.send("Who exactly do you want to kick?")
    member.kick()
      .then(() => {
        let embed1 = new Discord.MessageEmbed()
          .setDescription(`**'Sup' ${member}, you were kicked out of the bar by ${message.author.username} 
because ${reason}**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          .setTimestamp()
        member.send({ embeds: [embed1] })

        let embed = new Discord.MessageEmbed()
          .setDescription(`**${member} was kicked out of the bar by ${message.author.username}
        because ${reason}**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          .setTimestamp()
          .setThumbnail(message.author.displayAvatarURL())
        message.channel.send({ embeds: [embed] })
      })
      .catch(() => {
        message.channel.send("You're not powerful enough to do this.")
      })
  }

  if (message.content.toLowerCase().startsWith("jill!mute")) {
    if (message.author.bot) return;
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("...you can't, sorry.")
  }

  if (message.content.toLowerCase().startsWith("jill!mute")) {
    if (!message.guild.me.permissions.has("MANAGE_ROLES"))
      return message.channel.send("I don't have such authorities.")
    const user = message.mentions.users.first();
    if (user == message.author) return message.channel.send("Are you sure you're not insane?")
    if (user == `901876393867092060`) return message.channel.send("...but why?")
  }
  if (message.content.toLowerCase().startsWith("jill!mute")) {
    let temp = "jill!mute";
    if (message.author.bot) return;
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("You don't have the permissions to do that.")
    if (!message.guild.me.permissions.has("MANAGE_ROLES"))
      return message.channel.send("I don't have the permissions to do this")
    const member = message.mentions.members.first();
    let role = message.guild.roles.cache.find(role => role.name === "crime");
    let reason = message.content.slice(temp.length + 1);
    if (!member) return message.channel.send("Who do you want to mute?")
    if (!reason) reason = "dunno, to be honest."
    if (!role) return message.channel.send("Please create a mute role `(jill!createmute)`")
    if (member.roles.cache.has(role.id)) return message.channel.send("They're already muted, leave them be")
    member.roles.add(role)
      .then(() => {
        let embed1 = new Discord.MessageEmbed()
          .setDescription(`**'Sup ${member}, you were muted by ${message.author.username} 
because ${reason}**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          .setTimestamp()
        member.send({ embeds: [embed1] })

        let embed = new Discord.MessageEmbed()
          .setDescription(`**${member} was muted by ${message.author.username} 
       because ${reason}**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          .setTimestamp()
        message.channel.send({ embeds: [embed] })
      })
      .catch(() => {
        message.channel.send("Something seems to have gone wrong.")
      })
  }
  //exports.run = async (bot, message, args) => {


  //}
  if (message.content.toLowerCase().startsWith("jill!createmodmute")) {
    let role = message.guild.roles.cache.find(role => role.name === "mod crime");
    let rolePos = message.guild.roles.cache.find(role => role.name === "Jill Stingray").position;

    if (!role) {
      message.guild.roles.create({
        data: {
          name: "mod crime",
          color: 'WHITE',
          permissions: ['VIEW_CHANNEL'],
          position: rolePos
        }
      });

      message.channel.send("Mute role created. Please set permissions for the role. WARNING: DO NOT CHANGE THE ROLE NAME OR THE COMMAND WILL NOT WORK.");
    } else {
      message.channel.send("Mute role \"crime\" already exists. Please remove the role or set your permissions for that role.");
    }
  }

  if (message.content.toLowerCase().startsWith("jill!hardmute")) {
    if (message.author.bot) return;
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("...you can't, sorry.")
    if (!message.guild.me.permissions.has("MANAGE_ROLES"))
      return message.channel.send("I don't have such authorities.")
    const member = message.mentions.members.first();

    let role = message.guild.roles.cache.find(role => role.name === "mod crime");
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!member) return message.channel.send("Which one do you want to mute?")
    if (!reason) reason = "...dunno, to be honest."
    if (!role) return message.channel.send("Please create a mute role in order to use this function.")
    if (member.roles.cache.has(role.id)) return message.channel.send("Guy's already muted, leave him alone.")
    member.roles.add(role)
      .then(() => {
        let embed1 = new Discord.MessageEmbed()
          .setDescription(`**'Sup' ${member}, you were muted by ${message.author.username} 
because ${reason}**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          .setTimestamp()
        member.send({ embeds: [embed1] })

        let embed = new Discord.MessageEmbed()
          .setDescription(`**${member} was muted by ${message.author.username} 
        because: ${reason}**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setColor("PURPLE")
          .setTimestamp()
        message.channel.send({ embeds: [embed] })
      })
      .catch(() => {
        message.channel.send("Something must have gone wrong. Oops.")
      })
  }



  if (message.content.toLowerCase().startsWith("jill!getrolelevel")) {
    let temp = "jill!getrolelevel",
      userInput = message.content.toLowerCase().slice(temp.length + 1);
    let role = message.guild.roles.cache.find(role => role.name === userInput);

    if (!role) {
      message.channel.send("Specified role doesn't exist.");
    } else {
      message.channel.send(`Role ${role}'s position: ${role.position}`);
    }
  }

  if (message.content.toLowerCase().startsWith("jill!highest")) {
    let role = message.guild.roles.cache.find(role => role.name === "Jill");

    if (!role) {
      message.channel.send("Bot role not found.");
    } else {
      let highest = message.guild.roles.highest;
      role.setPosition(highest);
      message.channel.send("Jill's role position set to highest possible");
    }
  }

  //////////////////////
  if (message.content.toLowerCase().startsWith("jill!createmute")) {
    let role = message.guild.roles.cache.find(role => role.name === "crime");

    if (!role) {
      message.guild.roles.create({
        name: "crime",
        color: 'WHITE',
        permissions: ['VIEW_CHANNEL'],
        position: 12
      }
      );
      message.channel.permissionOverwrites.edit(message.guild.roles.cache.find(role => role.name === "crime"), {
        SEND_MESSAGES: false
      });
      message.channel.send("Mute role created. Please set permissions for the role. WARNING: DO NOT CHANGE THE ROLE NAME OR THE COMMAND WILL NOT WORK.");
    } else {
      message.channel.send("Mute role \"crime\" already exists. Please remove the role or set your permissions for that role.");
    }
  }

  if (message.content.toLowerCase().startsWith("jill!createrole")) {
    let temp = "jill!createrole";

    let userInput = message.content.slice(temp.length + 1);
    let role = message.guild.roles.cache.find(role => role.name === userInput);
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send("...you can't, sorry.");
    else {
      if (!role) {
        message.guild.roles.create({

          name: userInput,
          color: 'RANDOM',
          mentionable: 'true',

          reason: 'Create role cuz.'
        }

        )
        message.channel.send("Role created. Please set permissions for the role.")
      } else {
        message.channel.send("Role name \"" + userInput + "\" already exists. Please remove the role or set your permissions for that role.");
      }
    }
  }

  if (message.content.toLowerCase().startsWith("jill!deleterole")) {
    let temp = "jill!deleterole",
      userInput = message.content.toLowerCase().slice(temp.length + 1);
    let role = message.guild.roles.cache.find(role => role.name === userInput);
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send("...you can't, sorry.");
    if (!role) return message.channel.send("This role might not exist or have been deleted. Please type the name of an existing role you want to delete");
    else {
      message.guild.roles.cache.find(role => role.name === userInput).delete();
      message.channel.send("Role deleted.");
    }
  }

  if (message.content.toLowerCase().startsWith("jill!delmute")) {
    let role = message.guild.roles.cache.find(role => role.name === "crime");
    if (!role) {
      message.channel.send("Mute role not found.");
    } else {
      role.delete();
      message.channel.send("Role deleted.");
    }

  }










  if (message.content.toLowerCase().startsWith("jill!supunmute") || message.content.toLowerCase().startsWith("Jill!supunmute")) {
    if (message.author.bot) return;
    if (!message.guild.me.permissions.has("MANAGE_ROLES"))
      return message.channel.send("I..can't do that.")
    let role = message.guild.roles.cache.find(role => role.name === "crime")
    let member = message.mentions.members.first()
    if (!role) return message.channel.send("You still don't have a mute role. Try creating one.")
    if (!member) return message.channel.send("Who?")
    if (member.roles.cache.has(`862659850773200896`))
      member.roles.remove(role)
    message.channel.send("Unmuted. Remember though, this command is only available for supporters.")
      .catch(() => {
        message.channel.send("Something probably went wrong here. Oops, I guess.")
      })
  }

  if (message.content.toLowerCase().startsWith("jill!unmute") || message.content.toLowerCase().startsWith("Jill!unmute")) {
    if (message.author.bot) return;
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("You are still not that powerful.")
    if (!message.guild.me.permissions.has("MANAGE_ROLES"))
      return message.channel.send("Sigh..I'm not the boss here.")
    let role = message.guild.roles.cache.find(role => role.name === "crime")
    let member = message.mentions.members.first()
    if (!role) return message.channel.send("You still don't have a mute role. Try creating one.")
    if (!member) return message.channel.send("Who?")
    member.roles.remove(role)
      .then(() => {
        let embed1 = new Discord.MessageEmbed()
          .setDescription(`**'Sup' ${member}, you were forgiven. Let's head back to the bar.**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor("PURPLE")
        member.send({ embeds: [embed1] })
        let embed = new Discord.MessageEmbed()
          .setDescription(`**${member} was forgiven by ${message.author.username}**`)
          .setFooter(` ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor("PURPLE")
          .setThumbnail(message.author.displayAvatarURL())
        message.channel.send({ embeds: [embed] })
      })
      .catch(() => {
        message.channel.send("Something probably went wrong here. Oops, I guess.")
      })
  }

  //////////////////////////////////////

  ////////////////////////////SERVER STATS
  if (message.content === "jill!serverinfo" || message.content === "Jill!serverinfo" || message.content === "Jill!svinfo" || message.content === "jill!svinfo") {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setTitle("The Bar's Info")
      .setImage(message.guild.iconURL)
      .setDescription(`${message.guild}'s Information.`)
      .addField("Member Count", `This bar has ${message.guild.memberCount} member(s).`)
      .addField("Emoji Count", `This bar has ${message.guild.emojis.cache.size} emoji(s).`)
      .addField("Roles Count", `This bar has ${message.guild.roles.cache.size} role(s).`)
    message.channel.send({ embeds: [embed] })
  }
  if (message.content === "jill!membercount" || message.content === "Jill!membercount") {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setAuthor(`Member Count of ${message.guild}`, message.guild.iconURL({ dynamic: true }))
      .setTitle("Members")
      .setDescription(`Total: ${message.guild.members.cache.size}\n Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.channel.send({ embeds: [embed] })
  }

  if (message.content.toLowerCase().startsWith("jill!serveravt") || message.content.toLowerCase().startsWith("Jill!serveravt") || message.content.toLowerCase().startsWith("jill!serveravatar") || message.content.toLowerCase().startsWith("Jill!serveravatar") || message.content.toLowerCase().startsWith("jill!svavt") || message.content.toLowerCase().startsWith("Jill!svavt")) {
    if (message.author.bot) return;
    let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild}`)
      .setColor("PURPLE")
      .setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
    message.channel.send({ embeds: [embed] });
  }
  if (message.content.toLowerCase().startsWith("jill!servercount") || message.content.toLowerCase().startsWith("jill!svcount") || message.content.toLowerCase().startsWith("jill!servercount") || message.content.toLowerCase().startsWith("jill!svrcount")) {
    if (message.author.bot) return;
    const count = new Discord.MessageEmbed()
      .setTitle("Jill's bar count?")
      .setDescription(`Jill is as of now in **${client.guilds.cache.size}** bars.`)
      .setImage(`https://64.media.tumblr.com/967bf30d257f382e7f0faab46a280905/dc4d6f44c4ecd4ed-2d/s640x960/cc447b5f6be939d61023c4f890f0e013a488f6e1.jpg`)
      .setFooter("Credits to @SuonikoArt on Twitter")
      .setColor("PURPLE")
    message.channel.send({ embeds: [count] })
  }



  if (message.content === "jill!myinfo" || message.content === "Jill!myinfo") {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setTitle("About me, your bartender:")
      .setDescription("A simple bartender. What? Did you expect something else? And no, DO NOT ask about my real name.")
      .setImage(`https://media.discordapp.net/attachments/588261753100566530/901753201865416704/465845-456404-jill2.png`)
      .setFooter("Image taken from the game VA-11 HALL-A")
    message.channel.send({ embeds: [embed] })
  }
  ///////////////////////////////////

  ////////////////////////////FUN UTILITIES
  if (message.content.toLowerCase().startsWith("jill!ghostping")){
    message.channel.send("This function has been deprecated due to potential abusive behaviors. Please refer to the manuals for more details.")
  } 
  





  if (message.content.toLowerCase().startsWith("jill!kill") || message.content.toLowerCase().startsWith("Jill!kill")) {
    if (message.author.bot) return;
    let victim = message.mentions.users.first()
    if (victim == `541882021434359811`) return message.reply("sorry, this user is invulnerable.")
    if (!victim) message.reply("Mhm, I heard you. Who though?");
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("**JAMIE MERCENARY SERVICE HIRED.**")
        .addField("Elimination success", `${victim} eliminated. Jamie was successful.`)
        .setImage(`https://cdn.discordapp.com/attachments/902470717709369374/902510794082766868/PCXyPcoWmbP5_RTKChLjuBATyfVoLFLjkLeabZSTXgKltujOrxAIUEMgvh77EtvyMj6v8otXuTMMXRpaSx59JASg4A4PJVY9T2VdeuW4Y0JkCaOJ-9npsJI3d38lk-tJI68DR54JOonSn4bz2vbxLnukIPyVWB8QOYh-seKopqBJplRtAiPch-2GJVh07s_jGdTPQLC6S88t3LWCv-4OKlxEeATyKxsPIrtdAlB0LB3s81s1_RepVMf_gEEW2LTmv-gtpa_0ShYCtD6yZlCxNu4nLd1puWNeziqHYRDSxo8SaOYm84Q87FtcrvDI8AgrbrdEI2oix3IJ.png`)
        .setFooter("Credits to @ATkeynote on Twitter")
      message.channel.send({ embeds: [embed] })
    }
  }



  const https = require('https');
  const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';

  if (message.content.toLowerCase().startsWith('jill!meme') || message.content.toLowerCase().startsWith('Jill!meme')) {
    if (message.author.bot) return;
    https.get(url, result => {
      var body = '';
      result.on('data', chunk => {
        body += chunk;
      });

      result
        .on('end', () => {
          var response = JSON.parse(body);
          var index =
            response.data.children[Math.floor(Math.random() * 99) + 1].data;

          var link = 'https://reddit.com' + index.permalink;

          if (index.post_hint !== 'image') {


            var text = index.selftext;
            const textembed = new Discord.MessageEmbed()
              .setTitle(`${title}`)
              .setColor('RANDOM')
              .setURL(link);

            message.channel.send({ embeds: [textembed] });
          }

          var image = index.preview.images[0].source.url.replace('&amp;', '&');
          var title = index.title;
          var subRedditName = index.subreddit_name_prefixed;

          if (index.post_hint !== 'image') {
            const textembed = new Discord.MessageEmbed()
              .setTitle(`${title}`)
              .setColor('RANDOM')
              .setURL(link);

            message.channel.send({ embeds: [textembed] });
          }
          const imageembed = new Discord.MessageEmbed()
            .setTitle(`${title}`)
            .setImage(image)
            .setColor('RANDOM')
            .setURL(link);
          message.channel.send({ embeds: [imageembed] });
        })
        .on('error', function(e) {
          console.log('Got an error: ', e);
        });
    });
  }
  if (message.content.toLowerCase().startsWith("jill!hug") || message.content.toLowerCase().startsWith("Jill!hug")) {
    if (message.author.bot) return;
    let victim = message.mentions.users.first()
    if (!victim) message.reply("Someone needs a  hug. Who though?")
    else {
      {
        let embed = new Discord.MessageEmbed()
          .setDescription(`Hugging service on the way!`)
          .addField("Hug sent", `${victim} received a hug from ${message.author.username}. Cheer up!`)
          .setFooter(`Friendships. Beautiful.`)
          .setColor("PURPLE")
          .setTimestamp()
          .setImage(`https://i.pinimg.com/originals/d4/e4/66/d4e466651c568b977a9f08202795578f.jpg`)
          .setFooter("Please contact me if you know the image sources.")
        message.channel.send({ embeds: [embed] })
      }
    }
  }
  if (message.content.toLowerCase().startsWith("jill!pat") || message.content.toLowerCase().startsWith("Jill!pat")) {
    if (message.author.bot) return;
    let victim = message.mentions.users.first()
    if (!victim) message.reply("Someone needs a  headpat. Who though?")
    else {
      {
        let embed = new Discord.MessageEmbed()
          .setDescription(`Patting service on the way!`)
          .addField("Pat sent", `${victim} received a gentle headpat from ${message.author.username}. Cheer up!`)
          .setFooter(`Nothing cuter than a headpat. \n Credits to my friend Lea Orris#3109`)
          .setColor("PURPLE")
          .setTimestamp()
          .setImage(`https://media.discordapp.net/attachments/516566229238939666/902888894389964820/pat.png?width=701&height=701`)
        message.channel.send({ embeds: [embed] })
      }
    }
  }
  if (message.content.toLowerCase().startsWith("jill!kiss") || message.content.toLowerCase().startsWith("Jill!kiss")) {
    let victim = message.mentions.users.first()
    if (message.author.bot) return
    if (victim == message.author) return message.reply("Kissing yourself..? Narcissistic I see...");

    if (!victim) message.reply("Someone needs a  kiss. Who though?")
    else {
      {
        let embed = new Discord.MessageEmbed()
          .setDescription(`Kiss sent and landed on ${victim}'s lips!`)
          .addField("French kissing passionately...", `${victim} received a passionate kiss from ${message.author.username}. They're feeling ecstatic!`)
          .setFooter(`That's one hell of a sight. \n Credits to @TumugiV on Twitter`)
          .setColor("PURPLE")
          .setTimestamp()
          .setImage(`https://cdn.donmai.us/sample/e4/35/sample-e43514026c0dc9ebb342107340cb27c5.jpg`)
        message.channel.send({ embeds: [embed] })
      }
    }
  }
  /////////////////////////
  ///////DRINKS////
  if (message.content.toLowerCase().startsWith("jill!vodka") || message.content.toLowerCase().startsWith("Jill!vodka")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One vodka coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Vodka**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://media.discordapp.net/attachments/901898070357315674/902153207013339156/Kamikaze-drink-4.png?width=659&height=701`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content == ("jill!bourbon") || message.content == ("Jill!bourbon")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Bourbon coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Bourbon**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://d3d7qmccklvqbw.cloudfront.net/wp-content/uploads/2019/06/22125136/shot-of-bourbon-bull-bourbon-900x600.jpg`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!whiskey") || message.content.toLowerCase().startsWith("Jill!whiskey")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Whiskey coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Whiskey**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://www.thespruceeats.com/thmb/SfQPAaLMT8bweOKKmF0jSwm9Vdw=/2000x1125/smart/filters:no_upscale()/Whiskey-GettyImages-139555513-59a3738e68e1a20013413b60.jpg`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!say")){
    message.channel.send("Due to reported indecent and abusive behaviours, this function has been deprecated. Please refer to the user manuals for more details.")
  }

  if (message.content.toLowerCase().startsWith("jill!sauvignon blanc") || message.content.toLowerCase().startsWith("Jill!sauvignon blanc")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Sauvignon blanc coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Sauvignon Blanc**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902154208269201418/6036a4836e4cb898636598d8_bontera-viognier-at-Hopdoddy-Burger-Bar.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!viognier") || message.content.toLowerCase().startsWith("Jill!viognier")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Savalan viognier coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Savalan Viognier**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902155261484097546/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!sake") || message.content.toLowerCase().startsWith("Jill!sake")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Sake coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Preparing... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Serving...carefully...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Sake**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902169499506180106/Tips-on-How-to-Drink-Sake.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!hennessy") || message.content.toLowerCase().startsWith("Jill!hennessy")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Hennessy coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Hennessy**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902155792944345088/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!pinot grigio") || message.content.toLowerCase().startsWith("Jill!pinot grigio")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Pinot Grigio coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Pinot Grigio**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902156304519421962/51024108f89f94b646f6af1ea820e694.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!champagne") || message.content.toLowerCase().startsWith("Jill!champagne")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Champagne coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Champagne**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902156826345345034/champagne-bar-by-sofitel-11.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!red wine") || message.content.toLowerCase().startsWith("Jill!red wine")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Red Wine coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Red Wine**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902157230563016724/glass-red-wine-bar-counter_107420-65844.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!chivas regal") || message.content.toLowerCase().startsWith("Jill!chivas regal")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Chivas Regal coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Chivas Regal**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://i.pinimg.com/originals/a0/9c/2a/a09c2aa871bc717c38f35f638e35d8db.jpg`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!gin") || message.content.toLowerCase().startsWith("Jill!gin")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Gin coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Finding Gin... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Preparing and decorating...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Gin**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://www.hisco.com.au/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/a/r/arc_gin_shot_glass_3.jpg`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!chardonnay") || message.content.toLowerCase().startsWith("Jill!chardonnay")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Chardonnay coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Chardonnay**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902157861998690344/How-Many-Calories-Glass-Chardonnay.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!di valtellina") || message.content.toLowerCase().startsWith("Jill!di valtellina")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One di Valtellina coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Opening... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **di Valtellina**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902159165550653470/copenhagen-cooking-food-festival-stedsans-ostergro-rooftop-urban-farm-organic-social-eating-clean-simple-local-mette-helbaek-denmark-scandinavia-foodie-eat-eating-best-tips-guide-travel-2016-14.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content === ("jill!milk") || message.content === ("Jill!milk")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** You want milk? Sure...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Strange order for a bar... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Milk**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902161111103721513/84TuOo144kfjs9cjc70bVIBrFWMPHUP1HHdnXJCXnCsBfJKkGvhdzvA7UCxMrzYG3X9GJ6Gh_wvbEfVFhSDYmnykFKbKGrc0zMZkk1pfMpGEE9mC9TIY1j8qB4l36XRFiqRgZodC21VNjPC3gwHD4aq3J1T34egx.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!milkshake") || message.content.toLowerCase().startsWith("Jill!milkshake")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** You want milkshake? Sure...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Strange order for a bar... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Milkshake**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902163055427850320/Mobile-Milkshake-Bar.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!orange juice") || message.content.toLowerCase().startsWith("Jill!orange juice")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** You want orange juice? Sure...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Strange order for a bar... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Orange Juice**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902163349444374539/juice-bar-smoothie-9-pb.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!coke") || message.content.toLowerCase().startsWith("Jill!coke")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** You want a coke? Sure...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Strange order for a bar... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Coke**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902164672051048458/cola-soda-pouring-into-glass-of-ice-with-splashes-at-slow-motion-on-a-video-id516343676.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!strongbow") || message.content.toLowerCase().startsWith("Jill!strongbow")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Strongbow coming right up...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Some people just love this thing huh... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Pouring and serving...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Strongbow**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902164877626466344/image.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!water") || message.content.toLowerCase().startsWith("Jill!water")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Are you serious...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Some people just love to do this huh... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Found the bottle.`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** There. Enjoy your **Water**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://c4.wallpaperflare.com/wallpaper/122/648/1010/water-black-background-highball-wallpaper-preview.jpg`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!tea") || message.content.toLowerCase().startsWith("Jill!tea")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Tea...?").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Tea in a bar... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** I swear I want to sue these people.`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** Here. Enjoy your **Tea**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://media.istockphoto.com/photos/steaming-coffee-or-tea-cup-on-dark-background-with-reflection-picture-id955657556?k=20&m=955657556&s=170667a&w=0&h=_3v9af5PhyUFB63ZaeZgto2hddbYuay6PioK-ceDIZ4=`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!chocomilk") || message.content.toLowerCase().startsWith("Jill!chocomil")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Chocolate milk...?").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Sure... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** I swear I want to sue these people.`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** Here. Enjoy your **Chocomilk**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://3uzw94322hve1rpsapqye6h1-wpengine.netdna-ssl.com/wp-content/uploads/Choc_Milk-pour-web.jpg`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!beer") || message.content.toLowerCase().startsWith("Jill!beer")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Beer**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901903290000875550/1448031613421.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!coffee") || message.content.toLowerCase().startsWith("Jill!coffee")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Coffee...sure").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Where's the coffee machine... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Brewing...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Coffee**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/903917213147340831/A_small_cup_of_coffee.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  //SEASONAL DRINKS SESSION//
  if (message.content.toLowerCase().startsWith("jill!witch's heart") || message.content.toLowerCase().startsWith("Jill!witch's heart")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if (d == 31 && (t.getMonth() == 9)) {
      message.channel.send("**[0%]** One Witch's Heart for the halloween...").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** Seasonal drinks really sell these days... `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** Delivering...`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Witch's Heart**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://cdn.discordapp.com/attachments/902470717709369374/904295608062459914/Witch-Heart-Halloween-Cocktail-The-Flavor-Bender-6-700x1057.png`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is Halloween exclusive, sorry.");
    }
  }
  if (message.content.toLowerCase().startsWith("jill!cranberry apple cider") || message.content.toLowerCase().startsWith("Jill!cranberry apple cider")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if (d == 25 && (t.getMonth() == 10)) {
      message.channel.send("**[0%]** One Cranberry Apple Cider for the Thanksgiving.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** Seasonal drinks really sell these days... `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** Delivering...`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Cranberry Apple Cider. A warm and nice drink for the Thanksgiving night.**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://www.culinaryhill.com/wp-content/uploads/2020/12/Slow-Cooker-Cranberry-Apple-Cider-Culinary-Hill-LR-05.jpg`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is only available on Thanksgiving, sorry.");
    }
  }

  if (message.content.toLowerCase().startsWith("jill!maple bourbon smash") || message.content.toLowerCase().startsWith("Jill!maple bourbon smash")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if (t.getMonth() == 10) {
      message.channel.send("**[0%]** One Maple bourbon smash coming right up.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** The month's special huh. Nice pick. `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** Almost there...`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Maple Bourbon Smash**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://cdn.discordapp.com/attachments/902470717709369374/904808081102352394/unknown.png`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is Halloween exclusive, sorry.");
    }
  }
  if (message.content.toLowerCase().startsWith("jill!holiday cheer") || message.content.toLowerCase().startsWith("Jill!holiday cheer")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if (t.getMonth() == 11) {
      message.channel.send("**[0%]** One Holiday Cheer coming right up.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** December is the month for holidays, they say. `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** Ah, festive.`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Holiday Cheer**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://cdn.discordapp.com/attachments/902470717709369374/904840071600029716/holiday-cheer-720x720-primary-399f06798a154c68a39de1bfae2820e6.png`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is only served during December, sorry.");
    }
  }
  if (message.content.toLowerCase().startsWith("jill!eggnog") || message.content.toLowerCase().startsWith("Jill!eggnog")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if (t.getMonth() == 11) {
      message.channel.send("**[0%]** One Eggnog coming right up.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** Eggnog for the chilly nights. `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** This should be enough to warm them up.`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Eggnog**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://cdn.discordapp.com/attachments/902470717709369374/904841580622512209/opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.png`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is December exclusive, sorry.");
    }
  }
  if (message.content.toLowerCase().startsWith("jill!bourbon hot chocolate") || message.content.toLowerCase().startsWith("Jill!bourbon hot chocolate")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if (t.getMonth() == 1) {
      message.channel.send("**[0%]** One Bourbon Hot Chocolate coming right up.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** Bourbon Hot Chocolate for the month of chocolate. `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** This should be sweet enough.`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Bourbon Hot Chocolate**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://chilledmagazine.com/wp-content/uploads/2020/11/Bourbon-Hot-Chocolate-1.jpg`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is February exclusive, sorry.");
    }
  }
  if (message.content.toLowerCase().startsWith("jill!mulled wine") || message.content.toLowerCase().startsWith("Jill!mulled wine")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if ((t.getDate() == 24) && (t.getMonth() == 11) || (t.getDate() == 25) && (t.getMonth() == 11)) {
      message.channel.send("**[0%]** One Mulled Wine coming right up.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** The best drink for Christmas.`).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** Can't wait to get home and have this for myself.`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Mulled Wine**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://biancazapatka.com/wp-content/uploads/2020/12/gluehwein.jpg`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is Christmas eve and Christmas exclusive, sorry.");
    }
  }
  if (message.content.toLowerCase().startsWith("jill!happy new year") || message.content.toLowerCase().startsWith("Jill!happy new year")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if ((t.getDate() == 31) && (t.getMonth() == 11) || (t.getDate() == 1) && (t.getMonth() == 0)) {
      message.channel.send("**[0%]** One Happy New Year coming right up.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** Such a peculiar name for a drink. `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** New Year's huh. It's been a year already.`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Happy New Year**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://cdn.discordapp.com/attachments/902470717709369374/904855952421969950/HappyNewYear-128401826-56a172335f9b58b7d0bf5b89.png`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is New Year's Eve and New Year exclusive, sorry.");
    }
  }
  if (message.content.toLowerCase().startsWith("jill!hibiscus margarita") || message.content.toLowerCase().startsWith("jill!hibiscus")) {
    let t = new Date();
    let d = t.getDate();
    if (message.author.bot) return;
    if (t.getMonth() == 0) {
      message.channel.send("**[0%]** One Hibiscus Margarita coming right up.").then(m => {
        setTimeout(() => {
          m.edit(`**[33%]** Dry January, huh. `).then(m2 => {
            setTimeout(() => {
              m.edit(`**[66%]** This should be enough of syrup.`).then(m2 => {
                setTimeout(() => {
                  m2.edit(`**[100%]** All done. Enjoy your **Hibiscus Margarita**. `).then(m3 => {
                    setTimeout(() => {
                      m3.edit(`https://alittleandalot.com/wp-content/uploads/2018/05/600-Hibiscus-tea-margarita-1.jpg`)
                    }, 3000);
                  });
                }, 3000);
              });
            }, 3000);
          });
        }, 3000);
      });
    } else {
      message.channel.send("This drink is December exclusive, sorry.");
    }
  }





  ////////////////////////////
  ////////DRINKS2/////
  if (message.content.toLowerCase().startsWith("jill!martini") || message.content.toLowerCase().startsWith("Jill!martini")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Martini**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901912321746698251/thanh-pham-122.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };



  if (message.content.toLowerCase().startsWith("jill!margarita") || message.content.toLowerCase().startsWith("Jill!margarita")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Margarita.** `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901899159492259850/50mostpopularcocktail_internal_margarita.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!cosmopolitan") || message.content.toLowerCase().startsWith("Jill!cosmopolitan")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Cosmopolitan**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901898208014397480/50mostpopularcocktail_internal_cosmopolitan.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!tom collins") || message.content.toLowerCase().startsWith("Jill!tom collins")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Tom Collins**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901898445235830834/50mostpopularcocktail_internal_tomcollins.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!aviation") || message.content.toLowerCase().startsWith("Jill!aviation")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Aviation**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901898567906656276/50mostpopularcocktail_internal_aviation.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!brandy crusta") || message.content.toLowerCase().startsWith("Jill!brandy crusta")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Brandy Crusta**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901898727520862218/50mostpopularcocktail_internal_brandycrusta.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!americano") || message.content.toLowerCase().startsWith("Jill!americano")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Americano**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901898813319561277/50mostpopularcocktail_internal_americano.png`)

                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!sazerac") || message.content.toLowerCase().startsWith("Jill!sazerac")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Sazerac**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901898906823196702/50mostpopularcocktail_internal_sazerac.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!dark n stormy") || message.content.toLowerCase().startsWith("Jill!dark n stormy")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Dark n Stormy**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://media.discordapp.net/attachments/901898070357315674/901898990809915482/50mostpopularcocktail_internal_darknstormy.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!mojito") || message.content.toLowerCase().startsWith("Jill!mojito")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Mojito**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901899066278019132/50mostpopularcocktail_internal_mojito.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!old fashioned") || message.content.toLowerCase().startsWith("Jill!old fashioned")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Old fashioned**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901899250252804096/50mostpopularcocktail_internal_oldfashioned.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!french 75") || message.content.toLowerCase().startsWith("Jill!french 75")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **French 75**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://media.discordapp.net/attachments/901898070357315674/901899507271368764/french-75-1594302212.png?width=685&height=702`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!boulivardier") || message.content.toLowerCase().startsWith("Jill!boulivardier")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Mixing and decorating... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Boulivardier**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://media.discordapp.net/attachments/901898070357315674/901899639773614101/boulevardier-1594302158.png?width=684&height=701`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!cum chalice") || message.content.toLowerCase().startsWith("Jill!cumchalice")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** What the actual fuck...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]**I can't believe people drink this... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your perverse **Cum Chalice**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/901924125394739221/latest.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!tequila") || message.content.toLowerCase().startsWith("Jill!tequila")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Finding the tequila bottle...").then(m => {
      setTimeout(() => {
        m.edit(`**[40%]** ugh..who the hell put it there? `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[80%]** Coming right up...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** Enjoy your **Tequila**. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902087388363366440/ttl.jpg`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!bad touch") || message.content.toLowerCase().startsWith("Jill!bad touch")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** *pffft bwahahaha* a b-bad touch,...sure*pfffft*...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Bad touch...*pfffft* `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Ahem...your bad touch is coming right up.`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** Enjoy your **Bad Touch** *pffffft*. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902089858191859782/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!bleeding jane") || message.content.toLowerCase().startsWith("Jill!bleeding jane")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Picking ingredients...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Oh, I have to blend this... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Decorating and delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **bleeding jane**. Careful, it's spicy. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902122095239135253/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!bloom light") || message.content.toLowerCase().startsWith("Jill!bloom light")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Bloom Light huh..That's rare.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]**These seems aged enough... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Ice in, and then mix...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your *Bloom Light**. Don't worry if it's spicy. It tastes like sand after a while. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902123580979032105/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!blue fairy") || message.content.toLowerCase().startsWith("Jill!blue fairy")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Blue fairy huh...where's the Flanergide..").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** This seems well-aged. `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Mixing and delivering...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Blue Fairy**. Sweet, girly and soft just like you want it. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902125368301998140/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!brandtini") || message.content.toLowerCase().startsWith("Jill!brandtini")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Brandtini...you're in for a treat.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** This seems aged enough... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Mixing and decorating...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Brandtini**. Sweet and classy just like you want it. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902126050002239508/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!cobalt velvet") || message.content.toLowerCase().startsWith("Jill!cobalt velvet")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** That's a pretty good pick.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** I wonder if I have enough karmotrine left... `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Mixing...almost forgot the ice`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Cobalt Velvet**. It might burn a bit but not too much. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902127233370554368/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!crevice spike") || message.content.toLowerCase().startsWith("Jill!crevice spike")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** That's a pretty strong one.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** I wonder if I should put much Karmotrine in.. `).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Blending...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Crevice Spike**. Careful, it can knock you out cold. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902129086795759676/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };

  if (message.content.toLowerCase().startsWith("jill!flaming moai") || message.content.toLowerCase().startsWith("Jill!flaming moai")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** This is a tough one.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** I wonder if I should add the fire...`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Mixing and burning...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Flaming Moai**. Be careful with the flame, I don't want you dead. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902130813297115146/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!fluffy dream") || message.content.toLowerCase().startsWith("Jill!fluffy dream")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** A girly one, huh...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** How alcoholic do you want it to be?`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** This seems aged enough...mixing`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Fluffy Dream**. You might have a better sleep with it. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902132838860722176/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!fringe weaver") || message.content.toLowerCase().startsWith("Jill!fringe weaver")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Classy and strong, and bubbly at that.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Gil! A new bottle of karmotrine please.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Aged well enough...mixing`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Fringe Weaver**. It's like ethyl alcohol, but with a spoonful of sugar. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902134909051736064/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!grizzly temple") || message.content.toLowerCase().startsWith("Jill!grizzly temple")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** People drink this?").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Should I tell them?`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Blending...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Grizzly Temple**. It's kind of unbearable, but here you go. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902135712890097674/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!gut punch") || message.content.toLowerCase().startsWith("Jill!gut punch")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** I'll give them a gut punch. Wait, that sounds wrong...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** This seems well-aged.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Strong stuff.`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Gut Punch**. The name describes the drink so take that as you will. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902137180141518878/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3500);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!marsblast") || message.content.toLowerCase().startsWith("Jill!marsblast")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** They must like having a red face.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Pretty strong stuff if you ask me.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Blending...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Marsblast**. Spicy and manly, a strong drink for you. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902137971367628800/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!mercuryblast") || message.content.toLowerCase().startsWith("Jill!mercuryblast")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Ah, classy stuff.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** I wonder why it's called Mercury Blast.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Blending...don't forget the ice`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Mercury Blast**. Sour and burning. One strange combination.`).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902139325410590720/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!moonblast") || message.content.toLowerCase().startsWith("Jill!moonblast")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** To the moon.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Why moonblast, I wonder. Must be because it's pleasant.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Blending...don't forget the ice.`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Moonblast**. A sweet, happy and girly one. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902139614251339806/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!piano man") || message.content.toLowerCase().startsWith("Jill!piano man")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Ah, the one with the good backstory.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** I wonder who actually created this drink.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Blending...oh yeah, the ice.`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Piano Man**. Do you want to hear its backstory?`).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902140850606309386/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!piano woman") || message.content.toLowerCase().startsWith("Jill!piano woman")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** This one's a promo, but it might as well be on the classy list.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Piano Woman has a pretty interesting story too.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Seems aged enough. Mixing...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Piano Woman**. A sweet and happy drink for a sweet and happy drinker. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902142966053883914/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!pile driver") || message.content.toLowerCase().startsWith("Jill!pile driver")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Pile Driver. Hope you don't have a sore throat.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Vodka, Rum, Cola, orange juice,..`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Mixing...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Pile Driver**. A bit bitter, and a bit burning. There's nothing like it.`).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902143968362500126/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!sparkle star") || message.content.toLowerCase().startsWith("Jill!sparkle star")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Huh. I wish this is still allowed to actually sparkle.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** How much Karmotrine should I use..`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** This aged well enough. Mixing..`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Sparkle Star.**. One sweet and positivity inducing drink if you ask me. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902144821752377364/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!sugar rush") || message.content.toLowerCase().startsWith("Jill!sugar rush")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** I surely can't mess this up.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** This is as girly as it gets.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Mixing...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Sugar Rush**. A friendly drink for bar beginners. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902145673145757716/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!sunshine cloud") || message.content.toLowerCase().startsWith("Jill!sunshine cloud")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** Oh, Sunshine Cloud. Good stuff.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Now then, ice in..`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Blending...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Sunshine Cloud**. It's a bit bitter but soft and pleasant nonetheless. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902146436894953482/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!suplex") || message.content.toLowerCase().startsWith("Jill!suplex")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** I'll give you a suplex then. Wait, that sounds wrong...").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** This is kinda like the Pile Driver, but it burns more at the tongue.`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Ice in, and then mix...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Suplex**...Well, that came out sounding weird. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902147126916710400/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  if (message.content.toLowerCase().startsWith("jill!zen star") || message.content.toLowerCase().startsWith("Jill!zen star")) {
    if (message.author.bot) return;
    message.channel.send("**[0%]** One Zen Star...don't trust the name, though.").then(m => {
      setTimeout(() => {
        m.edit(`**[33%]** Don't forget the ice..`).then(m2 => {
          setTimeout(() => {
            m.edit(`**[66%]** Mixing...`).then(m2 => {
              setTimeout(() => {
                m2.edit(`**[100%]** All done. Enjoy your **Zen Star**. Be aware that it's not as good as it sounds. `).then(m3 => {
                  setTimeout(() => {
                    m3.edit(`https://cdn.discordapp.com/attachments/901898070357315674/902147741864574986/unknown.png`)
                  }, 3000);
                });
              }, 3000);
            });
          }, 3000);
        });
      }, 3000);
    });
  };
  ////////////


  if (message.content.toLowerCase().startsWith("jill!simp") || message.content.toLowerCase().startsWith("Jill!simp")) {
    if (message.author.bot) return;
    let user = message.mentions.users.first() || message.author
    let simps = Math.floor(Math.random() * 100) + 1;
    let embed = new Discord.MessageEmbed()
      .setTitle("How much do YOU simp for me?")
      .setDescription(`**${user}** ${simps}% simp Jill`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setFooter(`Thanks, I guess.`)
    message.channel.send({ embeds: [embed] });
  }



  if (message.content.toLowerCase().startsWith("jill!info") || message.content.toLowerCase().startsWith("Jill!info")) {
    if (message.author.bot) return;
    let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;
    let e = new Discord.MessageEmbed()
      .setColor("#C724B1")
      .setTimestamp()
      .setFields({
        name: "User Joined The Bar At",
        value: String(member.joinedAt)
      }, {
          name: "User Created At",
          value: String(user.createdAt)
        }, {
          name: "User Name & Tag",
          value: String(user.tag)
        }, {
          name: "User ID",
          value: String(user.id)
        })
      .setThumbnail(user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embeds: [e] });
  };



  if (message.content === "jill!avatar" || message.content === "jill!Avatar" || message.content === "jill!avt" || message.content === "Jill!Avatar" || message.content === "Jill!avatar" || message.content === "Jill!avt") {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}`)
      .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
      .setColor("RANDOM")
    message.channel.send({ embeds: [embed] })
  }

  
  if (message.content.toLowerCase().startsWith("jill!hack") || message.content.toLowerCase().startsWith("Jill!hack")) {
    if (message.author.bot) return;
    const user = message.mentions.users.first();
    if (!user) return message.channel.send("Hacking? But who?")
    if (user == message.author) return message.reply("Hacking yourself..? Are you that paranoid?")
    if (user == `901876393867092060`) return message.channel.send("Sigh...you can't ask me to hire Alma to hack myself..")
    if (user == `541882021434359811`) return message.channel.send("Their security is too strong, it's unhackable..")
    let password = ["hfkjsabvjkao", "lmao7279", "I'm a simp", "I love 2d women", "weirdperson1999", "dumbcake", "177013", "password", "imsupergay", "imgay123456", "life is not fair", "1+1=3", "oniichan~", "123456", "i love anime", "I hate anime", "bruhmoment"]
    let pw = (`${password[Math.floor(Math.random() * password.length)]}`)
    let embed = new Discord.MessageEmbed()
      .setAuthor(`Hacked by Alma, hired by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle(`${user.username} was hacked.`)
      .addFields(
        { name: `User ID:`, value: `${user.id}`, inline: true },
        { name: `IP:`, value: `${user.discriminator}`, inline: true },
        { name: `Email:`, value: `${user.username}@yahoo.com`, inline: true },
        { name: `password:`, value: `${pw}`, inline: true },
      )
      .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
      .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
      .setFooter("Hacking success.")
      .setTimestamp()
      .setColor(`RANDOM`)
    message.channel.send("**[20%]** Finding scrap data...").then(m => {
      setTimeout(() => {
        m.edit("**[40%]** Found. Initializing account and password hack...").then(m2 => {
          setTimeout(() => {
            m2.edit(`**[60%]** Success. \nemail: **${user.username}@yahoo.com**\n password: **${pw}**`).then(m3 => {
              setTimeout(() => {
                m3.edit("**[80%]** Selling the info on the black market...").then(m4 => {
                  setTimeout(() => {
                    m4.edit(`**[100%]** Hack successful. ${user.username}! All details are revealed.`)
                    message.channel.send({ embeds: [embed] })
                  }, 5800);
                });
              }, 3800);
            });
          }, 5000);
        });
      }, 6000);
    });
  };




  if (message.content.toLowerCase().startsWith("jill!decide") || message.content.toLowerCase().startsWith("Jill!decide") || message.content.toLowerCase().startsWith("jill!dc") || message.content.toLowerCase().startsWith("Jill!dc")) {
    if (message.author.bot) return;
    let sentence = message.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
    if (!sentence) return message.channel.send("What do you want to ask?");
  }

  if (message.content.toLowerCase().startsWith("jill!decide") || message.content.toLowerCase().startsWith("Jill!decide") || message.content.toLowerCase().startsWith("jill!dc") || message.content.toLowerCase().startsWith("Jill!dc")) {
    if (message.author.bot) return;
    let sentence = message.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
let a = ["kms","kill myself","suicide","self-harm","self harm","commit not alive","kill ourselves","kill ourself","kill herself","kill himself", "kill themselves"];
    if ((sentence.toLowerCase().includes("kms"))||(sentence.toLowerCase().includes("kill myself"))||(sentence.toLowerCase().includes("kill herself"))||(sentence.toLowerCase().includes("kill himself"))||
    (sentence.toLowerCase().includes("kill themselves"))||(sentence.toLowerCase().includes("kill yourself"))||
    (sentence.toLowerCase().includes("kys"))||(sentence.toLowerCase().includes("suicide"))) {
      let embeda = new Discord.MessageEmbed()
      .setThumbnail(`${message.author.displayAvatarURL()}`)
      .setTitle("Jill's counselling corner")
      .setURL("https://www.opencounseling.com/suicide-hotlines")
      .addField("Your question:", `${sentence}`)
      .addField("My answer:", "Whatever you do, please don't attempt suicide. The title is a link to suicide prevention hotlines list. Take a breath, call for help, don't be silent. I hope you get well soon. \n For those who write deathwishes to others, shame on you.") 
      .setColor("PURPLE")
    message.channel.send({ embeds: [embeda] })
    } else {
    let replies = [
      "Sure. 100%.",
      "Fuck no.",
      "Ask yourself that question.",
      "How am I supposed to answer that?",
      "What a stupid thing to ask.",
      "Nope, but if you buy more drinks, I'll reconsider.",
      "Possible. Just try your best.",
      "I don't see why not.",
      "Perhaps...",
      "That's a resounding yes. Is it not obvious?",
      "I'm betting my life on a yes.",
      "Take a guess.",
      "The answer lies within you.",
      "I don't know if humanity can ever answer this question.",
      "Is this a joke?",
      "That's the dumbest question I've heard today.",
      "I'd rather die than answering that.",
      "You must be so desperate now that you've asked me, but the answer is still no",
      "Nope. Face the reality.",
      "...Pervert.",
      "Your question is rather obvious. Yes. Surprised?",
      "Think harder before you ask me such a question.",
      "It's actually depressing that you asked me such a question",
    ];
    let randomized = replies[Math.floor(Math.random() * replies.length)];
    const user = message.users
    let embed = new Discord.MessageEmbed()
      .setThumbnail(`${message.author.displayAvatarURL()}`)
      .setTitle("Jill's counselling corner")
      .addField("Your question:", `${sentence}`)
      .addField("My answer:", `${randomized}`)
      .setColor("PURPLE")
    message.channel.send({ embeds: [embed] });
  }}

  if (message.content.toLowerCase().startsWith("jil!gg") || message.content.toLowerCase().startsWith("Jill!gg") || message.content.toLowerCase().startsWith("jill!google") || message.content.toLowerCase().startsWith("Jill!google")) {
    if (message.author.bot) return;
    let MSG = message.content.split(" ");
    let Query = MSG.slice(1).join("+");
    let QueryD = MSG.slice(1).join(" ");
    if (!Query) return message.channel.send("What are you trying to search?")
    else {
      let GG = new Discord.MessageEmbed()
        .setThumbnail(`${message.author.displayAvatarURL()}`)
        .setTitle("Jill's intel service.")
        .setTitle(`What you were searching for: ${QueryD}`)
        .setDescription(`**Here you go:**
    [Click on the link](https://www.google.com/search?q=${Query})`)
        .setColor("PURPLE")
        .setFooter("Thank you for trusting my service.")
      message.channel.send({ embeds: [GG] })
    }
  }

  if (message.content.toLowerCase().startsWith("jill!choose") || message.content.toLowerCase().startsWith("Jill!choose")) {
    if (message.author.bot) return;
    let prefix = "jill!" || "Jill!"
    const args = message.content.slice(prefix.length).trim().split(",");
    const command = args.shift().toLowerCase();
    if (!args.length) return message.channel.send("What do you want me to choose between?")
    else {
      message.channel.send(`**${args[Math.floor(Math.random() * args.length)]}** `)
    }
  }

  if (message.content.toLowerCase().startsWith("jill!dictionary") || message.content.toLowerCase().startsWith("Jill!dictionary") || message.content.toLowerCase().startsWith("jill!dict") || message.content.toLowerCase().startsWith("Jill!dict")) {
    if (message.author.bot) return;
    let MSG = message.content.split(" ");
    let Query = MSG.slice(1).join("_");
    let QueryD = MSG.slice(1).join(" ");
    if (!Query) return message.channel.send("What do you want me to look up for you in the dictionaries?")
    else {
      let GG = new Discord.MessageEmbed()
      message.channel.send(`Here's the word you were searching for. https://www.oxfordlearnersdictionaries.com/definition/english/${Query}`)
    }
  }


  if (message.content.toLowerCase().startsWith("jill!urban") || message.content.toLowerCase().startsWith("Jill!Urban") || message.content.toLowerCase().startsWith("jill!ud") || message.content.toLowerCase().startsWith("Jill!Ud")) {
    if (message.author.bot) return;
    let MSG = message.content.split(" ");
    let Query = MSG.slice(1).join("_");
    let QueryD = MSG.slice(1).join(" ");
    if (!Query) return message.channel.send("What do you want me to look up for you in the urban dictionary?")
    else {
      let GG = new Discord.MessageEmbed()
      message.channel.send(`Here's the word you were searching for. https://www.urbandictionary.com/define.php?term=${Query}`)
    }
  }
  if (message.content.toLowerCase().startsWith("jill!wikipedia") || message.content.toLowerCase().startsWith("Jill!wikipedia") || message.content.toLowerCase().startsWith("jill!wiki") || message.content.toLowerCase().startsWith("Jill!wiki")) {
    if (message.author.bot) return;
    let MSG = message.content.split(" ");
    let Query = MSG.slice(1).join("_");
    let QueryD = MSG.slice(1).join(" ");
    if (!Query) return message.channel.send("What do you want me to look up for you on Wikipedia?")
    else {
      let GG = new Discord.MessageEmbed()
      message.channel.send(`https://en.wikipedia.org/wiki/${Query}`)
    }
  }

  if (message.content.toLowerCase().startsWith("jill!peepee") || message.content.toLowerCase().startsWith("jill!pp")) {
    if (message.author.bot) return;

    let gayrate = ["8D.. Are you really a man?", "8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D", "8===========D", "8============D", "8=============D "]

    let victim = message.mentions.users.first()



    if (!victim) message.channel.send("Choose whose..penis you want to measure. Ugh, should have left this to Dorothy.")


    else {

      message.channel.send(` ${victim}'s penis is ${gayrate[Math.floor(Math.random() * gayrate.length)]}`)

    }

  }


  if (message.content.toLowerCase().startsWith("jill!help") || message.content.toLowerCase().startsWith("Jill!help") || message.content.toLowerCase().startsWith(`^<@!?${901876393867092060}>$`)) {
    if (message.author.bot) return;
    let warning = new Discord.MessageEmbed()
    .setDescription("My permissions may be outdated. Please type jill!invite and click the link to refresh permissions.")
    .setColor("PURPLE")
    const embed = new Discord.MessageEmbed()
      .setTitle("Jill's Command Guide:")
      .setDescription("My prefix is jill!")
      
      .addField("**MANUALS (RECOMMENDED)**", "`manuals`")
      .addField("**Moderator Commands: **", "`ban` `kick` `mute` `unmute` `createmute` `createrole` `deleterole`")
      .addField("**Utility Commands: **", " `help` `info` `membercount` `serveravatar` `servercount` `avatar` `serverinfo` `wikipedia` `google` `ping` `invite`")
      .addField("**Fun Commands: **", " `kill` `drink` `decide` `peepee` `imagequote` `quote` `meme` `hack` `choose`  `menu` `jukebox` `autorespond` `recipe` `hug` `kiss` `stare` `pat` `horny` `emojify` `letter` `zalgo` `mock`")
      .addField("**ABBREVIATIONS:**", "`abbreviations` `|` `abb`")

      .setFooter("Thank you for using our services.\n Image credit: u/Frnkln421 on Reddit")
      .setImage(`https://i.redd.it/cw16hqmf0hw01.png`)
      .setColor("PURPLE")
    message.channel.send({ embeds: [embed,warning] });
  }

  if (message.content.toLowerCase().startsWith("jill!abbreviations") || message.content.toLowerCase().startsWith("jill!abb")) {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Jill's abbreviation list")
      .setDescription("Abbreviations for commands")
      .addField("**Abbreviations: **", "`dictionary = dict` `imagequote = imgq` `quote = q` `autorespond = ar` `wikipedia = wiki` `ud = urban` `svcount = servercount` `manuals = um`")
      .setImage(`https://i.redd.it/cw16hqmf0hw01.png`)
      .setFooter("Thank you for using our service \n Image credit: u/Frnkln421 on Reddit")
    message.channel.send({ embeds: [embed] });
  }

  if (message.content.toLowerCase().startsWith("jill!ar") || message.content.toLowerCase().startsWith("Jill!ar") || message.content.toLowerCase().startsWith(`^<@!?${876697563808550964}>$`)) {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("Jill's Autoresponses")
      .setDescription("The list of autoresponses available.")
      .addField("**Auto-response**", " `JULIANNE!` `bartender!` `drink treat` `smoke break` `small talk` ")
      .setFooter("Thank you for using our services.")
      .setImage(`https://i.pinimg.com/originals/b5/3b/dd/b53bddde797a681e6118dea701b5a501.png`)
      .setFooter("Image taken from the game VA-11 HALL-A")
      .setColor("PURPLE")
    message.channel.send({ embeds: [embed] });
  }


  //QUOTE COMMAND

  if (message.content.toLowerCase().startsWith("jill!quote") || message.content.toLowerCase().startsWith("Jill!quote") || message.content.toLowerCase().startsWith("jill!q") || message.content.toLowerCase().startsWith("Jill!q")) {
    if (message.author.bot) return;
    let sentence = message.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
    let quote = [
      "**The love of flowers is really the best teacher of how to grow and understand them.** - Max Schling.",
      "**Humility must always be the portion of any man who receives acclaim earned in the blood of his followers and the sacrifices of his friends** - Dwight David Eisenhower,",
      "**You can lea a horticulture but you can't make her think.** - Dorothy Parker.",
      "**To be a scholar of mathematics you must be born with talent, insight, concentration, taste, luck, drive and the ability to visualize and guess.?** - Paul R. Halmos.",
      "**The Civil War is not ended: I question whether any serious civil war ever does end.** - Thomas Sterns Eliot",
      "**The origin of agriculture involved both human intentionality and a set of underlying ecological and evolutionary principles.** - Kent Flannery.",
      "** A man who gives his children habits of industry provides for them better than by giving them a fortune.** - Richard Whateley.",
      "*One tequilla, two tequilla, three tequilla, floor.** - George Carlin.",
      "**I drink to make other people more interesting.** - Ernest Hemmingway.",
      "**Candy is dandy, but liquor is quicker.** - Ogden Nash.",
      "**After the first glass, you see things as you wish they were. After the second, you see things as they are not. Finally, you see things as they really are, and that is the most horrible thing in the world.** - Oscar Wilde.",
      "**A man's true character comes out when he's drunk.** - Charlie Chaplin.",
      "**Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes healthhealth.** - Thomas Jefferson.",
      "**You die when you are killed.** - Emiya Shirou",
      "**You're correct, but that doesn't mean you're right.** - Emiya Shirou",
      "**viognier is sunlight, held together by water.** - Galileo.",
      "**Independence is a heay draught, and if you drink it in your youth, it can have the same effect on the brain as young viognier does. It does not matter that its taste is not always appealing. It is adictive and with each drink you want more.** - Maya Angelou.",
      "**I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.** — Winston Churchill.",
      "**I feel sorry for people who don't drink. When they wake up in the morning, that's as good as they're going to feel all day.** - Dean Martin.",
      "**I don't have a drinking problem, 'cept when I can't get a drink.** - Tom Waits.",
      "**An empty search history reveals more than a full one** - Sun Tzu, the art of war",
      "**Beer, it’s the best damn drink in the world** - Jack Nicholson",
      "**Too much of anything is bad, but too much good whiskey is barely enough.** - Mark Twain.",
      "**I work until beer o’clock.** - Stephen King.",
      "**Happiness is having a rare steak, a bottle of whisky and a dog to eat the rare steak.** - Johny Carson.",
      "**They say the only people who tell the truth are drunkards and children. Guess which one I am** - Stephen Colbert.",
      "**Vodka is a type of hobby.** - Betty White.",
      "**Milk is for babies. When you grow up you have to drink beer.** - Arnold Schwarzenegger.",
      "**Don't be such a square. Everybody who's anybody drinks** - Lorraine Baines.",
      "**Beer is proof that God loves us and wants us to be happy.** - Benjamin Franklin.",
      "**Wasted away again in Margaritaville.** - Jimmy Buffet.",
      "**Never lie, steal, cheat or drink. But if you must lie, lie in the arms of the one you love. If you must steal, steal away from bad company. If you must cheat, cheat death. And if you must drink, drink in the moments that take your breath away.** - Alex Hitch.",
      "**Alcohol may be man’s worst enemy, but the Bible says love your enemy.** - Frank Sinatra.",
      "**There are two kinds of people I don't trust: people who don't drink and people who collect stickers.** - Chelsea Handler",
      "**Why is the rum gone?** - Jack Sparrow,",
      "**The worst thing about some men is that when they are not drunk they are sober.** - William Butler Yeats.",
      "**We were not a hugging people. In terms of emotional comfort, it was our belief that no amount of physical contact could match the healing powers of a well-made cocktail.** - David Sedaris",
      "**Clear alcohols are for rich women on diets.** - Ron Swanson.",
      "**My justification is that most people my age spend a lot of time thinking about what they’re going to do for the next five or 10 years. The time they spend thinking about their life, I just spend drinking.** - Amy Whitehouse.",
      "**“You say potato, I say vodka.** - Karen Walker.",
      "**What good can drinkin' do, what good can drinkin' do? / Lord, I drink all night but the next day I still feel blue.** - Janis Joplin.",
      "**Shaken, not stirred.** - James Bond.",
      "**Time we will never get back, but it was all worth it** - Amelia Watson",
      "**Sometimes in life, you try to hit life with a 'hui-tcha', but then life decides to hit you with a hui-tcha. Do you know what you do in this predicament, when life hui-tcha's you? You go AGAIN!** - Gawr Gura",
      "**Even if you make a lot of mistakes, and you think everything is going wrong, the one person that can for sure forgive you is yourself. Humu humu** - Ninomae Ina'nis",
      "**If you quit when you suck, you'll suck forever** - Mori Calliope",
      "**Do what you think is best for you. If you're not sure what it is, take a moment to listen to your heart** - Takanashi Kiara",

      "**A man may acquire a taste for viognier or brandy, and so lose his love for water, but should we not pity him.** - Henry David Thoreau.",

      "**“A man is a fool if he drinks before he reaches the age of 50 and a fool if he doesn’t afterward.** - Frank Lloyd Wright.",
      "**viognier is the most healthful and most hygienic of beverages.** - Louis Pasteur.",
      "**It is the viognier that leads me on, the wild viognier that sets the wisest man to sing at the top of his lungs, laugh like a fool—it drives the man to dancing…it even tempts him to blurt out stories better never told.!** - Homer.",
      "**My own experience has been that the tools I need for my trade are paper, tobacco, food and a little whiskey.** - William Faulkner.",
      "**Here’s to alcohol, the cause of, and solution to, all life’s problems.** - Homer Simpson.",




    ];

    message.channel.send(`${quote[Math.floor(Math.random() * quote.length)]}`);
  }

  if (message.content.toLowerCase().startsWith("jill!imagequote") || message.content.toLowerCase().startsWith("Jill!imagequote") || message.content.toLowerCase().startsWith("jill!imgq") || message.content.toLowerCase().startsWith("Jill!imgq")) {
    if (message.author.bot) return;
    let sentence = message.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
    let quote = ["**The love of flowers is really the best teacher of how to grow and understand them.** - Max Schling.",
      "**Humility must always be the portion of any man who receives acclaim earned in the blood of his followers and the sacrifices of his friends** - Dwight David Eisenhower,",
      "**You can lea a horticulture but you can't make her think.** - Dorothy Parker.",
      "**To be a scholar of mathematics you must be born with talent, insight, concentration, taste, luck, drive and the ability to visualize and guess.?** - Paul R. Halmos.",
      "**The Civil War is not ended: I question whether any serious civil war ever does end.** - Thomas Sterns Eliot",
      "**The origin of agriculture involved both human intentionality and a set of underlying ecological and evolutionary principles.** - Kent Flannery.",
      "** A man who gives his children habits of industry provides for them better than by giving them a fortune.** - Richard Whateley.",
      "*One tequilla, two tequilla, three tequilla, floor.** - George Carlin.",
      "**I drink to make other people more interesting.** - Ernest Hemmingway.",
      "**Candy is dandy, but liquor is quicker.** - Ogden Nash.",
      "**After the first glass, you see things as you wish they were. After the second, you see things as they are not. Finally, you see things as they really are, and that is the most horrible thing in the world.** - Oscar Wilde.",
      "**A man's true character comes out when he's drunk.** - Charlie Chaplin.",
      "**Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes healthhealth.** - Thomas Jefferson.",
      "**You die when you are killed.** - Emiya Shirou",
      "**You're correct, but that doesn't mean you're right.** - Emiya Shirou",
      "**viognier is sunlight, held together by water.** - Galileo.",
      "**Independence is a heay draught, and if you drink it in your youth, it can have the same effect on the brain as young viognier does. It does not matter that its taste is not always appealing. It is adictive and with each drink you want more.** - Maya Angelou.",
      "**I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.** — Winston Churchill.",
      "**I feel sorry for people who don't drink. When they wake up in the morning, that's as good as they're going to feel all day.** - Dean Martin.",
      "**I don't have a drinking problem, 'cept when I can't get a drink.** - Tom Waits.",
      "**An empty search history reveals more than a full one** - Sun Tzu, the art of war",
      "**Beer, it’s the best damn drink in the world** - Jack Nicholson",
      "**Too much of anything is bad, but too much good whiskey is barely enough.** - Mark Twain.",
      "**I work until beer o’clock.** - Stephen King.",
      "**Happiness is having a rare steak, a bottle of whisky and a dog to eat the rare steak.** - Johny Carson.",
      "**They say the only people who tell the truth are drunkards and children. Guess which one I am** - Stephen Colbert.",
      "**Vodka is a type of hobby.** - Betty White.",
      "**Milk is for babies. When you grow up you have to drink beer.** - Arnold Schwarzenegger.",
      "**Don't be such a square. Everybody who's anybody drinks** - Lorraine Baines.",
      "**Beer is proof that God loves us and wants us to be happy.** - Benjamin Franklin.",
      "**Wasted away again in Margaritaville.** - Jimmy Buffet.",
      "**Never lie, steal, cheat or drink. But if you must lie, lie in the arms of the one you love. If you must steal, steal away from bad company. If you must cheat, cheat death. And if you must drink, drink in the moments that take your breath away.** - Alex Hitch.",
      "**Alcohol may be man’s worst enemy, but the Bible says love your enemy.** - Frank Sinatra.",
      "**There are two kinds of people I don't trust: people who don't drink and people who collect stickers.** - Chelsea Handler",
      "**Why is the rum gone?** - Jack Sparrow,",
      "**The worst thing about some men is that when they are not drunk they are sober.** - William Butler Yeats.",
      "**We were not a hugging people. In terms of emotional comfort, it was our belief that no amount of physical contact could match the healing powers of a well-made cocktail.** - David Sedaris",
      "**Clear alcohols are for rich women on diets.** - Ron Swanson.",
      "**My justification is that most people my age spend a lot of time thinking about what they’re going to do for the next five or 10 years. The time they spend thinking about their life, I just spend drinking.** - Amy Whitehouse.",
      "**“You say potato, I say vodka.** - Karen Walker.",
      "**What good can drinkin' do, what good can drinkin' do? / Lord, I drink all night but the next day I still feel blue.** - Janis Joplin.",
      "**Shaken, not stirred.** - James Bond.",
      "**Time we will never get back, but it was all worth it** - Amelia Watson",
      "**Sometimes in life, you try to hit life with a 'hui-tcha', but then life decides to hit you with a hui-tcha. Do you know what you do in this predicament, when life hui-tcha's you? You go AGAIN!** - Gawr Gura",
      "**Even if you make a lot of mistakes, and you think everything is going wrong, the one person that can for sure forgive you is yourself. Humu humu** - Ninomae Ina'nis",
      "**If you quit when you suck, you'll suck forever** - Mori Calliope",
      "**Do what you think is best for you. If you're not sure what it is, take a moment to listen to your heart** - Takanashi Kiara",

      "*A man may acquire a taste for viognier or brandy, and so lose his love for water, but should we not pity him.** - Henry David Thoreau.",

      "**“A man is a fool if he drinks before he reaches the age of 50 and a fool if he doesn’t afterward.** - Frank Lloyd Wright.",
      "**viognier is the most healthful and most hygienic of beverages.** - Louis Pasteur.",
      "**It is the viognier that leads me on, the wild viognier that sets the wisest man to sing at the top of his lungs, laugh like a fool—it drives the man to dancing…it even tempts him to blurt out stories better never told.!** - Homer.",
      "**My own experience has been that the tools I need for my trade are paper, tobacco, food and a little whiskey.** - William Faulkner.",
      "**Here’s to alcohol, the cause of, and solution to, all life’s problems.** - Homer Simpson.",
    ];

    let image = [
      "https://cdn.discordapp.com/attachments/901898070357315674/901898208014397480/50mostpopularcocktail_internal_cosmopolitan.png", "https://cdn.discordapp.com/attachments/901898070357315674/901898445235830834/50mostpopularcocktail_internal_tomcollins.png", "https://cdn.discordapp.com/attachments/901898070357315674/901898567906656276/50mostpopularcocktail_internal_aviation.png", "https://cdn.discordapp.com/attachments/901898070357315674/901898727520862218/50mostpopularcocktail_internal_brandycrusta.png", "https://cdn.discordapp.com/attachments/901898070357315674/901898813319561277/50mostpopularcocktail_internal_americano.png", "https://cdn.discordapp.com/attachments/901898070357315674/901898906823196702/50mostpopularcocktail_internal_sazerac.png", "https://cdn.discordapp.com/attachments/901898070357315674/901898990809915482/50mostpopularcocktail_internal_darknstormy.png", "https://cdn.discordapp.com/attachments/901898070357315674/901899066278019132/50mostpopularcocktail_internal_mojito.png", "https://cdn.discordapp.com/attachments/901898070357315674/901899159492259850/50mostpopularcocktail_internal_margarita.png", "https://cdn.discordapp.com/attachments/901898070357315674/901899250252804096/50mostpopularcocktail_internal_oldfashioned.png", "https://cdn.discordapp.com/attachments/901898070357315674/901899507271368764/french-75-1594302212.png", "https://cdn.discordapp.com/attachments/901898070357315674/901899639773614101/boulevardier-1594302158.png", "https://cdn.discordapp.com/attachments/901898070357315674/901899738520117308/bloody-mary-1594302099.png", "https://cdn.discordapp.com/attachments/901898070357315674/901899885824065606/gimlet-1594302040.png", "https://cdn.discordapp.com/attachments/901898070357315674/901900059849945108/moscow-mule-1594300283.png", "https://cdn.discordapp.com/attachments/901898070357315674/901900180658458684/manhattan-1594301669.png", "https://cdn.discordapp.com/attachments/901898070357315674/901900279144923206/whiskey-sour-1594301807.png", "https://cdn.discordapp.com/attachments/901898070357315674/901900371327340555/martini-1594301605.png", "https://cdn.discordapp.com/attachments/901898070357315674/901900481725608016/daiquiri-1594301733.png", "https://cdn.discordapp.com/attachments/901898070357315674/901900581562626088/negroni-1594301841.png",



    ];



    let random = quote[Math.floor(Math.random() * quote.length)];

    let embed = new Discord.MessageEmbed()
      .setImage(image[Math.floor(Math.random() * image.length)])
      .setTitle(`${random}`)
      .setColor("RANDOM")
    message.channel.send({ embeds: [embed] });
  }
  if ((message.content.toLowerCase().startsWith("jill!recipe")) || (message.content.toLowerCase().startsWith("Jill!recipe"))) {
    let temp = "jill!recipe";
    let f = message.content.slice(temp.length + 1);

    let recipe = ["maple bourbon smash: The flavor of bourbon is enhanced in this cocktail recipe thanks to the addition of sage, fresh lemon, and maple syrup in this fall recipe.", "cranberry apple cider: This drink is a mix of cranberry and apple cider with sugar, cinamon sticks and whole gloves, usually served warm for the Thanksgiving night.", "witch's heart: This seasonal release vodka cocktail is a blend of berry, green apple, lemon juice, and white grape juice. The Witch's Heart purple coloring gets its luminosity from edible glitter shimmer. Base spirit: vodka.", "coffee: Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.", "martini: The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.", "tequila: Tequila is a distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila 65 km northwest of Guadalajara, and in the Jaliscan Highlands of the central western Mexican state of Jalisco.", "french 75: French 75 is a cocktail made from gin, champagne, lemon juice, and sugar.", "boulevardier: The boulevardier cocktail is an alcoholic drink composed of whiskey, sweet vermouth, and Campari.", "old fashioned: The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey or, less commonly, brandy, and garnishing with orange slice or zest and a cocktail cherry.", "mojito: The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.", "dark n stormy: A Dark ’n’ Stormy is a highball cocktail made with dark rum and ginger beer served over ice and garnished with a slice of lime. Lime juice and simple syrup are also frequently added.", "sazerac: The Sazerac is a local variation of a cognac or whiskey cocktail originally from New Orleans, named for the Sazerac de Forge et Fils brand of cognac brandy that served as its original main ingredient.", "americano: The Americano is an IBA official cocktail composed of Campari, sweet vermouth, and for the sparkling version, club soda and garnished with a slice of lemon.", "brandy crusta: A Brandy Crusta is an IBA Official Cocktail made of brandy, Maraschino Luxardo, curaçao, fresh lemon juice, sugar syrup, and Angostura bitters.", "cosmopolitan: A cosmopolitan, or informally a cosmo, is a cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice.", "margarita: A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.", "grasshopper: A Grasshopper is a sweet, mint-flavored, after-dinner drink, consisting of Crème de cacao (white), Crème de menthe (green) and Fresh cream en", "bad touch: A Bad Touch is 2 Bronson Extract, 2 Powdered Delta, 2 Flanergide and 4 Karmotrine . All on the rocks and mixed.", "bleeding jane: A Bleeding Jane is 1 Bronson Extract, 3 Powdered Delta and 3 Flanergide . All blended.", "bloom light: A Bloom Light is 4 Adelhyde, 1 Powdered Delta, 2 Flanergide and 3 Karmotrine . All aged, on the rocks and mixed.", "blue fairy: A Blue Fairy is 4 Adelhyde, 1 Flanergide and (optional) Karmotrine. All aged and mixed.", "brandtini: A Brandtini is 6 Adelhyde, 3 Powdered Delta and 1 Karmotrine. All aged and mixed.", "cobalt velvet: A Cobalt Velvet is 2 Adelhyde, 3 Flanergide and 5 Karmotrine. All on the rocks and mixed.", "crevice spike: A Crevice Spike is 2 Powdered Delta, 4 Flanergide and (optional) Karmotrine. All blended.", "flaming moai: A Flaming Moai is 1 Adelhyde, 1 Bronson Extract, 2 Powdered Delta, 3 Flanergide and 5 Karmotrine. All mixed.", "fluffy dream: A Fluffy Dream is 3 Adelhyde, 3 Powdered Delta and (optional) Karmotrine. All aged and mixed.", "fringe weaver: A Fringe Weaver is 1 Adelhyde and 9 Karmotrine. All aged and mixed.", "grizzly temple: A Grizzly Temple is 3 Adelhyde, 3 Bronson Extract, 3 Powdered Delta and 1 Karmotrine. All blended.", "gut punch: A Gut Punch is 5 Bronson Extract, 1 Flanergide and (optional) Karmotrine. All aged and mixed.", "marsblast: A Marsblast is 6 Bronson Extract, 1 Powdered Delta, 4 Flanergide and 2 Karmotrine. All blended.", "mercuryblast: A Mercuryblast is 1 Adelhyde, 1 Bronson Extract, 3 Powdered Delta, 3 Flanergide and 2 Karmotrine. All on the rocks and blended.", "moonblast: A Moonblast is 6 Adelhyde, 1 Powdered Delta, 1 Flanergide and 2 Karmotrine. All on the rocks and blended.", "piano man: A Piano Man is 2 Adelhyde, 3 Bronson Extract, 5 Powdered Delta, 5 Flanergide and 3 Karmotrine. All on the rocks and mixed.", "piano woman: A Piano Woman is 5 Adelhyde, 5 Bronson Extract, 2 Powdered Delta, 3 Flanergide and 3 Karmotrine. All aged and mixed.", "pile driver: A Piledriver is 3 Bronson Extract, 3 Flanergide and 4 Karmotrine. All mixed.", "sparkle star: A Sparkle Star is 2 Adelhyde, 1 Powdered Delta and (optional) Karmotrine. All aged and mixed.", "sugar rush: A Sugar Rush is 2 Adelhyde, 1 Powdered Delta and (optional) Karmotrine. All mixed. ", "sunshine cloud: A Sunshine Cloud is 2 Adelhyde, 2 Bronson Extract and (optional) Karmotrine. All on the rocks and blended.", "suplex: A Suplex is 4 Bronson Extract, 3 Flanergide and 3 Karmotrine. All on the rocks and mixed.", "zen star: A Zen Star is 4 Adelhyde, 4 Bronson Extract, 4 Powdered Delta, 4 Flanergide and 4 Karmotrine. All on the rocks and mixed.", "viognier: Viognier is a white wine grape variety. It is the only permitted grape for the French wine Condrieu in the Rhône Valley. Outside of the Rhône, Viognier can be found in regions of North and South America as well as Australia, New Zealand, the Cape Winelands in South Africa and Israel.", "vodka: Vodka is a clear distilled alcoholic beverage. Different varieties originated in Poland, Russia and Sweden. Vodka is composed mainly of water and ethanol, but sometimes with traces of impurities and flavourings. Traditionally it is made by distilling liquid from fermented cereal grains.", "whiskey: Whisky or whiskey is a type of distilled alcoholic beverage made from fermented grain mash. Various grains are used for different varieties, including barley, corn, rye, and wheat. Whisky is typically aged in wooden casks, which are often old sherry casks or may also be made of charred white oak.", "sauvignon blanc: Sauvignon blanc is a green-skinned grape variety that originates from the Bordeaux region of France. The grape most likely gets its name from the French words sauvage and blanc due to its early origins as an indigenous grape in South West France. It is possibly a descendant of Savagnin.", "hennessy: Jas Hennessy & Co., commonly known simply as Hennessy, is a French cognac distiller with its headquarters located in Cognac, France. Jas Hennessy & Co. sells about 50 million bottles a year worldwide, making it the largest cognac producer, supplying more than 40% of the world's cognac, a variety of brandy.", "pinot grigio: Pinot gris, pinot grigio or Grauburgunder is a white wine grape variety of the species Vitis vinifera. Thought to be a mutant clone of the pinot noir variety, it normally has a grayish-blue fruit, accounting for its name but the grapes can have a brownish pink to black and even white appearance.", "champagne: Champagne is a sparkling wine produced in the Champagne wine region of France under the rules of the appellation that demand specific vineyard practices, sourcing of grapes exclusively from designated places within it, specific grape-pressing methods and secondary fermentation of the wine in the bottle to cause carbonation. The grapes Pinot noir, Pinot meunier, and Chardonnay are used to produce almost all Champagne, but small amounts of Pinot blanc, Pinot gris (called Fromenteau in Champagne), Arbane, and Petit Meslier are vinified as well.", "red wine: Red wine is a type of wine made from dark-colored grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. ", "chardonnay: Chardonnay is a green-skinned grape variety used in the production of white wine. The variety originated in the Burgundy wine region of eastern France, but is now grown wherever wine is produced, from England to New Zealand.", "di valtellina: Made with only Nebbiolo grapes, thanks to its intriguing simplicity and easy drinkability, this is the perfect wine for every day, while standing up to even the most important occasions.", "sake: Sake, also spelled saké, is an alcoholic beverage made by fermenting rice that has been polished to remove the bran.", "bourbon: Bourbon is a type of American whiskey, a barrel-aged distilled liquor made primarily from corn. The name derives from the French Bourbon dynasty, although the precise inspiration is uncertain; contenders include Bourbon County in Kentucky and Bourbon Street in New Orleans, both of which are named after the dynasty. ", "gin: Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries. Gin originated as a medicinal liquor made by monks and alchemists across Europe, particularly in southern France, Flanders and the Netherlands, to provide aqua vita from distillates of grapes and grains.", "chivas regal: Chivas Regal is a blended Scotch whisky manufactured by Chivas Brothers, which is part of Pernod Ricard. It was founded in 1786, with its home being in the Strathisla distillery at Keith, Moray in Speyside, Scotland, and is the oldest continuously operating Highland distillery.", "milk: Milk is a nutrient-rich liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals, including breastfed human infants before they are able to digest solid food.", "beer: Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. It consists of yeast, malt extract and optional sugar.", "orange juice: It's the juice from oranges. Simple as that.", "coke: Coca-Cola, or Coke, is a carbonated soft drink manufactured by The Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century.", "strongbow: Strongbow is a dry cider produced by H. P. Bulmer in the United Kingdom since 1960, made with naturally fermented fruits, mainly apple.", "chocomilk: Chocolate milk is a sweetened chocolate-flavored milk. It can be made by mixing chocolate syrup with milk. It can be purchased pre-mixed with milk or made at home by blending milk with cocoa powder and a sweetener, melted chocolate, chocolate syrup, or a pre-made powdered chocolate milk mix.", "water: H2O as the fedoras call it. Water is water.", "tea: Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia. After water, it is the most widely consumed drink in the world.", "milkshake: A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.", "In this drink, muddled cranberries and vodka get topped with tonic water and sparkling cider, then garnished with a rosemary sprig, for a sip that will bring the holiday cheer and so much more.", "eggnog: Eggnog, historically also known as a milk punch or an egg milk punch when alcoholic beverages are added, is a rich, chilled, sweetened, dairy-based beverage. It is traditionally made with milk, cream, sugar, whipped egg whites, and egg yolks.", "hibiscus margarita: Tequila, lime juice, Cointreau, Hibiscus simple syrup, and Margarita salt for the rim. Perfect drink for January.", "bourbon hot chocolate: The drink contains maple syrup, cocoa powder, vanilla extract, salt, milk and of course, Bourbon", "happy new year: Take a Champagne cocktail, forget the sugar, add some ruby port and orange juice and you have a \"Happy New Year.\" It really is the name of this fantastic drink and it is an ideal way to ring in the new year."];

    let imgrecipe = ["happy new year: https://cdn.discordapp.com/attachments/902470717709369374/904855952421969950/HappyNewYear-128401826-56a172335f9b58b7d0bf5b89.png", "bourbon hot chocolate: https://chilledmagazine.com/wp-content/uploads/2020/11/Bourbon-Hot-Chocolate-1.jpg", "hibiscus margarita: https://alittleandalot.com/wp-content/uploads/2018/05/600-Hibiscus-tea-margarita-1.jpg", "hibiscus: https://alittleandalot.com/wp-content/uploads/2018/05/600-Hibiscus-tea-margarita-1.jpg", "eggnog: https://cdn.discordapp.com/attachments/902470717709369374/904841580622512209/opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.png", "holiday cheer: https://cdn.discordapp.com/attachments/902470717709369374/904840071600029716/holiday-cheer-720x720-primary-399f06798a154c68a39de1bfae2820e6.png", "maple bourbon smash: https://cdn.discordapp.com/attachments/902470717709369374/904808081102352394/unknown.png", "cranberry apple cider: https://www.culinaryhill.com/wp-content/uploads/2020/12/Slow-Cooker-Cranberry-Apple-Cider-Culinary-Hill-LR-05.jpg", "witch's heart: https://cdn.discordapp.com/attachments/902470717709369374/904295608062459914/Witch-Heart-Halloween-Cocktail-The-Flavor-Bender-6-700x1057.png", "coffee: https://cdn.discordapp.com/attachments/901898070357315674/903917213147340831/A_small_cup_of_coffee.png", "french 75: https://www.liquor.com/thmb/QBzfhalevWw7lCnWRv8MOxBsVao=/735x0/french-75-720x720-primary-17fc1ce34c0a49e2ad60eb4a5705c6a2.jpg", "boulevardier: https://cdn.dayphache.edu.vn/wp-content/uploads/2019/09/cach-lam-cocktail-boulevardier.jpg", "old fashioned: https://www.liquor.com/thmb/f_Fv27Y9k7zIofk_E6rhz37BpWQ=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg", "mojito: https://cuongquat.com/files/tin/34/jpg/cong-thuc-pha-cocktail-mojito.jpg", "dark n stormy: https://www.liquor.com/thmb/vVQTKLEt9sxWKFFTCycXwkjOgrU=/735x0/dark-and-stormy-720x720-recipe-95f288ed6697444ab3301f8670b4564e.jpg", "sazerac: https://www.liquor.com/thmb/VpgmxHBujTHTds0SMRQUMuYawCU=/720x540/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10145323__sazerac-720x720-recipe-2c78066a77ab453481aceb83c219d78f.jpg", "americano: https://www.liquor.com/thmb/5YBw0DEahuk1irnOBeSpKNIs2lE=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__05__18075612__americano-720x720-article-50171f19cc644b05b8df563e06a647fd.jpg", "brandycrusta: https://www.liquor.com/thmb/8ntCwCq3NlBFcxC_iYACyTA_1PI=/720x720/smart/filters:no_upscale()/brandy-crusta-720x720-primary-6b475c842f664b24894d75e61eb80686.jpg", "cosmopolitan: https://www.liquor.com/thmb/-rn5QFts2RJGmp2o4aBCsOWCf04=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/cosmopolitan-720x720-primary-0190d40114c741648979dae7e46b6bbf.jpg", "margarita: https://www.liquor.com/thmb/oWRSoxMLEHVc7wljdfgVTldHUNc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/margarita-720x720-primary-f4a3b044e9a746d9b88890515c3a7328.jpg", "martini: https://www.liquor.com/thmb/UXprV3UhqbTaJjB0MKSkJ09gNuE=/720x720/smart/filters:no_upscale()/dry-martini-720x720-primary-a6de08f8cd584ad88520287922578bcb.jpg", "gin: https://www.hisco.com.au/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/a/r/arc_gin_shot_glass_3.jpg", "grasshopper: https://www.liquor.com/thmb/CRXajbaGbKIDo-nc2CGIw2N1xF0=/735x0/grasshopper-720x720-article-effdd8c4222b415c948816047bd59b1a.jpg", "bad touch: https://cdn.discordapp.com/attachments/901898070357315674/902089858191859782/unknown.png", "bleeding jane: https://media.discordapp.net/attachments/901898070357315674/902122095239135253/unknown.png?width=689&height=701", "blue fairy: https://media.discordapp.net/attachments/901898070357315674/902125368301998140/unknown.png?width=831&height=701", "brandtini: https://cdn.discordapp.com/attachments/901898070357315674/902126050002239508/unknown.png", "bloom light: https://cdn.discordapp.com/attachments/901898070357315674/902123580979032105/unknown.png", "cobalt velvet: https://cdn.discordapp.com/attachments/901898070357315674/902127233370554368/unknown.png", "crevice spike: https://cdn.discordapp.com/attachments/901898070357315674/902129086795759676/unknown.png", "flaming moai: https://media.discordapp.net/attachments/901898070357315674/902130813297115146/unknown.png?width=1314&height=701", "fluffy dream: https://cdn.discordapp.com/attachments/901898070357315674/902132838860722176/unknown.png", "fringe weaver: https://cdn.discordapp.com/attachments/901898070357315674/902134909051736064/unknown.png", "grizzly temple: https://cdn.discordapp.com/attachments/901898070357315674/902135712890097674/unknown.png", "gut punch: https://cdn.discordapp.com/attachments/901898070357315674/902137180141518878/unknown.png", "marsblast: https://cdn.discordapp.com/attachments/901898070357315674/902137971367628800/unknown.png", "mercuryblast: https://cdn.discordapp.com/attachments/901898070357315674/902139325410590720/unknown.png", "moonblast: https://cdn.discordapp.com/attachments/901898070357315674/902139614251339806/unknown.png", "piano man: https://cdn.discordapp.com/attachments/901898070357315674/902140850606309386/unknown.png", "piano woman: https://cdn.discordapp.com/attachments/901898070357315674/902142966053883914/unknown.png", "pile driver: https://cdn.discordapp.com/attachments/901898070357315674/902143968362500126/unknown.png", "sparkle star: https://cdn.discordapp.com/attachments/901898070357315674/902144821752377364/unknown.png", "sugar rush: https://cdn.discordapp.com/attachments/901898070357315674/902145673145757716/unknown.png", "sunshine cloud: https://cdn.discordapp.com/attachments/901898070357315674/902146436894953482/unknown.png", "suplex: https://media.discordapp.net/attachments/901898070357315674/902147126916710400/unknown.png?width=900&height=701", "zen star: https://media.discordapp.net/attachments/901898070357315674/902147741864574986/unknown.png?width=1059&height=702", "viognier: https://cdn.discordapp.com/attachments/901898070357315674/902155261484097546/unknown.png", "whiskey: https://www.snopes.com/tachyon/2017/10/whisky_shot_fb.jpg?resize=865%2C452&crop_strategy=smart", "vodka: https://cdn.discordapp.com/attachments/901898070357315674/902153207013339156/Kamikaze-drink-4.png", "tequila: https://www.thedailymeal.com/sites/default/files/story/2018/iStock-692856274.jpg", "sauvignon blanc: https://khoruou.vn/Uploads/images/white001.png", "hennessy: https://www.simplyhealthyfamily.org/wp-content/uploads/2018/11/How-To-Serve-Hennessy.jpg", "pinot grigio: https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/GUsh9q_2SGS7d2dUob3a_sZEri4=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/DV6Z2BBVWTAVNBTQUEYH2R6Q2E.jpg", "champagne: https://cdn.discordapp.com/attachments/901898070357315674/902156826345345034/champagne-bar-by-sofitel-11.png", "red wine: https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322300_1100-1100x628.jpg", "chardonnay: https://cdn.discordapp.com/attachments/901898070357315674/903367452006682624/22383_3.png", "di valtellina: https://troppogiovane.nl/wp-content/uploads/rsz_arpepe-rossomagnum-2018.jpg", "sake: https://www.nishikidori.com/1767-large_default/tenjo-mugen-nigorizake-sake.jpg", "bourbon: https://i.pinimg.com/736x/d7/87/22/d78722507260f84293be44d92fe91053--bon-fire-shot-recipes.jpg", "chivas regal: https://s3.ap-south-1.amazonaws.com/thewhisky/sites/default/files/chivas-regal.jpg", "beer: https://shanghai-paper.com/wp-content/uploads/2020/06/Beer-in-China.jpg", "milkshake: https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg", "orange juice: https://shipcity.vn/wp-content/uploads/2021/07/Orange-Juice.jpg", "coke: https://fox8.com/wp-content/uploads/sites/12/2021/07/Coke-Zero-Sugar-Table-Top.jpg?w=1280", "strongbow: https://khoeplus.com.vn/wp-content/uploads/2019/12/Strongbow-la-gi.jpg", "water: https://cdn.tgdd.vn/2021/05/CookProduct/Sparklingwatermyths(1)-1200x676.jpg", "tea: https://www.mudaru.com/images/324771_1100-1100x628.jpg", "chocomilk: https://www.thespruceeats.com/thmb/4q2qtsKAR8x8TMqkBh-UgDpYxvc=/3603x3603/smart/filters:no_upscale()/chocolate-milk-recipe-2355494-hero-01-d44b4548f5904a758ed12d5caa0466fd.jpg", "milk: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Oat_milk_glass_and_bottles.jpg/1200px-Oat_milk_glass_and_bottles.jpg", "milkshake: https://www.thespruceeats.com/thmb/sBYwObOI0p59L60c3A2vwXOrToY=/3831x3831/smart/filters:no_upscale()/cookie-milkshake-recipe-305397-hero-01-ae75bd5313724a03ba1b538dc6a1a167.jpg"];

    let z = "";

    for (let x of recipe) {
      let y = x.slice(0, f.length);
      if (y == f) z = x.slice(f.length + 1);
    }
    let w = "";
    for (let m of imgrecipe) {
      let n = m.slice(0, f.length);
      if (n == f) w = m.slice(f.length + 1);
    }
    if (!z) message.channel.send("Looks like I can't find the recipe for that, please select another drink.")
    if (!f) message.channel.send("Select the drink you want to see recipe for from ``jill!menu``.");
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Recipe for **${f}** found`)
        .setDescription(z)
        .setColor("PURPLE")
        .setImage(w)

      message.channel.send({ embeds: [embed] });
    }
  }

  if (message.content.toLowerCase().startsWith("jill!seasonal")) {

    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("**SEASONAL DRINKS**")
      .setDescription("**Drinks for specific months and occasions**")
      .addField("**HOLIDAY DRINKS**", " `witch's heart \(Halloween\)` `cranberry apple cider \(Thanksgiving\)` `mulled wine \(Christmas\)` `happy new year \(New Year's eve/New Year\)`")
      .addField("**MONTHLY DRINKS**", "**January:** `hibiscus margarita`\n **February:** `bourbon hot chocolate`\n **November:** `maple bourbon smash`\n **December:** `holiday cheer` `|` `eggnog`\n  ")
      .setFooter("Thank you for using my service.\n Image credit to pehesse on Tumblr")
      .setColor("PURPLE")
      .setImage(`https://images7.alphacoders.com/113/thumb-1920-1136283.jpg`)
    message.channel.send({ embeds: [embed] });

  }




})



client.login(token)
