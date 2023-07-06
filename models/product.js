const fs=require('fs')
const path=require('path')

const p=path.join(__dirname,'..','data','product.json');
const products=[];
module.exports= class Product{
    constructor(t){
        this.title=t
    }
    save(){
        fs.readFile(p,(err,fileContent)=>{
            let prods=[]
            if(!err){
                prods=JSON.parse(fileContent);
                prods.push(this);
            }
            fs.writeFile(p,JSON.stringify(prods),(err)=>console.log(err))
        })
    }
    static fetchAll=(callback)=>{
        fs.readFile(p,(err,fileContent)=>{
            if(err)
                callback([]);
            callback(JSON.parse(fileContent));
        });
    }
}