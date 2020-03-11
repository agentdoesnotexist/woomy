const request = require('request')
exports.run = async (client, message) => {
  message.channel.startTyping();
  request({
    url: "http://inspirobot.me/api?generate=true"
  },
  function(error, res, body) {
    if(body.length > 0) {
      message.channel.send({
        files: [new Discord.MessageAttachment(body)]
      });
      message.channel.stopTyping();
    } else {
      message.channel.send('<:error:466995152976871434> API error, please retry.')
      message.channel.stopTyping();
    };
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["inspire"],
  permLevel: "User",
  requiredPerms: []
};

exports.help = {
  name: "inspirobot",
  category: "Fun",
  description: "Returns an inspirational message generated by inspirobot.",
  usage: "inspirobot"
};
