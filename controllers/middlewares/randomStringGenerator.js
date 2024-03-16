// utils/randomStringGenerator.js
const randomstring = require("randomstring");


function generateOTP() {
  return randomstring.generate({
    length: 6,
    charset: "numeric",
  });
}



// // Code to handle password reset request and send email containing reset link
// app.post('/forgot-password', async (req, res) => {
//     const { email } = req.body;

//     // Generate unique token
//     const token = crypto.randomBytes(20).toString('hex');

//     // Save token in database
//     await ResetToken.create({ email, token });

//     // Send email containing reset link with token
//     const resetLink = 'http://example.com/reset-password?token=${token}'; // Replace example.com with your domain
//     // Send email containing reset link to user's email
//     // Code for sending email here...

//     res.send('Reset link sent to your email');
// })



module.exports = generateOTP;
