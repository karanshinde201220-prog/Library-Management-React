import mongoose from 'mongoose';
const schema=new mongoose.Schema({key:{type:String,unique:true},value:{type:String,default:''}});
export default mongoose.model('Setting',schema);
