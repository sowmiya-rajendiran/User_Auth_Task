const userModel = require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../utils/config");

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

            res.status(200).json({message : "Registerd successfully" , newRegister})

        }catch(error){
            res.status(500).json({message : "Error register" , error : error.message})
        }
    },
    login : async (req , res) =>{
        try{
            const {email , password} = req.body;
            // Get user
            const user = await userModel.find({email});
            if(user.length === 0 ){
                return res.status(400).json({message : "User Not Found"})
            }
            // Password Matching
            const isPasswordValid = await bcrypt.compare(password,user[0].password)

            // If password is not matched
            if(!isPasswordValid){
                return res.status(400).json({ message: 'Invalid password' });
            }

            // Genrate JWT Token
            const token = jwt.sign({id : user[0]._id} , JWT_SECRET , {expiresIn : "1h"});


            // Login Successfull
            res.status(200).json ({message : "Login Successfull" , token : token})

        }
        catch(error){
            res.status(500).json({message : "Error Login" , error : error.message})
        }
    } ,
    myProfile : async (req , res) =>{
        try{
            const userId = req.userId;
            // find user
            const user = await userModel.findById(userId);
            //if not user
            if(!user){
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });

        }catch(error){
            res.status(500).json({message : "Error in MyProfile" , error : error.message})
            
        }
    }
}

module.exports = authController;