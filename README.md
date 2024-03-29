# react-native-drawernavigator
This is sample drawernavigator template using react native 0.60 (can be used too in 0.59)

I'm using node version 12.4.0 w/ npm version 6.10.0 under Mac Os Mojave 10.14.5

First is build react native project with: 

    react-native init <project-name>

example : 

    react-native init drawernavigator


After install step into your project folder then install react-navigation (reference : https://reactnavigation.org/docs/en/getting-started.html)

I simplified the installation, here is it : 

### You must install react-native-gesture-handler along with react-navigation

    npm install react-navigation --save 
    npm install react-native-gesture-handler --save
    react-native link react-native-gesture-handler


## (IF YOU PICK REACT NATIVE UNDER 0.60 STOP RIGHT HERE AND CONTINUE ON ADDITIONAL GESTURE HANDLER SETTINGS)


#### On ios (on project root folder) react native v0.60

    cd ios
    pod install


#### On android (on project root folder) react native v0.60

Create this file in root directory => react-native.config.js

    module.exports = { 
        dependencies: { 
            'react-native-gesture-handler': { 
                platforms: { 
                    ios: null, 
                }, 
            }, 
        }, 
    };


Add jetifier to your project

    npm install jetifier --save-dev

Add this code on package.json under “lint”: “xxx”

    "postinstall": "npx jetify"

On your root project execute

    npm install
    
    
## (IF YOU PICK REACT NATIVE UNDER 0.60 CONTINUE HERE)


#### Additional on gesture handle must do (if not do this, your drawer can’t close when press on outside the drawer)
Reference : https://reactnavigation.org/docs/en/getting-started.html#installation

To finalise installation of react-native-gesture-handler for Android, be sure to make the necessary modifications to MainActivity.java:


    package com.drawernavigator;

    import com.facebook.react.ReactActivity;

    // add gesture handle
    import com.facebook.react.ReactActivityDelegate;
    import com.facebook.react.ReactRootView;
    import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

    public class MainActivity extends ReactActivity {

        /**
         * Returns the name of the main component registered from JavaScript. This is
         * used to schedule rendering of the component.
         */
        @Override
        protected String getMainComponentName() {
            return "drawernavigator";
        }

        // add gesture handle
        @Override
        protected ReactActivityDelegate createReactActivityDelegate() {
            return new ReactActivityDelegate(this, getMainComponentName()) {
                @Override
                protected ReactRootView createRootView() {
                    return new RNGestureHandlerEnabledRootView(MainActivity.this);
                }
            };
        }
    }


### Using this template

Clone this git, then copy paste it on your project root folder
