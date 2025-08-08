const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJCVDBaNm9QMFJJOUw5RlIvZ2tPMThmOHZ2dHpxYTdMTGZtdzRpY3cyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01lamdOelYrYXBValMrYTZ3c2lRa0Y4OXI2S1o5d2x1RFNhQUJYdmZCbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTHk2OEhNMEZ0U0dES2dyYm81WHJxQW5UTTYzVjFQK0lBOVQrTnJxTlVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTGhzaDE0UVFBK3ArbE5vS2ZhTm8xU2NGcnl6UzBQb3o0c1ArTC84bzJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHdTJvR3R3VkkwK1FMcnJITmJxalBNV3RtL0JqVStLdStNbHpGc3lBMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl2Z2xRSkR3aEkyWmw2NE5OS2c4NTJyZDY2N2g5ZngxVmhkaVdsL0FUQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUsrZkdLRUQwVXN3N3FMcXdpWVduTDhQVHYxd0tzWU03MnhqWnRNOVNXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDdNYm5oakh1aVYxR1d2b2tRemViOFZDamt1UndzbnRPSm1oSDZzRHZnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVQYURMMWNyek1hRjBsWUNtZ21VWjNKSERkdWFuTnhKM05XbVh5ZkNoK2o1MVZITlRiVDJGeEhnMys2NDNHMklxWkNJbU5jT0ZrQ2RyaytZYjNqdWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6InFtTkhOMUJJejErVW91WDNNbVU0S3dvSExJd3NqbzBDa205MmRwejBiVHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTM1NjE3NjM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZEM0U0OThCREI5M0JERTczNTFDQTc5RjQ1MTgzMkE2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ2MzM5Nzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzNTYxNzYzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQzI4ODlBM0ZENTYwN0RFRDZFMzVGOTk2RUUwMzU4RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NjMzOTc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJWVlRUV0xRMyIsIm1lIjp7ImlkIjoiOTIzMTM1NjE3NjM3OjUyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTMyMDM2MzU0NDM3MTQ0OjUyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkhlN3VnR0VQT3Qxc1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTXVnaHJDQmQ3VmFScmllMGE5cnliVTRoVUJKQ1UxR2N4cEVvUkM5dlcwRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMitYM1VteUN4UFpNOUQ1d1NXRDhFS2JaRk9oRzFrSVhVdEhLVUxmZysxNVAxMmVRZ2pqKzY3MGczTDhCbytKbzVaMnZrVjRxS3lWUDlDVEM5OS9CQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkZ0K2l4eThCNXUzTG82Q3dkL2wzYXZiL2RnZVZxblpuaVZUb1drT1QzK0o4MEpwUlNzVEZVWS9Zc05jWjIrTTRQOStYdWZONndqQ1lHNUFNVldqUmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTM1NjE3NjM3OjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRMb0lhd2dYZTFXa2E0bnRHdmE4bTFPSVZBU1FsTlJuTWFSS0VRdmIxdEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDYzMzk3NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPa1gifQ==",
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
