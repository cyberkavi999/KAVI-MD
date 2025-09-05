const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "omkGBYha#H_p9I4U1kob9v-OLyZNBwQVuVHvTchtBePMDcrw3ugI", // session id  
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public", //public , groups , inbox , channel
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Cyber-kavi/BOT-DP/refs/heads/main/cyber%20kavi.png",  // පොටෝ url
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Cyber-kavi/BOT-DP/refs/heads/main/cyber%20kavi.png",  //පොටෝ url
ALIVE_MSG: process.env.ALIVE_MSG || "*😎 Hey How are you? 👻*\n\n*👊 KAVI-MD Whatsapp Bot Alive Now...!*\n\n> *ᴘᴏᴡᴇʀᴅ ʙʏ  KAVISHKA DILSHAN : )*",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", // true හෝ false
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94728810592", // ඔයාගෙ නම්බර් එක
OWNER_EMOJI: process.env.OWNER_EMOJI || "☠", // ඉමෝජි
BOT_NAME: process.env.BOT_NAME || "*KAVI-MD*", // බොට් නම
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO: process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
OWNER_NAME: process.env.OWNER_NAME || "Kavishka Dilshan", // නම
FOOTER: process.env.FOOTER || "> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ KAVISHKA DILSHAN  👨‍💻*",
MOVIE_FOOTER: process.env.MOVIE_FOOTER || "> *Movie 🍃*", //Movie footer  
};
