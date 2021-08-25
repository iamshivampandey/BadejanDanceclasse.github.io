const fs=require("fs")
const express= require('express');
const path=require('path');
const app=express();
const port=8000;
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactdance', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind('error'));


const contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:string,
    dob:string,
  });
  const contact = mongoose.model('contactus', contactSchema);
   
  const silence = new contact({ name: 'shivam' });
 silence.save();
const mypath=path.join(__dirname,'static');
const viewpath=path.join(__dirname,'views')
app.use(express.static(mypath));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',viewpath);

app.get('/',(req,res)=>{
    const param={

    }
    res.render('Home.pug',param)
})
app.get('/about',(req,res)=>{
    
    res.render('about.pug')
})
app.get('/contactUs',(req,res)=>{
    const param={

    }
    res.render('contact.pug',param)
})
app.post('/contactUs',(req,res)=>{
    const param={

    }
    myname=req.body.name
    phone=req.body.phone
    email=req.body.email
    dob=req.body.dob
    fs.writeFileSync('myfrom.txt',`The name of clint is ${myname} his phn no is ${phone} email is ${email} and date of birth is ${dob} `)
    res.render('contact.pug',param)
})  
app.listen(port,()=>{
    console.log(`The server is running in port ${port}`)
})




