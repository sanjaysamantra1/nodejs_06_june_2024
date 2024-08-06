const nodemailer = require("nodemailer");
const express = require("express");

const app = express();

app.get('/sendMail', async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "sanjaysamantra2@gmail.com",
            pass: "vqnzangbviohjbmu", // google app password
        },
    });

    const mailInfo = {
        from: "sanjaysamantra2@gmail.com",
        to: ["jagtappooja177@gmail.com", "developerpraveen11@gmail.com",
            "jabinnahid14@gmail.com", "vamsimyneni501@gmail.com"],
        subject: "Test Email using NodeJS", // Subject line
        html: `
                <h1>This is a Test E-Mail</h1>
                <h3 style="color:red;text-align:center">Congratulations!!!!</h3
                <p>Please follow the below instructions to claim your amount</p>

                <pre>
                    Hellooo ooooooooooo
                    Hiiiiiiiiiiiii
                    Good Evening
                </pre>
            `,
        attachments:[
            {fileName:'profile.png',path:'./profile.png'}
        ]
    }
    await transporter.sendMail(mailInfo);
    console.log('Mail Sent Successfully!!!')
});
app.listen(5000);

