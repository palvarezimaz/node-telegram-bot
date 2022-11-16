# Pablo_Bot

A bot you can trust!

Add it to your Telegram chat list using:
t.me/TrueMetalPabluBot

## Project description:

This little project is a Telegram Bot in node that runs in Firebase and is hosted on Google Cloud. The objective is to explore all these technologies while creating a product that would be useful for myself.

I would like to give the Bot a couple of functionalities:

- Give me the weather (this works now)
- Give me the current time at a specific location
- Send me a 'reminder message' that I can manually setup, i.e 'remind me of x in x minutes on on x date'
- Be a chat companion (return good quotes, or just good for a chat)

### Current issues

1. The main difficulty I'm facing is that the Bot seems to go to sleep after a while and it doesn't wake up unless I redeploy. I feel that I know why it's happening but I still need to go over the documentation.

2. I initially set up the firebase on Typescript, but then I ran into some problems with the compiler (just a local misconfig on the laptop I'm using for this) so I started to code directly on the JS file. Firebase still runs the code through ESLINT (does it always do it or it's because of the initial typescript?).

Therefore, the file tree is a little sloppy. I plan to fix it when my laptop situation improves in a couple of weeks - And you will see this text anymore)

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
