const mongoose =require('mongoose');

const teacherSchema = mongoose.Schema({
    user_name:{type:String,required:true},
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    national_id_no: {type:Date,required:true},
    level: {type: String,required:true},
    email: {type: String,required:true},
    phone_no:{type: String,required:true},
    cv_file_path:{type:String},
    section:""
});

module.exports =mongoose.model('teachers',teacherSchema);