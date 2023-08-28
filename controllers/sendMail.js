const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'eldora.mante48@ethereal.email',
            pass: 'RzRy1AjZWeWAUztzMq'
        }
    });

    let info = await transporter.sendMail({
        from: '"Pratik Anand" <pratikanand@gmail.com>',
        to: "pratikuymar@gmail.com", 
        subject: "Test",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });

    console.log("message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;