const cron = require('node-cron');

function sendMail() {
    console.log('mail sent succesfully')
}

cron.schedule('*/10 * * * * *', () => {
    console.log('running a task every minute');
    sendMail();
});