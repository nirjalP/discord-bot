require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mod-me';

client.on('ready', () => {
    console.log("Bot is ready to go");
});

client.on("messageDelete",msg => {
    msg.channel.send("Stop deleting memssages");
});

client.on("message", (msg) =>{
    if(msg.content === "I love Porn"){
        msg.react("💘");
    }

    if(msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`){
    modUser(msg.member);}
});

client.login(process.env.BOT_CODE);

const modUser = (msg) =>{
    
        msg.roles.add("783714605242777620"); 
}