const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');


const JWt_Secret="sahilcheckedit";

// ................................. ROUTE 1: Create a user using POST "/api/auth/createuser" no login required
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // if there are errors ,return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
        //check wheter the user exist already with same email
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(404).json({ error: " A user with same email is already register" });
        }
        
        const salt = await bcrypt.genSaltSync(10);
        secPass= await bcrypt.hash(req.body.password,salt) ;

        user = await User.create({
            name: req.body.name,
            password: secPass, 
            email: req.body.email,
        })
        const data={
            user:{
                id:user.id
            }
        }
       const authToken= jwt.sign(data,JWt_Secret);
    //    console.log(jwdData);
        res.json({authToken})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occured")

    }



})

//.............................................. ROUTE 2: Authenticate a user using POST "/api/auth/login" no login required

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),

], async (req, res) => {
      // if there are errors ,return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      const {email,password}=req.body;
      try {
          let user=await User.findOne({email});
          if(!user){
              return req.status(400).json({error:" login with correct credentials"});
          }
          const passwordCompare= await bcrypt.compare(password,user.password)
          if(!passwordCompare){
            return req.status(400).json({error:" login with correct credentials"});
          }
          const data={
            user:{
                id:user.id
            }
        }
       const authToken= jwt.sign(data,JWt_Secret);
       res.json({authToken})
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occured")

    }
})

// ................................. ROUTE 3: Get loggedin user details using POST "/api/auth/getuser" login required

router.post('/getuser',fetchUser, async (req, res) => {
    try {
        userid=req.user.id ;
        const user=await User.findById(userid).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occured")
    }
    })




module.exports = router;