import {Router} from 'express';import {myAccount} from '../controllers/memberPortalController.js';import {requireMember} from '../middleware/auth.js';import {asyncHandler} from '../utils/asyncHandler.js';
const r=Router();r.use(requireMember);r.get('/account',asyncHandler(myAccount));export default r;
