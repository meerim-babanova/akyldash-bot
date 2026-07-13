const holidays = require("../data/holidays.json");

module.exports = (app) => {
   app.command("/akyldash-holidays", async({ack, respond}) => {
      await ack();
      const holidayIndex = Math.floor(Math.random()*holidays.length);
      const holiday = holidays[holidayIndex];
      await respond(`${holiday.name}, ${holiday.date}, ${holiday.description}`);
   });
};