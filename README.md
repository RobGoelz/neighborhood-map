# FEND MyReads Project (Project 6)
===============================
## Table of Contents

* [Running](#running)
* [Contribute!](#contributing)
* [Attributions](#attributions)
* [Contents](#contents)

### Running

Running this project locally requires NPM be installed on your machine. More details on how to install NPM can be found on the [Official NPM Website](https://docs.npmjs.com/getting-started/installing-node)

To get started, git clone or download and extract the zipped repo folder [from here](https://github.com/RobGoelz/myReads).

Once you are the project folder, and have NPM installed, you can:

* install all project dependencies with `npm install`
* start the development server with `npm start`

This will open a local server with a message like the following:

```
Compiled successfully!
The app is running at:
  http://localhost:3000/
```
Navigating to the localhost URL will allow you to view and interact with the website.

#### Required API Data
Furthermore, to run this project will require a:
* Google MAPS API key
* FourSquare Client/Secret

These should be stored in files named apikey.json, and foursquare.json
(respectively), and live in /src/data. The following syntax is needed:

**apikey.json:**
```
{
  "key": "YOUR KEY INSIDE THESE QUOTES"
}
```
**foursquare.json**
```
{
  "clientID": "YOUR CLIENT ID INSIDE THESE QUOTES",
  "clientSecret": "YOUR CLIENT SECRET INSIDE THESE QUOTES"
}
```

If you are unfamiliar with this process, please open an issue and I can work with you or provide these files on a limited basis.

#### Production Mode
This application is made to work offline currently. For details on how to run
the application in production mode, please see [NPM Run Build](#npm-run-build)

## Contributing

This repository is a fork of the the starter template for the final assessment project for Udacity's React Fundamentals course. Students were provided a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. This code is used by _all_ Udacity students

You are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project. The original Udacity starter code for this project without my changes can also be [found here](https://github.com/udacity/reactnd-project-myreads-starter)

I have heavily modified the App.js file, separating out components into individual .JS files for modularity and compartmentalization of components. This is per the recommendations of Doug Brown's walthrough for this project, which is in the attributions section below.

I welcome constructive criticism or help to make this program better! For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Attributions
* [TylerMcGinnis React BootCamp- April 2018](https://www.youtube.com/playlist?list=PLr-qxVPM5Sc6xYYjPskP5Bn_TIuvFrkeS)
* [Doug Brown's YouTube Walkthrough - Proj 6 ](https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be)
(lots of carry over into Proj 7)
* [Doug Brown's YouTube Walkthrough - Proj 7 ](https://www.youtube.com/watch?v=NVAVLCJwAAo&feature=youtu.be)
* [Google Maps API Course](https://www.udacity.com/course/google-maps-apis--ud864)
* [Crossed Rifle Favicon](https://myelitedetail.us/clipart/rifle-clipart-musket_1461157.html)
* [Favicon Generator](https://www.favicongenerator.com/)
* [Closing Tags in ReactJS](https://stackoverflow.com/questions/30852751/expected-corresponding-jsx-closing-tag-for-input-reactjs)
* [JSON Parser](http://json.parser.online.fr/)
* [Safely Storing API Keys](https://blog.revolutionanalytics.com/2015/11/how-to-store-and-use-authentication-details-with-r.html)
* [Custom Map Style via JSON](https://stackoverflow.com/questions/34991638/google-map-react-custom-skins)
* [Storing JSON in const](https://tomchentw.github.io/react-google-maps/#/basics/styled-map?_k=5el6q8)
* [Calling Custom Styles in google-maps-react](https://github.com/fullstackreact/google-maps-react/issues/28)
* [Font Awesome Introduction](https://www.w3schools.com/icons/fontawesome_icons_intro.asp)
* [Aria Roles - Search Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role)
* [Migration to typography 2](https://material-ui.com/style/typography/#migration-to-typography-v2)
* [Material UI Themes](https://material-ui.com/customization/themes/#typography)
* [Material MuiThemeProvider](https://material-ui.com/customization/themes/#muithemeprovider)

## Contents
```bash
├── README.md - This file.
├── CONTRIBUTING.md - File containing information on project contribution.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # Project icon - crossed muskets for Morgantown!
│   ├── manifest.json # Provided with Create React App.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for this app, initial content from ud864 - see attributions
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    └── components # Separate folder for React component separation
    │   ├── Container.js # Component used for loading Google API
    │   ├── Options.js # Component containing map modification options
    ├── index.css # Global styles. You may change if you wish.
    └── index.js # You should not need to modify this file; it is used for DOM rendering only.
    └── serviceWorker.js # Provided with Create React App.
```

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
