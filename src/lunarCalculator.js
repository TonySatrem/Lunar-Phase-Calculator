const { getLunarDay, getLunarPhase } = require("./calculations/getLunarPhase");
const getFullLunarPhase = require("./calculations/getFullLunarPhase");
const { toJDN, fromJDN } = require("./calculations/julianDayNumber");
const drawASCII = require("./ASCII-arts/drawASCII");
const ASCIIArts = require("./ASCII-arts/ASCII-arts.json");
const phases = require("./phases.json");

const lunarCalculator = {
  getLunarDay,
  getLunarPhase,
  getFullLunarPhase,
  toJDN,
  fromJDN,
  drawASCII,
  ASCIIArts,
  phases,
};

module.exports = lunarCalculator;