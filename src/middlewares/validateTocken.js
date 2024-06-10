import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.tocken.js';
export const authRequiered = (req, res, next) => {
    const {token} = req.cookies;

  if(!token)
    return res.status(401).json({message:"No tocken, autorization deneid"});

  jwt.verify(token,TOKEN_SECRET,(err,user)=>{
    if (err) return res.status(401).json({message:"Invalid Token"});
    req.user=user
        
    next();
  })
};
