import mongoose from 'mongoose';
const schema=new mongoose.Schema({action:{type:String,required:true},entity:{type:String,default:''},entityId:{type:String,default:''},details:{type:String,default:''},user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}},{timestamps:true});
export default mongoose.model('AuditLog',schema);
