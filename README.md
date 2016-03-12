# Events & Atoms & Frontend, Oh My!

This is a little repo about events and reduxish state management.
It has been arranged so that you can switch out the toy implementations here
for the actual libraries.
Wherever you see a `require('./foo.js')` you should be able to `require('foo')`
(you may need to `npm install foo`).

## Events

Events are central to the programming model of javascript.
They are one of the best ways of keeping your code modular.
In `events.js` you will find a very barebones implementation of an event hub.

## Atoms

In redux, you keep all your state in a single atom.
The only way of updating that state is through dispatching actions.
The actions trigger a reducer that should be pure and return the new state.
In `redux.js` you will find a very barebones implementation of redux.

## Frontend

Given that we have a single consistent state in our app, we can render off it.
In libraries like `react` and `virtual-dom`
, a javascript object represents the DOM.
A diffing algorithm computes the difference between the representations
and computes a small patch of DOM changes.
The diffing is also the approach taken by something like `morphdom`.
We're not doing any of that here.
We just wipe out the contents of a div and replace it.
This is probably reasonably fast up to quite large scales.
There are downsides to it though [TODO: Say what they are]
In `app.js` you will see a simple app using our redux-like file
without a DOM library.
You will need to bundle with entry point `app.js` and output `bundle.js`
for the index file to work.
If you have browserify installed globally you can `browserify app.js > bundle.js`.
If you have wzrd installed globally you can `wzrd app.js:bundle.js`.

## TODO

* Rewrite as a series of exercises
* Create a larger example app with subcomponents

