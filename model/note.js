var path=require('path')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect:'sqlite',
  storage: path.join(__dirname,'../database/database.sqlite')
});
/*
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/
 
//定义数据库标的结构
const Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  uid: {
    type: Sequelize.STRING
  }
});

//Note.sync({force:true})
//Node.sync().then(function(){
//	Node.create({text:"hello word"})
//}).then(function(){
//	Node.findAll({raw:true}).then(function(notes){
//	console.log(notes)
//	})
//
//})

//Node.findAll({raw:true,where:{id:2}}).then(function(notes){
//	console.log(notes)
//})

module.exports.Note=Note