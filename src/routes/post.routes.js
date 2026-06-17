const express = require('express');

const router = express.Router();

router.post('/create',async(req,res)=>{
    const token = req.cookies.token; 
    // console.log(req.body);

    // console.log(req.cookies)
    
    if(!token){
        return res.status(401).send("Unauthorized");
    }

    try{
    const decoded =
     jwt.verify(token,process.env.JWT_SECRET)
    // const  user= await userModel.findOne({
    //     _id:decoded.id
    // })
    // console.log(user);   

     res.send("Post created successfully");
    }
    catch(err){
        return res.status(401).json({
            message : "Token is invalid"
        })
    }
    // res.send("Post created successfully");
})

module.exports=router;