import {Router} from 'express'; import {listBooks,createBook,updateBook,deleteBook} from '../controllers/bookController.js'; import {asyncHandler} from '../utils/asyncHandler.js';
const r=Router();r.get('/',asyncHandler(listBooks));r.post('/',asyncHandler(createBook));r.put('/:id',asyncHandler(updateBook));r.delete('/:id',asyncHandler(deleteBook));export default r;
