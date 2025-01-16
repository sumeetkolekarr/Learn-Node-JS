const os = require('os')

// Info about Current User
console.log(os.userInfo())

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()/3600} hours`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);