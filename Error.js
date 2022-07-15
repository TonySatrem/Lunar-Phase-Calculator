class InvalidValueError extends Error {
  constructor (message) {
    super();
    this.name = "InvalidValueError";

    if (!message) this.message = "invalid value was received";
    else this.message = message;
  }
}

module.exports = InvalidValueError;