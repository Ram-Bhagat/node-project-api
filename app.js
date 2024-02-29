const express = require('express');
const cors = require('cors')
const app = express();
const movieRouter = require('./router/movieRouter')
app.use(express.json()); 

app.use(cors())
app.use(express.static('./public'))


const logger = (req,res,next)=>{
   // console.log(' logger midelware called');
    next()
}
app.use(logger);

app.use((req,res,next)=>{
 // res.setHeader('Cache-Control', 'max-age=3600');
 const oneHourFromNow = new Date(Date.now() + 3600 * 1000); // 1 hour from now
 res.setHeader('Expires', oneHourFromNow.toUTCString());

  req.requestedAt = new Date().toISOString();
  console.log("call");

  next()
})

app.use('/api/v1/movies',movieRouter)

module.exports = app