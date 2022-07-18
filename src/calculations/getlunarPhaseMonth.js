const { getLunarPhase } = require("./getLunarPhase");

function getLunarPhaseMonth(date = new Date()) {
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const daysInMonth = getDaysInMonth(year, month);

  const phases = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const thisDate = new Date(year, month, i);
    const phase = getLunarPhase(thisDate);
    phases.push(phase);
  }

  return phases;
}

module.exports = getLunarPhaseMonth;
