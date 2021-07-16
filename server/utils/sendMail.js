// const sendmail = require('sendmail')({
//   logger: {
//     debug: console.log,
//     info: console.info,
//     warn: console.warn,
//     error: console.error,
//   },
//   silent: false,
//   dkim: {
//     // Default: False
//     privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
//     keySelector: 'mydomainkey',
//   },
//   devPort: 1025, // Default: False
//   devHost: 'localhost', // Default: localhost
//   smtpPort: 2525, // Default: 25
//   smtpHost: 'localhost', // Default: -1 - extra smtp host after resolveMX
// })

// modules.exports = sendmail