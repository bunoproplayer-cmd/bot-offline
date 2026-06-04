const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ]
});

// COLE O TOKEN ENTRE AS ASPAS
const TOKEN = process.env.TOKEN;

// COLE O ID DO SEU AMIGO ENTRE AS ASPAS
const ALVO_ID = '972576680243765268';

let contador = 0;

client.on('ready', () => {
    console.log(`Bot ligado como ${client.user.tag}`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
    if (!newPresence) return;

    if (newPresence.userId !== ALVO_ID) return;

    const antigo = oldPresence?.status;
    const novo = newPresence?.status;

if (antigo !== 'offline' && novo === 'offline') {
    contador++;

    console.log(
        `${newPresence.user.tag} ficou offline ${contador} vezes`
    );

    const canal = client.channels.cache.get('1511849239750381619');

    if (canal) {
        canal.send(
            `🚨 ${newPresence.user.username} ficou offline pela ${contador}ª vez!`
        );
    }
}
});
client.login(TOKEN);