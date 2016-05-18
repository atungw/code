###Requirements:
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