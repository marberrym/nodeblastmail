//email logic.
const nodemailer = require('nodemailer');
const csv = require('csvtojson/v1');
const schedule = require('node-schedule');
const template = require('./template.js');

let testList = './csvFiles/test.csv';
let sendList = [];
let sendCount = 0;


require('dotenv').config();

console.log(process.env.account);
console.log(process.env.pw);
console.log(testList);



const account = {
    user: process.env.account,
    pass: process.env.pw
}

var transporter = nodemailer.createTransport({
   pool: true,
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: account 
})

function msgSend(env) {
    console.log(env);
    let body = template.plainText(env).toString();
    console.log('body:');
    console.log(body);
}

function get_list() {
    csv().fromFile(testList)
    .on('json', (jsonObj) => {
        console.log(jsonObj);
        console.log(jsonObj.address);
        sendList.push(jsonObj);
        msgSend(jsonObj);
    })
    .on('done', () => {
        console.log('done');
        // msgDelay();
        
    })
}

function msgDelay() {
    var message_job = schedule.scheduleJob('10******', () => {
        console.log(sendList[sendCount]);
        msgSend(sendList[sendCount]);
        if (sendCount < sendList.length) {
            sendCount++;
        } else if (sendCount >= sendList.length) {
            message_job.cancel();
        }
    })
}

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to accept messages');
        get_list();
    }
})