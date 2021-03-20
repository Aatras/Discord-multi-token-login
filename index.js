const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./tokens.json')

/*
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
*/

client.on("ready", () => {
    
  })

  for (const token of auth.Tokens) {
    const client = new Discord.Client()
    client.on('ready', () => {
        console.log(`${client.user.tag} hazır!`)
        console.log(`${client.user.tag} adlı botun ID'si: ${client.user.id}`)
        client.channels.get("790562550663741448").join().then(console.log(`${client.user.tag} sesli kanalına giriş yaptı.`));
    })
    client.login(token)
}

//client.login('token');