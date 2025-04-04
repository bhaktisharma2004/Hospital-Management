const Schema = require('../Schema/Register');
const bcrypt = require('bcrypt');

async function login(req, res) {
    try{
        const {email, password} = req.body;

        const user = await Schema.findOne({email});
        if(!user){
            return res.status(404).json({message: "User Not Found", error : true});
        }

        const passwordValid = await bcrypt.compare(password, user.password);

        if(!passwordValid){
            return res.status(401).json({message : "Password is incorrect", error : true});
        }

        const token = {
            id : user.id,
            email : user.email
        }

        res.status(200).json({message : "Login Success", token, error : false, name : user.name});


    }   
    catch(err){
        console.log(err);
        return res.status(500).json({message : "Internal Server Error", error : true});
    }
}

module.exports = login;