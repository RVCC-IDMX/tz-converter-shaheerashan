const moment = require('moment-timezone');
// eslint-disable-next-line import/no-unresolved
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

let targetTimezone;
let params;

// eslint-disable-next-line eqeqeq
if (process.argv.length != 3) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  params = yargs.argv;
  // eslint-disable-next-line prefer-destructuring
  targetTimezone = params._[0];
}

console.log(
  `The time at the ${targetTimezone} timezone is ${moment()
    .tz(targetTimezone)
    .format()}`
);
