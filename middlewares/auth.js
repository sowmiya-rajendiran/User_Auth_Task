const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const auth = {
    isAuthenticated : (req , res , next) =>{
        try{
            // get token (bearer token)
            const token = req.headers['authorization'].split(' ')[1];
            // No token provided 
            if(!token){
                return res.status(401).json({message : "No token provided"})
            }
            // verify the token
            jwt.verify(token , JWT_SECRET , (error , decode)=>{
                if(error){
                    return res.status(401).json({ message: 'Invalid token' });
                }

                req.userId = decode.id ;
                next();
            })

        }catch(error){
            res.status(500).json({message : "Error on auth isAunthenticated"})
        }
    
    }
}

module.exports = auth ;