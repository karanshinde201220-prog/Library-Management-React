import jwt from 'jsonwebtoken';
export function requireAuth(req,res,next){const h=req.headers.authorization||'';const token=h.startsWith('Bearer ')?h.slice(7):null;if(!token)return res.status(401).json({message:'Authentication required'});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next();}catch{return res.status(401).json({message:'Session expired. Please log in again.'});}}
export function requireAdmin(req,res,next){if(req.user?.role!=='admin')return res.status(403).json({message:'Administrator access required'});next();}
export function requireMember(req,res,next){if(req.user?.role!=='member')return res.status(403).json({message:'Member access required'});next();}
