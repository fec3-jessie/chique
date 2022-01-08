// leave this file commented out until everyone has set up a cloudinary account and attached there info to a env.js and .env file

// const url = 'https://api.cloudinary.com/v1_1/dg6a907c2/image/upload';
// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;
// require('/env.ja');
// const apiSecret = cloudinary.config().api_secret;

// const signUploadForm = () => {
//   const timeStamp = Math.round((new Date).getTime() / 1000);

//   const signature = cloudinary.utils.api_sign_request({
//     timestamp: timeStamp
//   }, apiSecret);

//   return { timeStamp, signature };
// };

// module.exports = {
//   signUploadForm
// };