const askMoonPhase = require('./askMoonPhase');
const catchError = require('./catchError');
const InvalidValueError = require('./Error');

start();

function start () {
  try {
    askMoonPhase();
  }
  catch (err) {
    if (err instanceof InvalidValueError) {
      process.stdout.write("\r\n" + err.name + ": " + err.message + "\r\n");
      start();
    }
    else catchError(err);
  }
}