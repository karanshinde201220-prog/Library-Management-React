import {Router} from 'express';import {login,me,register} from '../controllers/authController.js';import {requireAuth} from '../middleware/auth.js';import {asyncHandler} from '../utils/asyncHandler.js';
const r=Router();r.post('/login',asyncHandler(login));r.post('/register',asyncHandler(register));r.get('/me',requireAuth,asyncHandler(me));export default r;
