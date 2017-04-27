//var  Constants =require( './constants');
const Application = require('./slackbot_setup');
const _ = require('lodash');
const config = require('./config')

var StreetHawkBot = Application.getBotInstance();
console.log(StreetHawkBot);
//console.log(Constants);
StreetHawkBot.on('start',()=>{
    //StreetHawkBot.postMessageToChannel('bot_legion','Starting up');
    StreetHawkBot.postMessageToUser(config.OwnerSlackName,'Hi there this is the Bot working in ');
});
StreetHawkBot.on('stop',()=>{
    StreetHawkBot.postMessageToUser(config.OwnerSlackName,'See you sailor');
});
function getMessageResponse(message) {
    console.log(_.includes(message,'Do you copy') ?  'I totally do' :  'I am sorry But I do not understand you yet');
    return _.includes(message,'Do you copy') ?  'I totally do' :  'I am sorry But I do not understand you yet';
}
StreetHawkBot.on('message',(event)=>{
    console.log(_.includes(event.text,'@`${config.BotUserId}`'),'`${config.BotUserId}`');
    if((_.isMatch(event,{'type': 'message'})) && _.includes(event.text,'@'+config.BotUserId)){
        console.log('Entered if ', event);
        StreetHawkBot.postMessage(event.channel? event.channel: event.user,getMessageResponse(event.text));
    }


})