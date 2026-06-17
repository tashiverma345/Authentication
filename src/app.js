const express=require('express');
const authRoutes = require('./routes/auth.routes');//btane ke liye ki api kidhr hai
const postRoutes = require('./routes/post.routes');
const cookieParser = require('cookie-parser');



const app = express()
app.use(express.json());//middleware
app.use(cookieParser());//middleware, cookie ko parse karne ke liye use hota hai, jab bhi koi request aayegi to wo cookie ko parse karega aur uske baad hi aage badhega 


app.use('/api/auth',authRoutes); //yha pe humne apne routes ko use kiya hai, jab bhi koi request aayegi /api/auth ke andar to wo authRoutes me jayegi aur waha pe check karegi ki konsa route match ho raha hai

app.use("/api/posts",postRoutes); //yha pe humne apne post routes ko use kiya hai, jab bhi koi request aayegi /api/post ke andar to wo postRoutes me jayegi aur waha pe check karegi ki konsa route match ho raha hai

module.exports = app;

//yha server create krne k liye code likhenge, database se connect krne k liye code likhenge, routes ko use krne k liye code likhenge, etc.

//yha server create krte hain

///api/auth - jo api apne router ki help se create ki hai, uska prefix hai /api/auth, to jab bhi koi request aayegi /api/auth ke andar to wo authRoutes me jayegi aur waha pe check karegi ki konsa route match ho raha hai, agar match ho raha hai to uske andar jo logic hoga wo execute hoga, agar match nahi ho raha hai to 404 error aayega