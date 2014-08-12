Vocabulary Game
===============

## Rules

Constraints I had to operate under and more extensive explanation of the game can be found at [INSTRUCTIONS.md](INSTRUCTIONS.md)

## Brief Description

This is a simple language game, where user can learn new words (in this particular case, Spanish) just by playing the game over and over again. The game also comes with a 'High score' board where a user can try to beat his/her own record.


## How to play the game

```
git clone git@github.com:codepreneur/vocabulary-game.git
cd vocabulary-game
npm install
bower install
nodemon app.js
```

Then go to the browser and type `http://localhost:3000/home`

## Testing

There are two kinds of tests in the vocabulary game: Unit tests and End to End tests.

### Running Unit Tests

Vocabulary game comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which can be run with the [Karma Test Runner][karma]. Karma
configuration file to run them is provided.

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`

The easiest way to run the unit tests is to use this command (and then follow instructions in the terminal):

```
karma start test/karma.conf.js
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then in order to re-run the tests browser needs to be refreshed.


### End to end testing

Vocabulary game comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `test/protractor-conf.js`
* the end-to-end tests are found in `test/e2e/`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

For that vocabulary game uses local standalone Selenium Server to control browsers, therefore: 
```
webdriver-manager start
```

Then once the server has booted up, to run end-to-end test simply type:
```
protractor test/protractor-conf.js
```

This will execute the end-to-end tests against the application being hosted on the
development server (it needs to be running on port 3000).





[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io/1.3/introduction.html
[karma]: http://karma-runner.github.io
