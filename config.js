const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExZc2Izcnh2YU1TYXgwbjY0NlhzL3NGWU1IV2h6M0FIS0lCdXd2dCsyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWi90d0FIeC9oRjViKzhUS1BRTjVmS01PYjFpUHdYdW4zVWVmZWZBaEd6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRTE0b20yQmx1T2RvS2ZEVlpqWkU1RnI4RzRsRkNxUG16TFovVUQwTVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5enc0S3lpaVZFRmZXQ3g1SVhPQnZ2NlJBQVA4WS9mOUovMXJkbHhJTnlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPYlZQWS93bWxuc05rNU1EZEpHTTNzYk9PYmtwVDFOOEk5cWRIMHFZMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNYZUtnOENVVDNSU3dxVEZBcjFVZkZqV2QrZlRvT29OeTVBTmh3TlJKazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0psWEVnNG1SelppZUNCN0xTVW1uZFZyZi95KzBUc0xjVFdYWWZ4Q29Iaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGYwL0RCOU5kL1FIN2dGYzBncndrdkJhc0ovSUtubjR3ejJqOThLSENWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpTYU9sckRWTEt4WTUrcUZQVmRoQVJRYW5MbUl5MWozUnBaK3J1QzhZK2pObFdLOFkzQldSSklBbDdIMWQzWVlITmlPbEVqYTF4L0Z0SEdZQlJHMkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJZOFU2eS9qL3NubkdURE0yVmFoa096TWNHVDlHOGVGdk5odTBTaVFlM213PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJURTk5NllHUSIsIm1lIjp7ImlkIjoiOTQ3NTM2ODYzNTA6OTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWthc2gg76O/IiwibGlkIjoiMTcyNDAzMzQyOTkyOTY6OTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQU3N0NkFDRU9LbDBNUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJreWdNUGIyVFBzTHI1WXBpd1o1TVZPL0tadEx6OVByL1JUM1hSSTJpUWdnPSIsImFjY291bnRTaWduYXR1cmUiOiJSaGd3cVdscFppYkRaZjNwdmJWUlN4SDRhdWhNcEcrWlN0T3I3MmJVUWxFVVhSRUE5OE0rT3piSnRzbGZub0tRRGVWMlo2Ky9oV3NKbWFKMmFUNkpCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZHhFMU1tQU9sNVVybllpTWJjRXdWZEMyYkdCaUpZRFFQeHJzYVk3YmJDNnZYUG9rRWd3VWVaMml5WVdhaGZNbFhDOTBhbnFxNUZmNWgvRGVFSjlDQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MzY4NjM1MDo5NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaTW9ERDI5a3o3QzYrV0tZc0dlVEZUdnltYlM4L1Q2LzBVOTEwU05va0lJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ1MzQ2MjgsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
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
