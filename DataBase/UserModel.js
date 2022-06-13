const sequelize = require('./Sequelize');
const { DataTypes } = require('sequelize');

const UserModel = sequelize.define('User',{
    Name :{
        type : DataTypes.STRING(50)
    },
    role : {
      type : DataTypes.ENUM(['Student','Teacher'])
    },
    Email : {
        type : DataTypes.STRING(30),
        unique : true
    },
    Gender : {
        type : DataTypes.ENUM('Male','Female')
    },
    PassWord : {
        type : DataTypes.TEXT()
    }
},
{
    freezeTableName : true,
    timestamps : false,
    createdAt: false,
    updatedAt : false

});

module.exports = UserModel;