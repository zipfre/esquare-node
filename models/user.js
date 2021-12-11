const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique:true
    }
,
    user_password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
   
});

module.exports=mongoose.model('users',userSchema);