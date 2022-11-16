const functions = require('firebase-functions');
const {Telegraf} = require('telegraf');
const fetch = require('node-fetch');

let config = require('./env.json');
let city;
// Weather
async function getGeocoding(city) {
  const cityData = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${config.service.open_cage_key}&language=en&pretty=1&limit=1`)
      .then((res) => res.json());
  const cityGeoTagLat = cityData.results[0].geometry.lat;
  const cityGeoTagLong = cityData.results[0].geometry.lng;
  const cityFlag = cityData.results[0].annotations.flag;
  const cityCountry = cityData.results[0].components['ISO_3166-1_alpha-2'];
  const cityName = cityData.results[0].components.city;
  const cityInfo = [
    cityGeoTagLat,
    cityGeoTagLong,
    cityFlag,
    cityCountry,
    cityName,
  ];
  return cityInfo;
}

// Weather
async function getWeather(cityInfo) {
  const cityWeather = await fetch(`
  https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo[0]}&lon=${cityInfo[1]}&appid=${config.service.open_weather_key}&units=metric`)
      .then((res) => res.json());
  const cityTemp = cityWeather.main.temp;
  return cityTemp;
}
//
// getGeocoding()
//     .then((cityInfo) => cityInfo)
//     .then((cityInfo) =>
//       getWeather(cityInfo).then((cityTemp) => {
//         return {cityTemp, cityInfo};
//         // console.log(`${cityInfo[4]}, ${cityInfo[3]}(${cityInfo[2]}) is currently ${cityTemp}`);
//       }));

// Prod or Dev
if (Object.keys(functions.config()).length) {
  config = functions.config();
}


// Bot
const bot = new Telegraf(config.service.telegram_key);
bot.start((ctx) => ctx.reply(`Welcome to Pablo_bot. Let's do it!\n
You can check the local weather (type 'local')\n
Any other city weather (type the city name)\n
Or do something else\n
`));
bot.help((ctx) => ctx.reply('Not much else to do...'));

bot.on('text', (ctx) => {
  city = ctx.update.message.text;
  if (city === 'local') {
    city = 'Buenos Aires';
  }

  getGeocoding(city)
      .then((cityInfo) => cityInfo)
      .then((cityInfo) =>
        getWeather(cityInfo).then((cityTemp) => {
          return ctx.reply(`${cityInfo[4]}, ${cityInfo[3]}(${cityInfo[2]}) is currently ${cityTemp}`);
        }));
});
// bot.hears('1', (ctx) => ctx.reply(`For local weather, type 'Local', else, type 'Somewhere else'`));
// bot.hears('Local', (ctx) => {
//   getGeocoding()
//       .then((cityInfo) => cityInfo)
//       .then((cityInfo) =>
//         getWeather(cityInfo).then((cityTemp) => {
//           return ctx.reply(`${cityInfo[4]}, ${cityInfo[3]}(${cityInfo[2]}) is currently ${cityTemp}`);
//         }));
// });

bot.hears('Somewhere else', (ctx) => ctx.reply('Write the name of the city you want to check'));

// Do something else
bot.hears('2', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  response.send('Hello from Pablo_bot (running on Firebase)!');
});
