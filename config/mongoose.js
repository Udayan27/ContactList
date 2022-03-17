const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/c_list_db');
const db = mongoose.connection;
db.on('error',console.error.bind(console,"error: not connected"));
db.once('open',()=>{
    console.log("success");
});