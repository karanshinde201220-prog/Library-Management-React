import mongoose from 'mongoose';
const schema=new mongoose.Schema({book:{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true},member:{type:mongoose.Schema.Types.ObjectId,ref:'Member',required:true},quantity:{type:Number,default:1,min:1},issueDate:{type:Date,default:Date.now},dueDate:{type:Date,required:true},returnDate:{type:Date},status:{type:String,enum:['issued','returned'],default:'issued'},createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}},{timestamps:true});
schema.index({status:1,dueDate:1});
export default mongoose.model('Loan',schema);
