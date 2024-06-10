import jwt from 'jsonwebtoken';

const authMiddleware=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({succcess:false,msg:"Not Authorised,Please Login Again"})
    }
    try{
       const token_decode=jwt.verify(token,process.env.JWT_SECRET);
       req.body.userId=token_decode.id; // created in createToken method {id}
       next();
    }catch(err){
        console.log(err);
        return res.json({success:false,msg:"Error"})
    }
}

export default authMiddleware;