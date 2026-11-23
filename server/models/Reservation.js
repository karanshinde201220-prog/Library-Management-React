import mongoose from 'mongoose';
const schema=new mongoose.Schema({book:{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true},member:{type:mongoose.Schema.Types.ObjectId,ref:'Member',required:true},status:{type:String,enum:['pending','approved','rejected','fulfilled'],default:'pending'},notes:{type:String,default:''}},{timestamps:true});
export default mongoose.model('Reservation',schema);
