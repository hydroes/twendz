const cfg = require('../config');
const tw = require('node-tweet-stream')(cfg.twitter);

tw.on('tweet', tweet => {
  console.log('tweet received', tweet);
});

tw.on('error', err => {
  console.log('Tweet stream error', err);
});

module.exports = tw;
