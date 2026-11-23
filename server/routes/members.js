import {Router} from 'express'; import {listMembers,createMember,updateMember,deleteMember} from '../controllers/memberController.js'; import {asyncHandler} from '../utils/asyncHandler.js';
const r=Router();r.get('/',asyncHandler(listMembers));r.post('/',asyncHandler(createMember));r.put('/:id',asyncHandler(updateMember));r.delete('/:id',asyncHandler(deleteMember));export default r;
