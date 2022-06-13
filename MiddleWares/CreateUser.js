const AddUser = require('../DataBase/AddToDB');
function createUser(req,res){
       AddUser(req).then(result=>{
            return res.status(200).send(result).end();
       }).catch(err=>{
            return res.status(501).send({'err' : {'err' : err}}).end();
       })
}
module.exports = createUser;