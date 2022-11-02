const express = require('express')
const app = express()
// const port = 5000;
const bodyParser = require('body-parser');
const {User} = require('./model/User')
const port = process.env.PORT;

const mongoose = require('mongoose');

const MONGO_URI ="mongodb+srv://kbba78:deli2113@todoapp.bx6rinl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const server = async()=>{
    try{
        await mongoose.connect(MONGO_URI,{ useNewUrlParser:true, useUnifiedTopology:true });
        console.log('mongoDB connected...');

        //Set EJS View Engine//
        app.set('view engine', 'ejs');
        app.set('views', './views'); 

         //Set CSS & JS//
        app.use('/public', express.static('public'))
        app.use(bodyParser.urlencoded({extended:true})); 
        app.use(bodyParser.json());

        app.get('/', (req, res) => {
            res.render('index')
        })

        app.get('/greeting', (req, res) => {
            res.render('greeting')
        })
 
        app.get('/write', (req, res) => {
            res.render('write')
        })

        app.post('/add', async(req,res)=>{
            try{
                let username = req.body.username;
                let name = req.body.name;
                const user = new User(req.body);
                await user.save();
                 res.redirect('/'); 
            }catch(err){
                console.log(err);  
                return res.status(500).send({err: err.message})
            }      
        })
          
          app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })

    }catch(err){
     console.log(err); 
    }  
}

server();