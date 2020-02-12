import { model } from "mongoose";

if (process.env.NODE_ENV == "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// mongodb+srv://p00gz:<password>@emaily-mi4xi.mongodb.net/test?retryWrites=true&w=majority
// gPPPKiIXykkQ2ZGQ

// mongodb+srv://admin:<password>@cluster0-xskcs.mongodb.net/test?retryWrites=true&w=majority
// Ji1XJyJbqIErzEKJ

// 99264569659-0mu2009tiereek0iim72khecpc3u0nts.apps.googleusercontent.com
// TY6L8FD_vEslw8eNFNtf529F
