const TicketManager = require('./ticketManager')
const EmailService = require('./emailService')

const ticketManager = new TicketManager(2);
const emailService = new EmailService();


ticketManager.on('buyingTicket', (person, price, time) => {
    console.log(`${person} is bought a ticket for Rs. ${price} at ${time}`);
    emailService.sendMail(person, 'success');
})
ticketManager.on('noTicketAvailable', (email, err) => {
    console.error(err);
    emailService.sendMail(person, 'failure');
})

ticketManager.buy('praveen@gmail.com', 350);
ticketManager.buy('geeta@gmail.com', 200);
ticketManager.buy('Anurag@gmail.com', 100);