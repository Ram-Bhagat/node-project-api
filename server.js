const mongoose = require('mongoose')
const dotenv = require('dotenv');


dotenv.config();


const app = require('./app')

mongoose.connect(process.env.CON_STR, {
 // useNewUrlParser: true,
}).then((conn) => {
  console.log('connection ok');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});


let port = process.env.PORT || 5100;
app.listen(port,()=>{
  console.log('server started at port 5100');
})