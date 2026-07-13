const kyrgyz_phrases = require("../data/kyrgyz_phrases.json");

module.exports = (app) => {
   app.command("/akyldash-phrases", async({ack, respond}) => {
      await ack();
      const phrase = Math.floor(Math.random()*kyrgyz_phrases.length);
      const RandomPhrase = kyrgyz_phrases[phrase];
      await respond(` ${RandomPhrase.kyrgyz}, ${RandomPhrase.english}, ${RandomPhrase.pronunciation}`);
   });
};