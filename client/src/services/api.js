import axios from 'axios';
const api=axios.create({baseURL:'/api',timeout:10000,headers:{'Content-Type':'application/json'}});
api.interceptors.request.use(c=>{const t=localStorage.getItem('library_token');if(t)c.headers.Authorization=`Bearer ${t}`;return c;});
api.interceptors.response.use(r=>r,err=>{if(err.response?.status===401&&location.pathname!=='/login'){localStorage.removeItem('library_token');localStorage.removeItem('library_user');location.href='/login';}return Promise.reject(err);});
export const message=e=>e?.response?.data?.message||e?.message||'Something went wrong';export default api;
