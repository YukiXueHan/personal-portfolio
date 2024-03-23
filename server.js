const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "xue.yuki.han@gmail.com",
//     pass: "hanxue0104"
//   },
// });

const contactEmail = nodemailer.createTransport({
  host: 'smtp.office365.com', // Outlook SMTP 服务器地址
  port: 587, // SMTP 端口
  secure: false, // 默认为 true，但是 Outlook 使用 STARTTLS，因此这里设置为 false
  auth: {
    user: 'xue.b.han@outlook.com', // 你的 Outlook 邮箱地址
    pass: 'hanxue0104' // 你的 Outlook 邮箱密码
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    // to: "xue.yuki.han@gmail.com",
    to: "xue.b.han@outlook.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});