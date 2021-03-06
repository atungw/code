###Requirements
 - **Node >= 5.10.1** 
 Should work with Node versions >=5.10.1 because of Babel requirements for ES6, but only tested on Node 6.10. See https://www.npmjs.com/package/babel-preset-node5 for relevant information. Only tested on OS X, but it should work without problems on machines running *NIX (and maybe even Windows)
 
###Instructions

From the same folder level as `README.md`, run the following command:
``` 
	npm install
```

Once NPM has finished installing the modules, you should be able to start the `webpack-dev-server` by running:

```
	npm run dev
```
Once the `15ms emit` line appears on the screen, the application should be visible from your browser at

http://localhost:8080

###Known Bugs
- Single signon doesn't work with Block third-party cookies and site data checked in Chrome. (Took me awhile to figure out why it wasn't working.)

- Currently the widget is assumed to load before the play command is issued. In some cases, the user may select a track before the widget is ready, to fix this, we'll need to bind the `play` command to SoundCloud player to only fire after the `SC.Widget.Events.READY` event.