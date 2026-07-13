const facts = require("../data/facts.json");

module.exports = (app) => {

   app.command("/akyldash-facts", async ({ ack, respond }) => {
   await ack();
   const randomIndex = Math.floor(Math.random() * facts.length);
   const randomFact = facts[randomIndex];
   await respond(`${randomFact.fact}`);

   });

};