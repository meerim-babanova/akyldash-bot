const mountains = require("../data/mountains.json");

module.exports = (app) => {
   app.command("/akyldash-mountains", async({ack, respond})=>{
      await ack();
      const MountainIndex = Math.floor(Math.random()*mountains.length);
      const mountain = mountains[MountainIndex];
      await respond(`${mountain.name} ${mountain.height}`);
   });
};