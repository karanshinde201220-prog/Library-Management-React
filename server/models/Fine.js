import mongoose from 'mongoose';
const schema=new mongoose.Schema({loan:{type:mongoose.Schema.Types.ObjectId,ref:'Loan',required:true,unique:true},member:{type:mongoose.Schema.Types.ObjectId,ref:'Member',required:true},book:{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true},overdueDays:{type:Number,default:0},amount:{type:Number,default:0,min:0},status:{type:String,enum:['unpaid','paid','waived'],default:'unpaid'},paidAt:{type:Date}},{timestamps:true});
export default mongoose.model('Fine',schema);
