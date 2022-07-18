# Lunar-Phase-Calculator

To install:
```
$ npm i lunarphase-calculator -S
```
Then require it in your program:
```
const lunarCalc = require("lunarphase-calculator");
```

## API
```
lunarCalc.getLunarDay();
```
Returns **lunar day** of specified Date Object or current Date.

```
lunarCalc.getLunarPhase();
```
Return **lunar phase** (lunarCalc.phases) of specified lunar day or current lunar day.

