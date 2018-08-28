const Discord = require("discord.js")
const prefix = require("../../data/config.json").prefix
const embedMaker = require("../../modules/embed")
const query = require("../../modules/query")
const fetch = require('node-fetch');
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return embedMaker.command(message)

    let streamer = args[0]
    
    query.select("streamers", {guildID: message.guild.id, streamerName: streamer}, result => {
        if(!result) {
            return embedMaker.message(message, `${streamer} isn't on the list`)
        }
        query.delete("streamers", {guildID: messasge.guild.id, streamerName: streamer})
        return embedMaker.message(message, `Removed ${streamer} from the list`)
    })
}

module.exports.help = {
    name: "addstreamer",
    description: "Add a streamer to the announcement list",
    usage: `${prefix}addstreamer [channel]`,
    examples: [`${prefix}addstreamer tartzzz`]
}

module.exports.conf = {
    enabled: true,
    aliases: [],
    cooldown: "3 Seconds"
  };