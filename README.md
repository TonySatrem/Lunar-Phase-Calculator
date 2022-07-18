# Lunar-Phase-Calculator

To install:
```console
$ npm i lunarphase-calculator -S
```
Then require it in your program:
```console
const lunarCalc = require("lunarphase-calculator");
```

## API
```js
lunarCalc.getLunarDay();
```
Returns **lunar day** of specified Date Object or current Date.

```js
lunarCalc.getLunarPhase();
```
Return **lunar phase** (lunarCalc.phases) of specified lunar day or current lunar day.

