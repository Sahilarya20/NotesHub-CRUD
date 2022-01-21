const jwt = require('jsonwebtoken');

const JWt_Secret="sahilcheckedit";



const fetchuser=(req,res,next)=>{
    
    // get the user from the JWT token and append to req object
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send({error:"PLease authenticate using validate token"})
    }
    try {
        const data =jwt.verify(token,JWt_Secret)
    req.user=data.user;
    next()
        
    } catch (error) {
        res.status(401).send({error:"PLease authenticate using validate token"})
    }
    
}
module.exports=fetchuser;
