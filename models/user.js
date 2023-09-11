const mongodb = require('mongodb');
const { getdb } = require("../util/database");
class User{
  constructor(name,email,id){
    this.name=name;
    this.email=email;
    this._id=id?new mongodb.ObjectId(id):null;
  }
  save() {
    const db =getdb()
    let dbOp;
    if(this._id){
      //update
      dbOp=db.collection('users')
      .updateOne({_id:this._id},{$set:this})
    }
    else{
      dbOp=db.collection('users').insertOne(this)
    }
    return dbOp
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  static fetchAll(){
    const db =getdb()
    return db.collection('users').find().toArray()
    .then(result=>{
      console.log(result)
      return result;
    })
    .catch(err=>console.log(err))
  }
  static findById(prodId){
    const db=getdb()
    return db.collection('users').find({_id:new mongodb.ObjectId(prodId)})
    .next()
    .then(product=>{
      console.log(product);
      return product
    })
    .catch(err=>console.log(err))
  }
  static deleteById(prodId){
    const db = getdb();
    return db.collection('users')
    .deleteOne({_id:new mongodb.ObjectId(prodId)})
    .then(result=>console.log("user deleted"))
    .catch(err=>console.log(err))
  }
  static updateById(id){

  }
}

module.exports = User;
