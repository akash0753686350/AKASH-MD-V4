const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0szNlRLaHRPQ096RFp3V1AzRk5OS3I5K2k1VVgwMTBlbXlHUXkxS08wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHBPQ2luTE9kNkpPL01JdTgvUStPZ0hmZG5Ta29HM0YwanBPc0ZuQ3huYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTnZlZ0RDU0UwSVlGL0NHZURkSmRtc1FsOEpDZStQUVFoZXQ3ZHhybDM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvNTRTTHdiQVVzbnY4MlZXZUwyMnpYa3dwRG1ESDRJaEhrNTM0Z2JCc2tzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLaTdnN2hiMG1xRlpySDhPN21QVnNoSmc5VHZQMi9NanZXcFpZNUdVMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdxZGo2S0pPQWFpTVY5Y2RMaDBKWjZaZ01rMjJnM3BCVTB4K05mTnJ3eDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBaN1ZlRW8wTGlHNkYvdFNBTVZFYXMyeTRhLzJpRmNqWGFqWXZmM1MwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGFyMERJODdEaFkwTk9tVHJUQ1dGbEI1UGNxdm9xYThxQ01zK2VTQVV3TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRZakFzV3lvQkh4OFVkdXpHRE9Bemt5TnFaVkZ1ZTBxaWdSMVFpT3hOUnZTNFFzTllHK0V6bnRSbVdNWThUeXJPeUtsUUJ5OVk1K0NrMlJXVUN5TWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiI0dlVoUk9IcEUxSDcwMThUbGRldjJacFNoNExPT1pUd3lybnJJY3FvRE9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI0RUVOWTcyRiIsIm1lIjp7ImlkIjoiOTQ3NTM2ODYzNTA6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBa2FzaCIsImxpZCI6IjE3MjQwMzM0Mjk5Mjk2OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaXN0NkFDRUlUdjhNUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJreWdNUGIyVFBzTHI1WXBpd1o1TVZPL0tadEx6OVByL1JUM1hSSTJpUWdnPSIsImFjY291bnRTaWduYXR1cmUiOiIvTXdCZ29aU3hJUlFnMy9RdTRVTkxpZUF0dW1NKzVMY0hadG5kM21VaEdvcXZ0YzhlOVlIeStWRlRJU25yT0Fzc0dOVmVNU3FRUGRXUS8yK3AvUFVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVFJaamlTQnc3OFF4a3BqWVE0NERDOUR1Mmh5OWNYQWFkeTQxczlOWTl6amlvQlV3SFJNZUhNc3hPMU01aXJ0dmtGaXdhVUUxRDF0VDZJRmNFamJXaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MzY4NjM1MDo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpNb0REMjlrejdDNitXS1lzR2VURlR2eW1iUzgvVDYvMFU5MTBTTm9rSUkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTA2ODI5NCwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY AKASH-MD-V4 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5rujjj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "AKASH-MD-V4",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "AKASH-MD-V4",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94753686350",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Akash-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Akash-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5rujjj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94753686350",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
