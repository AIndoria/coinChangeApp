![Photo of Coin Changer Application](https://i.imgur.com/0fQqHgs.png)

# COIN CHANGE COUNTER

Hello. Thanks for dropping by. Below you'll find the documentation to run this app, and a few other tidbits I thought to include. This application was created with React, and ExpressJS.

## Clone and Install

You can clone this repository via either HTTPS or SSH, depending on your preference:

> HTTPS: `https://github.com/AIndoria/coinChangeApp.git`

> SSH: `git clone git@github.com:AIndoria/coinChangeApp.git`

Once cloned, navigate to the `coinChangeApp` directory you just cloned, and run:

    npm install
    cd client && npm install

If everything's installed, you can start this application by using:

    npm run dev

I am using [concurrently](https://www.npmjs.com/package/concurrently) so it's a bit easier merging both `npm run server` and `cd client && npm start` commands in one go.

That's it! The client-side of the application should be running on https://localhost:3000, and the server should be up at https://localhost:4000. If you want to check the API requests, you can navigate to https://localhost:4000/api/sum

### Small Quibbles

- For values entered, the values have to be in the form of x, xx, .xx,
  x.xx, x or xx.xx. That means that 123.123123 will not
  work....obviously.

- This entire website was created in during one
  sleepless night. The algorithms used aren't the most efficient, and
  there might be code duplicity somewhere, although I could not find
  any during my cursory glance.

- I will be adding unit tests to this later, for my own usage. I have not added any such at the moment.

- The app is NOT responsive, at all. I will be making modifications later in the week to change that. For now, please use a desktop.

My dear friends were kind enough to provide some "Suggestions" on how to proceed. I got a good chuckle out of it. Hope you have too.

![enter image description here](https://i.imgur.com/kNJm7xV.png)
