# react-native-drawernavigator
This is sample drawernavigator template using react native 0.60

I'm using node version 12.4.0 w/ npm version 6.10.0 under Mac Os Mojave 10.14.5

First is build react native project with: 
> react-native init `<project-name>`

example : 

> react-native init drawernavigator


After install step into your project folder then install react-navigation (reference : https://reactnavigation.org/docs/en/getting-started.html)

I simplified the installation, here is it : 

### You must install react-native-gesture-handler along with react-navigation

> npm install react-navigation --save 

> npm install react-native-gesture-handler --save

> react-native link react-native-gesture-handler

#### On ios (on project root folder)

> cd ios

> pod install


#### On android (on project root folder)

Create this file in root directory => react-native.config.js

> module.exports = { 
    dependencies: { 
        'react-native-gesture-handler': { 
            platforms: { 
                ios: null, 
            }, 
        }, 
    }, 
};


Add jetifier to your project

> npm install jetifier --save-dev

Add this code on package.json under “lint”: “xxx”

> "postinstall": "npx jetify"

On your root project execute

> npm install on root project



### Using this template

Clone this git, then copy paste it on your project root folder
