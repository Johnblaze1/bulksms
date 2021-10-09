
const MONGO_URI = "mongodb+srv://Johnblaze1234:Johnblaze1234@bulksms.y4rew.mongodb.net/bulksms?retryWrites=true&w=majority";
const {Admin} = require("../models/admin");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// connecting to MongoDB with
mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB CONNECTED SUCCESSFULLY:::`);
  })
  .catch((err) => {
    console.log(err);
  });

const admin = new Admin({
  full_name: "ABAYOMI JOHN",
  email: "abayomijohn26@gmail.com",
  phone: 07060962433,
  password: "John@1234",
  user_type: "Admin",
  avatar: "/images/avatarProfilePic.png"
});

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(admin.password, salt, (err, hash) => {
    if (err) {
      
      throw err;
    }
    admin.password = hash;
    admin
      .save()
      .then(() => {
        console.log(admin)
        console.log("admin save successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
