import AuditLog from '../models/AuditLog.js';
export async function audit(user,action,entity='',entityId='',details=''){try{await AuditLog.create({user,action,entity,entityId,details});}catch(e){console.error('Audit log:',e.message);}}
