const userModel = require("../model/user");
const bcrypt = require('bcrypt');

const authController = {
    register : async(req , res) =>{
        try{
            const {name , email , password } = req.body;
            // check exist user
            const existUser = await userModel.find({email});
            if(existUser.length > 0){
                return res.status(500).json({message : "User already exist"})
            }
            // Hash password 
            const hashPassword = await bcrypt.hash(password , 10);
            
            // Create User Object
            const newRegister = new userModel ({
                name,
                email,
                password : hashPassword
            })
            await newRegister.save();

            res.status(200).json(newRegister)

        }catch(error){
            res.status(500).json({message : "Error register" , error : error.message})
        }
    }
}

module.exports = authController;