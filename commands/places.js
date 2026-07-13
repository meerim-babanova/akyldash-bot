const places = require("../data/places.json");

module.exports = (app) => {
   app.command("/akyldash-places", async ({ ack, respond }) => {
   await ack();
   const randomIndex = Math.floor(Math.random() * places.length);
   const place = places[randomIndex];
   await respond(`🏔️ *${place.name}* ${place.description}`);
   });
};