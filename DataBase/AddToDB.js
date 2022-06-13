const UserModel = require('../DataBase/UserModel');
const toHash = require('../Utils/PasswordHasher');

async function AddUser (req){
    console.log(toHash(req.body.pass));
    try{
        return await UserModel.create({
        Name : req.body.name,
        role : req.body.role,
        Email : req.body.email,
        Gender : req.body.gender,
        PassWord : toHash(req.body.pass)
        });
    }catch(err){
        console.log(err);
        return err
    }
}



module.exports = AddUser;