const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    email:{type: String, trim:true,required:true, unique: 1},
    username:{type:String,required:true,trim: true},
    password:{type: String,required:true, minlength:6 }
},{timestamps:true})

UserSchema.pre('save',function(next){
    var user = this;

   if(user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return next(err)
        bcrypt.hash(user.password, salt, function(err, hash) {
        if(err) return next(err)
        user.password = hash
        next()
        });
    });  
}else{
    next()
}
})

   
const User = mongoose.model('User',UserSchema)

module.exports = {User}