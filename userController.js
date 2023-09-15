const Users = require('../model/userModel');
const bycrpt = require('bcrypt');

module.exports.register = async (req, res, next) => {
    try {
        //RECIEVE DATA FROM FRONTEND
        const { name, email, phoneNumber, password } = req.body; 
        // CREDENTIALS CHECK 
        const emailCheck = await Users.findOne({email});
        if(emailCheck){
            return res.json({msg: "User having this email already exists!", status: false});
        }
        const phoneNoCheck = await Users.findOne({phoneNumber});

        if(phoneNoCheck){
            return res.json({msg: "Phone number already used!", status: false});
        }

        // CREATING HASH OF PASSWORD USING BYCRPT LIBRARY
        const hashedPassword = await bycrpt.hash(password, 10);

        // CREATE USER IN DATABASE WITH PROCESSED CREDENTAILS
        const user = await Users.create({
            name,
            email,
            phoneNumber,
            password: hashedPassword,
        });

        delete user.password;   // Delete original password for security from backend
        return res.json({status: true, user});
    } 
    catch (error) {
        next(error);
    }
};


module.exports.login = async (req, res, next) => {
    try {
        //RECIEVE DATA FROM FRONTEND
        const { email, password } = req.body; 
        // CREDENTIALS CHECK 
        const user = await Users.findOne({email});
        if(!user){
            return res.json({msg: "Incorrect email or password!", status: false});
        }

        const passwordCheck = await bycrpt.compare(password, user.password); // Varify ENTERED PASSWORD WITH ACTUAL STORED PASSWORD, USING BYCRPT LIBRARY
        if(!passwordCheck){
            return res.json({msg: "Incorrect email or password!", status: false});
        }
        delete user.password;   // Delete original password for security from backend

        return res.json({status: true, user});
    } 
    catch (ex) {
        next(ex);
    }
};

