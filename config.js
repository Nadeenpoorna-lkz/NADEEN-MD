const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "005kFILY#5wxJ56azbXmWxMpfh6wMTt0N018S0wpLsnLmDmOf2vw", //put your session id
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
MODE: process.env.MODE || "private", //private | public | groups | inbox
STATUES_REPLY: process.env.STATUES_REPLY || "true", //true or false
AUTO_REACT: process.env.AUTO_REACT || "true", //true or false
INBOX_BLOCK: process.env.INBOX_BLOCK || "false", //true or false
READ_MESSAGE: process.env.READ_MESSAGE || "false", //true or false
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true", //true or false
AUTO_TYPING: process.env.AUTO_TYPING || "false", //true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //true or false
AUTO_VOICE:"true" //true or false
};
