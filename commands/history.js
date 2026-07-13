const history = require("../data/history.json");

module.exports = (app) => {
   app.command ("/akyldash-history", async( {ack, respond}) => {
      await ack();
      const historyIndex = Math.floor(Math.random()*history.length);
      const historyH = history[historyIndex];
      await respond(` *${historyH.year}* ${historyH.event}`);
   });

}