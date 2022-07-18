const drawASCII = require("../src/ASCII-arts/drawASCII");
const phases = require("../src/phases.json");

const phasesObject = JSON.parse(JSON.stringify(phases));
const phasesValues = Object.values(phasesObject);

for (const value of phasesValues) {
  process.stdout.write(`\t${value}\n${drawASCII(value)}`);
}