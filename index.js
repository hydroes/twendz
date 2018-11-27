require('dotenv').config();
const tw = require('./libs/tweets');
const io = require('socket.io')(3000);

tw.track('socket.io');
tw.track('javascript');

tw.on('tweet', tweet => {
  console.log('tweet received', tweet);
});
