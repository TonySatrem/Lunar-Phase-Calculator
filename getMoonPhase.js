module.exports = getMoonPhase;

const InvalidValueError = require('./Error');

function getMoonPhase (options) {

  if (options.now) {
    const dateObject = new Date();
    const optionsNow = {
      now: false,
      year: +dateObject.getUTCFullYear(),
      month: +dateObject.getUTCMonth() + 1,
      date: +dateObject.getUTCDate()
    };
  
    return getMoonPhase(optionsNow);
  }

  checkOptions(options);

  let year = options.year;
  let month = options.month;
  let date = options.date;

  let c, e, b, jd;

  if (month < 3) {
    year--;
    month += 12;
  }
  ++month;

  c = 365.25 * year;
  e = 30.6 * month;
  jd = c + e + date - 694039.09;
  jd /= 29.5305882;
  b = Math.trunc(jd);
  jd -= b;
  b = Math.round(jd * 8);

  if (b >= 8) b = 0;

  let numberID = b;
  let stringID;

  switch (b) {
      case 0: stringID = 'New Moon phase'; break;
  case 1: stringID = 'Waxing Crescent Moon phase'; break;
  case 2: stringID = 'First Quarter Moon phase'; break;
  case 3: stringID = 'Waxing Gibbous Moon phase'; break;
  case 4: stringID = 'Full Moon phase'; break;
  case 5: stringID = 'Waning Gibbous Moon phase'; break;
  case 6: stringID = 'Last Quarter Moon phase'; break;
  case 7: stringID = 'Waning Crescent Moon phase'; break;
  default: throw new Error('something goes wrong');
}

  return [numberID, stringID];
}

function checkOptions (options) {
  const now = options.now;
  const year = options.year;
  const month = options.month;
  const date = options.date;

  if (typeof now != "boolean" && now != undefined) throw new InvalidValueError("invalid options.now value was received");
  
  if (!(typeof year == "number" && 
    typeof month == "number" &&
    typeof date == "number")) throw new InvalidValueError("was received NAN value"); 
      
  if (year < 1900 || year > 2100) throw new InvalidValueError("invalid year value was received");
  if (month < 1 || month > 12) throw new InvalidValueError("invalid month value was received");
  if (date < 1 || date > 31) throw new InvalidValueError("invalid date value was received");
}