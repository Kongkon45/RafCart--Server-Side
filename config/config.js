require('dotenv').config();

const dev = {
    app :{
        port : process.env.PORT || 5000
    },
    db : {
        url : process.env.DB_URL || "mongodb://localhost:27017/RafCartDb"
    }

}
module.exports = dev;