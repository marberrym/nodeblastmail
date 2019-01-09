//email logic.
const nodemailer = require('nodemailer');
const csv = require('csvtojson/v1');
const schedule = require('node-schedule');
const template = require('./template.js');
require('dotenv').config();

console.log(process.env.account);
console.log(process.env.pw);

const account = {
    user: process.env.account,
    pass: process.env.pw
}

var mailBlaster = nodemailer.createTransport({
   pool: true,
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: account 
}) 