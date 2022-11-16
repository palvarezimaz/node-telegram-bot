# Pablo_Bot

A bot you can trust!

## Installation requirements

## Firebase installation

1. Register a Firebase account
2. Install firebase
   npm i firebase-tools -g
3. Login
   firebase login
   and follow instructions

4. Setup Cloud Functions
   a. create a folder for the project
   b. firebase init functions
   follow instructions

## Telegraf bot

1. Install telegraf.js
   npm i telegraf

2. Get your own Telegram bot Key at BotFather

## Weather related installations

Due to version conflicts, I've installed an older version of node-fetch
npm i node-fetch@2.6.1

Get your api keys at:
https://opencagedata.com/api
https://openweathermap.org/api

### Enviromnental Variables

In this project, I am using Firebase CLI commands to store env variables. Refer to the documentation for more info (https://firebase.google.com/docs/functions/config-env)

firebase functions:config:set service.telegram_key="[PASTE API KEY HERE]"

To check the current keys:
firebase functions:config:get

Cope the return content on a env.json file, to be created inside the functions folder.

## How to run it

1. Locally - for Development
   firebase serve

2. Deployment
   firebase deploy --only functions

## How to run
