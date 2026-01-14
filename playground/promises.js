require("../task-manger/src/db/mongoose");
const User = require("../task-manger/src/db/models/user");

User.findByIdAndUpdate("696237a5d4e5c2fe0ed589dc", { name: "Shivam" })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ name: "Shivam" });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e)
  });
