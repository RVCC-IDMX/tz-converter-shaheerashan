const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

const targetTimezone = 'Europe/Paris';

console.log(moment().tz(targetTimezone).format());
