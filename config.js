const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '919123737179'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'India'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "919123737179"
global.devs = '919123737179';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFYNnJ1enJKVTFabzVBWVQ3Z05Jekt4T0J3SDIzaU1vMlpHL0kxMTcxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWt5OFVzaGhtMkhHUngwdTIvZDE0Um1Md1dJMXJYWkZkOStEQnNVTStsVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSXdJY0NpYkFtSHVoOWIzYjFzeCtQVmdDS2p6T2JYZ3RQa1hySjFFSG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrcFRQS2JzM2xJM0x0cFN5WitRdTZvQjROM1FkK0dYNEhRaktjNkFCbW5nPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QbzRCdjdCTi8zSmpsWVdFdjhUVlByT3FBemptQXhYaS9LQlVkN003bHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo0Z0R6clhBQmp6RzFweHpkT3RrbGdwZ0tWcElid1lFbnR5d1MxWUNNRkU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZS9FZzhaRVM5L3J2elpUaCtiSHBFYmQwUXV2bGg4TDdtcGpMS2RWZERXSnR2ZHI1cndCOTVETkJ4bEl5cjZyZDR1MjUvSlhiUGpURWxCcXdyRkxBZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4NCwiYWR2U2VjcmV0S2V5IjoiRzljOTFEOSt2dThScnN1RDVkMVpLTUluMG1QeGVlOTVpbFp0RFEyMEFlMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTgyNzY4MDI4ODdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEU3RjdENzQ5REY2NjE1QTdGQzIxMDUyQTFFMkUxREUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwMzIzODEwOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4Mjc2ODAyODg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJFRjgyREYyRTkwNjZCNTBCRkFENDJEMjM3QTJFRUJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDMyMzgxMDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRHSkRfWjZtUmYybGRwWVZobUl0bXciLCJwaG9uZUlkIjoiOGE2OWNlMDEtMDViYy00NjUyLWE2MTgtOGNjNjlhZGVmZDQ3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB2WWdxK3Z5eDA3THdXcjR6amRhSDliZ29KMD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWI0MmNtdy9JZVg0R1U2eFRuVXpKYXREWmVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlTMFpzQkVObXpsYXdHR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkZExsejRwdFlZWEV1dituVHRreVZFZVM3YjJabmhybTFhYVNWd3draWlrPSIsImFjY291bnRTaWduYXR1cmUiOiJ5VGFVQ0trRzIzMDBkVVVkUG9LaDduTDhOeHp6QnQxVEZuejMvbmRTZmN5U3piSWZhZlpiUU92RnBzSEpFcmFyWWx0c1EyZVJXNGtJbngzZGt1TDdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOFFmN2YzYVRhZkV4UUl1cCtwNGdIN1cxSlFEOTNGMDgyK1F6bk1WakN3N0EzeG53eHNHZUZ4eFkvclVjL3FoQ0RQeGozZGhqN283VCs1UldQMVhNQmc9PSJ9LCJtZSI6eyJpZCI6IjkxODI3NjgwMjg4Nzo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuCmuOCngeCmruCmv+CmpCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTgyNzY4MDI4ODc6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYWFM1YytLYldHRnhMci9wMDdaTWxSSGt1MjltWjRhNXRXbWtsY01KSW9wIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzMjM4MTA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVraCJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '❛❥༊𝗦𝗨𝗠𝗜𝗧༆𝗕𝗢𝗧𝘇 𝗜𝗡𝗖༊❥',
  packname:  process.env.PACK_NAME || 'MADE BY ❛❥༊𝗦𝗨𝗠𝗜𝗧༆𝗕𝗢𝗧𝘇 𝗜𝗡𝗖༊❥',
  
  botname:   process.env.BOT_NAME === undefined ? "❛❥༊𝗦𝗨𝗠𝗜𝗧༆𝗕𝗢𝗧𝘇" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '❛❥༊𝗦𝗨𝗠𝗜𝗧༆𝗕𝗢𝗧𝘇 𝗜𝗡𝗖༊❥' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
