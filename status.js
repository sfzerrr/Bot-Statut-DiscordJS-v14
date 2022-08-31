// Copyright by Sfzerrr#8251 (2022)

const Discord  = require('discord.js');
const intents = new Discord.IntentsBitField(3276799)
const Client = new Discord.Client({intents})

const statuses = [
    () => "Bot developed by Sfzerrr", 
    () => "bot in v14", 
    () => "Takumo your guide", 
    () => "Sfzerrr", 
    () => "trop bien", 
    () => "jsp"
]
let i = 0
setInterval(() => {
    Client.user.setActivity(statuses[i](), { type: Discord.ActivityType.Watching })
    i = ++i % statuses.length
}, 1e4)
