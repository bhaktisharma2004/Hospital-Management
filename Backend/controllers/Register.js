const Schema = require('../Schema/Register');
const bcrypt = require('bcrypt');


async function register(req, res) {
    try{
        const {firstName, lastName, email, mobNumber, AdharCard, DOB, Gender, password, confirmPassword, Address} = req.body;
    
    console.log('req body',req.body);

    const checkEmail = await Schema.findOne({email});
    if(checkEmail){
        return res.status(400).json({message : 'Email already exists', error : true});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const payLoad = {
        firstName, lastName, email, mobNumber, AdharCard, DOB, Gender, password : hashedPassword, confirmPassword, Address
    }

    const user = new Schema(payLoad);

    const result = await user.save();

    return res.status(201),json({message : "User created successfully", error : false, success : true, data : result});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message : "Internal server error", error : true});
    }
}

module.exports = register;