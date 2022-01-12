const mongoose =require('mongoose');

const studentSchema = mongoose.Schema({
    user_name:{type:String,required:true},
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    date_of_birth: {type:Date,required:true},
    level: {type: String,requred:true},
    parent_name: {type: String,requred:true},
    parent_id_no:{type: String,requred:true},
    parent_phone_no:{type:String,requred:true},
    parent_email:{type:String,requred:true},
    section:{type:String}
});


module.exports =mongoose.model('students',studentSchema);