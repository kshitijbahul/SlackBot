//var exports = module.exports = {};
const SlackBot = require('slackbots');

//Initialize my SlackBot

const streethawk = new SlackBot({
    token: 'xoxb-172988284835-BBoMFR1tiqhpvFlqwcPdsm78',
    name: 'Streethawk'
});

exports.getBotInstance =function(){
    return streethawk
}

/*module.exports ={
    getBotInstance
};*/