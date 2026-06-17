const express = require('express');

const authController = require('../controllers/auth.controller');
const router = express.Router();

// post method ki api hai jiska naam hai register
router.post('/register',authController.registerUser); //ye api create krne k liye hai, jab bhi koi user register karega to ye api call hogi aur uske andar jo logic hoga wo execute hoga


router.get("/test", (req, res) => {
    console.log("cookies: ",req.cookies);
    res.json({message: "Test route",
        cookies: req.cookies
    })
})

module.exports = router; 

 // POST /api/auth/register - ye api hai jiska naam hai register, jab bhi koi user register karega to ye api call hogi aur uske andar jo logic hoga wo execute hoga