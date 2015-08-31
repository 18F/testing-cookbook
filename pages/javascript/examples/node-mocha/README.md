---
title: Mocha in Node
permalink: /javascript/node-mocha/
parent: JavaScript testing
---
This directory provides a simple example of writing unit tests for [Mocha](http://mochajs.com) in [Node](https://nodejs.org/).

Here's what we did:

1. The API that we want to test, a simple JavaScript class called `Gadget`, is defined in `gadget.js`.
2. Mocha looks for tests in `test/*.js`, so we wrote our unit tests in `test/index.js`.
3. We ran `npm init` to create a `package.json` with the default values.
4. We added `mocha` to the development dependencies with `npm install --save-dev mocha`.
5. We update `package.json` and change the `scripts.test` value to simply `mocha`.

To execute the tests, you'll need to have a clone of the repo, then `cd` to this directory and run:

```sh
npm install --dev
```

This will install the development dependencies (just `mocha` in this case) into the `node_modules` directory locally (which, thanks to our `.gitignore`, will be ignored by git). Then you can run the tests with:

```sh
npm test
```

Behind the scenes, npm checks `package.json` for `scripts.test` and runs that command. Thankfully, npm updates its `$PATH` to include `./node_modules/.bin`, which is where each installed dependency's `bin` scripts are aliased.
