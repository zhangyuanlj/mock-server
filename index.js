const process = require('child_process');
process.exec('nodemon ./src/server.js', function (error, stdout, stderr) {
    console.log(stdout);
    if (error !== null) {
        console.log(`exec error:${error}`);
    } else {
        console.log(stdout);
    }
});