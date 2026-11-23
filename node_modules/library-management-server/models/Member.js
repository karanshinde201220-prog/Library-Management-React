import mongoose from 'mongoose';
const schema=new mongoose.Schema({memberId:{type:String,required:true,unique:true,trim:true},accountUser:{type:mongoose.Schema.Types.ObjectId,ref:'User',unique:true,sparse:true},name:{type:String,required:true,trim:true},email:{type:String,default:'',trim:true},phone:{type:String,default:'',trim:true},address:{type:String,default:''},status:{type:String,enum:['active','inactive','expired'],default:'active'},membershipExpiry:{type:Date},maxBooks:{type:Number,default:3,min:1}},{timestamps:true});
export default mongoose.model('Member',schema);
