const bc = require('bcrypt');

function toHash(pass){
    return bc.hashSync(pass,5);
}


module.exports = toHash;