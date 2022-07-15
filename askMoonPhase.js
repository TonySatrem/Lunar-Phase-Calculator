module.exports = askMoonPhase;

const drawASCIIMoon = require('./ASCII-moon');
const getMoonPhase = require('./getMoonPhase');
const InvalidValueError = require('./Error');

function askMoonPhase () {
  const options = {};
  
  process.stdout.write("\nHi, let's count a moon phase!\n");
  process.stdout.write("Do you want to know the current phase? (yes/no): ");
  process.stdin.once('data', chunk => {
    const str = chunk.toString('utf-8');
    if (str == "yes\r\n") {
      options.now = true;

      showMoonPhase(options);
      askContinue();
    } 
    else options.now = false;

    if (options.now) return;
    else askFullDate();
  });
}

function askFullDate () {
  const options = {};

  process.stdout.write("Write full date (year, month, day): ");
  process.stdin.once('data', chunk => {
    const str = chunk.toString('utf-8').split(" ");
    
    if (str.length !== 2 && str.length !== 3) throw new InvalidValueError("wrong number of parameters was received");
    str[str.length-1] = str[str.length-1].substring(0, str[str.length-1].length - 2);
    const [year, month] = str;

    options.now = false;
    options.year = +year;
    options.month = +month;
    if (str.length == 3) options.date = +str[2];
    else options.fullMonth = true;

    showMoonPhase(options);
    askContinue();
  });
}  

function askContinue () {
  process.stdout.write("Do you want to continue? (yes/no): ");
  process.stdin.once('data', chunk => {
    const str = chunk.toString('utf-8');
    if (str == "yes\r\n") askMoonPhase();
    else process.exit(0);
  });
}

function showMoonPhase (options) {
  if (options.fullMonth) {
    const days = daysInMonth(options.month, options.year);
    let dayOptions = {};
    
    for (let i = 1; i <= days; i++) {
      dayOptions = {
        now: false,
        year: options.year,
        month: options.month,
        date: i
      }
      
      process.stdout.write(`\n\t${options.year}/${options.month}/${i}\n`);
      showMoonPhase(dayOptions);
      process.stdout.write("\n");
    }
    return;
  }

  const [numID, phase] = getMoonPhase(options);
  const ASCIIMoon = drawASCIIMoon(numID);

  process.stdout.write(`   ${phase}\n`, 'utf-8');
  process.stdout.write(ASCIIMoon + "\n");
}

function daysInMonth (month, year) {
  let days;
  if (month == 4 || month == 6 || month == 9 || month == 11) days = 30;
  else {
    if (month == 2) days = year % 4 == 0 ? 29 : 28;
    else days = 31;
  }
  return days;
}
