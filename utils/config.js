require('dotenv').config();

const MONGODB_URI_Link = process.env.MONGODB_URI ;
const PORT = process.env.PORT || 3002;
const JWT_SECRET = process.env.JWT_SECRET ;

module.exports = {MONGODB_URI_Link , PORT , JWT_SECRET};