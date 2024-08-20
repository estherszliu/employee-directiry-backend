const { default: mongoose } = require("mongoose");

async function connect(){
    let databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/employeeDB";

    await mongoose.connect(databaseURL);
    console.log("Database connecting completed!");

}

module.exports = {
    connect
}