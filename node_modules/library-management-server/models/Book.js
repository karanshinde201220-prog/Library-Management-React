import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true,trim:true},author:{type:String,required:true,trim:true},isbn:{type:String,default:'',trim:true},category:{type:String,default:'General',trim:true},publisher:{type:String,default:'',trim:true},shelf:{type:String,default:'',trim:true},totalCopies:{type:Number,required:true,min:1},availableCopies:{type:Number,required:true,min:0}},{timestamps:true});
schema.index({title:'text',author:'text',isbn:'text',category:'text',publisher:'text'});
export default mongoose.model('Book',schema);
