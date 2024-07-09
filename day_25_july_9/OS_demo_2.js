const os = require('os');

console.log(os.uptime()) // seconds
console.log(os.uptime() / 60 / 60) // hours

console.log(os.cpus().length)
console.table(os.cpus())

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.userInfo())

