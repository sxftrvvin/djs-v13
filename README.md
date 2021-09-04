# Choose your brance!
- How to choose for my episode!
- To do so, click on the branch and choose your episode!
![end](https://i.imgur.com/qqKxhis.gif)
# Commands To Run
```
npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```
```
rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i
```
# package.json
```
"scripts": {
    "start": "node .",
    "node-update": "npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH",
    "node-clean": "rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i",
    "node-update-then-clean": "npm run node-update && npm run node-clean-cache",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```
 # .replit file
 ```
 run="npm start"
 ```
 # Commands To Run
```
npm uninstall discord.js && npm install discord.js
```
# index.js file
```
const Discord = require('discord.js')
const client = new Discord.Client(
  { intents: 32767 }
)

client.on('ready', async () => {
  console.log(`${client.user.username} has logged in.`)
})

client.login(process.env.token)
```
