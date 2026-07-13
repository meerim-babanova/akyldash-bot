const lakes = require("../data/lakes.json");

module.exports = (app) => {
   app.command("/akyldash-lakes", async(ack, repsond) => {
      await ack();
      const LakesIndex = Math.floor(Math.random()*lakes.length);
      const lake = lakes[LakesIndex];
      await respond(`${lake.name}, ${lake.elevation}, ${lake.description}`);
   });
};