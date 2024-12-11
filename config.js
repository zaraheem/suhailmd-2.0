const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349011999814";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  ||"false";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "false";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_02_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg3LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVnc0clF2Tyt1MjdoRDcydWQ1NUpQUFRVb2txMVZiVmtJZklQR0lhZkFnVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic085c2RMRnRRaE8yY0RDQ2RvZXpGd1wiLFxuICBcInBob25lSWRcIjogXCJiN2FlM2Y5OC0zNTYzLTQ2M2EtOWNiYy1iMjA2ZDAzM2E1YzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMTQ2LFxuICAgICAgMTQ5LFxuICAgICAgMTE1LFxuICAgICAgMTQyLFxuICAgICAgMTkxLFxuICAgICAgMTY2LFxuICAgICAgMzEsXG4gICAgICAxNDksXG4gICAgICAxMjYsXG4gICAgICA4NixcbiAgICAgIDIzMyxcbiAgICAgIDIzNyxcbiAgICAgIDYxLFxuICAgICAgMjExLFxuICAgICAgOTgsXG4gICAgICAxMzAsXG4gICAgICAxNTQsXG4gICAgICAyMzcsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAxMTYsXG4gICAgICA5LFxuICAgICAgMjgsXG4gICAgICA4NSxcbiAgICAgIDEyNCxcbiAgICAgIDEyOCxcbiAgICAgIDIxLFxuICAgICAgNCxcbiAgICAgIDEwNixcbiAgICAgIDE3NCxcbiAgICAgIDI0NCxcbiAgICAgIDE2NCxcbiAgICAgIDExLFxuICAgICAgNjQsXG4gICAgICAxOTUsXG4gICAgICAxMTksXG4gICAgICAyNDQsXG4gICAgICAyMTIsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOOUFSR0JGR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMTk5OTgxNDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUG9wY29ybiBwYXJhZGlzZVwiLFxuICAgIFwibGlkXCI6IFwiMjM5OTYyNjc1MjgyNzQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRE95K0VCRUp2djVyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJTRFhISWFvVzlHWHNBRFJFZ08yS1hFVUdRZlpXWWIwZ2lxR3pjOUFFSFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSy9WMUJ2S0prSFZ0bVhwR3Rta21CS1g0TlorN05LRnQ1T2xtUGc0akVvNE9GR3JvMnBnNEsyV1V5MEJyTHVONDY3NFBRVDFObktFSXUwRUZpQWJBQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXVUOFYvc1B1WS9IWEVEOTFDRkp3OEhvVjRpYVA3RTI0d25zeGl2T0JHZzUzMkV5NEIvNGhCd014cXh1TUZnVGg0UDdVa3NVWldKbGp1VmF0NzZMRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMTk5OTgxNDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTMyOTU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
