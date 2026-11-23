import mongoose from 'mongoose';
const schema=new mongoose.Schema({username:{type:String,required:true,unique:true,trim:true,lowercase:true},email:{type:String,required:true,unique:true,trim:true,lowercase:true},password:{type:String,required:true},name:{type:String,required:true,trim:true},role:{type:String,enum:['admin','member'],default:'member'},member:{type:mongoose.Schema.Types.ObjectId,ref:'Member',default:null}},{timestamps:true});
export default mongoose.model('User',schema);
