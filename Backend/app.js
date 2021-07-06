const express = require('express');
const BookData = require('./src/model/Bookdata');
const AuthorData = require('./src/model/Authordata');
const UserData = require('./src/model/Userdata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const e = require('express');

var app = new express();
app.use(cors());
app.use(express.json())

email="admin@library.com";
password="12345678";

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}



//log in admin
app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!email) {
          res.status(401).send('Invalid Email')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject:email+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })
  

//getting bookdata from db
app.get('/books',function(req,res){
    
    BookData.find()
                .then(function(books){
                    res.send(books);
                });
});

//getting authordata from db
app.get('/authors',function(req,res){
    
    AuthorData.find()
                .then(function(authors){
                    res.send(authors);
                });
});

//inserting book into db
app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var book = {       
       title:req.body.book.title,
       author:req.body.book.author,
       genre:req.body.book.genre,
       image:req.body.book.image
   }       
   var book = new BookData(book);
   book.save();
});
//saving author dtails to data base
app.post('/authorinsert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var author = {       
       author:req.body.author.author,
       books:req.body.author.books,
       language:req.body.author.language,
       image:req.body.author.image
   }       
   var author = new AuthorData(author);
   author.save();
});

//insering user data in to db
app.post('/userinsert',function(req,res){

  var useremail=req.body.user.email;
  console.log(req.body);
  UserData.findOne({"email":useremail})
  .then(function(user){
  if(useremail==user?.email){ console.log('user already exist'); res.status(401).send('Invalid Password') }
  else{

    var user = {       
      fullname:req.body.user.fullname,
      email:req.body.user.email,
      password:req.body.user.password,
    }     
  var user = new UserData(user);
  user.save();  
  }
});

});

//removing book from database
app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    BookData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
        
    })
  })
  //removing author from database
  app.delete('/authorremove/:id',(req,res)=>{
   
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
///
app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      BookData.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })


  //updating book
  app.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    // bookId= req.body.bookId,
    title = req.body.title,
    author = req.body.author,
    genre = req.body.genre,
    image = req.body.image,
   BookData.findByIdAndUpdate({"_id":id},
                                {$set:{"title":title,
                                "author":author,
                                "genre":genre,
                                "image":image,}})
   .then(function(){
       res.send();
   })
 })
////
app.get('/author/:id',  (req, res) => {
  
    const id = req.params.id;
      AuthorData.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
  })
  //updating author
  app.put('/authorupdate',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    // bookId= req.body.bookId,
    author = req.body.author,
    books = req.body.books,
    language = req.body.language,
    image = req.body.image,
   AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{"author":author,
                                "books":books,
                                "language":language,
                                "image":image,}})
   .then(function(){
       res.send();
   })
 })


app.listen(4000,function(){
    console.log("app listening at port 4000")
});