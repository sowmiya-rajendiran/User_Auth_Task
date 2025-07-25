const { default: mongoose } = require("mongoose");
const app = require("./app");
const { PORT, MONGODB_URI_Link } = require("./utils/config");

// connect database
mongoose.connect(MONGODB_URI_Link)
.then(()=>{
    console.log("database connected successfully");      
    // add listner
    app.listen(PORT , ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })

}).catch(()=>{
    console.log("database is not connected")
})