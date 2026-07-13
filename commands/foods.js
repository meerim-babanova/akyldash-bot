const foods = require("../data/foods.json");

module.exports = (app) => {

   app.command("/akyldash-foods", async ({ ack, respond }) => {
   await ack();
   const randomIndex = Math.floor(Math.random() * foods.length);
   const food = foods[randomIndex];
   await respond(`🍲 *${food.name}* ${food.description}`);

   });

};