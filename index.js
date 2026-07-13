const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

require("./commands/facts")(app);
require("./commands/places")(app);
require("./commands/foods")(app);
require("./commands/history")(app);
require("./commands/lakes")(app);
require("./commands/mountains")(app);
require("./commands/kyrgyz_phrases")(app);
require("./commands/holidays")(app);


app.command("/akyldash-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`🤖 Akyldash Commands:
/akyldash-facts - gives random facts about Kyrgyzstan!,
/akyldash-places - gives information about random place in Kyrgyzstan!,
/akyldash-foods - gives information about Kyrgyz national food!,
/akyldash-lakes - gives information about lakes in Kyrgyzstan!,
/akyldash-mountains - gives information about mountains in Kyrgyzstan!,
/akyldash-holidays - gives information about Kyrgyz holidays!,
/akyldash-history - gives information about a random Kyrgyz history event!,
/akyldash-phrases - gives random kyrgyz phrases!,
/akyldash-help - gives information about all the available Akyldash commands!`
  });
});

(async () => {
  await app.start();
  console.log("Akyldash is running!");
})();







// const axios = require("axios");
// require("dotenv").config();

// const { App } = require("@slack/bolt");

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN,
//   appToken: process.env.SLACK_APP_TOKEN,
//   socketMode: true
// });

// app.command("/akyldash-ping", async ({ command, ack, respond }) => {
//   const start = Date.now();
//   await ack();
//   const latency = Date.now() - start;
//   await respond({ text: `Pong!\nAkyldash is online\nLatency: ${latency}ms` });
// });

// (async () => {
//   await app.start();
//   console.log("bot is running!");
// })();



// app.command("/akyldash-catfact", async ({ ack, respond }) => {
//   await ack();

//   try {
//     const response = await axios.get("https://catfact.ninja/fact");
//     await respond({ text: `Cat Fact:\n${response.data.fact}` });
//   } catch (err) {
//     await respond({ text: "Failed to fetch a cat fact." });
//   }
// });

// app.command("/akyldash-joke", async ({ ack, respond }) => {
//   await ack();

//   try {
//     const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
//     await respond({
//       text:
// `${response.data.setup}

// ${response.data.punchline}`
//     });
//   } catch (err) {
//     await respond({ text: "Failed to fetch a joke." });
//   }
// });


// const compliments = [
//   "You're awesome!",
//   "You're doing amazing!",
//   "Your code is beautiful.",
//   "You deserve a coffee ☕",
//   "If I was a poet, you would be my poem"
// ];

// app.command("/akyldash-compliment", async ({ ack, command, respond }) => {
//   await ack();

//   const message =
//     compliments[Math.floor(Math.random() * compliments.length)];

//   await respond(`${command.text} ${message}`);
// });


