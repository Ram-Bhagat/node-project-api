//L-1
// const readLine = require('readline');
// const rl = readLine.createInterface({
//   input:process.stdin,
//   output:process.stdout
// });

// rl.question('enter name: ',(name)=>{
//   console.log('name is :',name);
//   rl.close();
// })

// rl.on('close', ()=>{
//   console.log('closed');
//   process.exit(0)
// })



// L-2

// const fs = require('fs');

// let textfile = fs.readFileSync('files/input.txt', 'utf-8');

// let content = `this is the new content \n ${textfile} \n date is: ${new Date}`;

// fs.writeFileSync('files/output.txt',content)



// L-3
// const fs = require('fs');

// fs.readFile('files/code.txt','utf-8',(err,data1)=>{
//   console.log(data1);
//   fs.readFile(`files/${data1}.txt`,'utf-8',(err,data2)=>{
//     console.log(data2);
//   })
// })

// console.log('fetching data....');

// L-10

// const fs = require('fs');

// const http = require('http');
// let html = fs.readFileSync('templete/index.html','utf-8')
// const server = http.createServer((req,res)=>{
//   res.end(html)
//   console.log('server called');
// })

// server.listen(5100,'127.0.0.1', ()=>{
//   console.log('server started at port 5100');
// })


//L

// const fs = require('fs');

// const http = require('http');
// let html = fs.readFileSync('templete/index.html','utf-8')
// const server = http.createServer((req,res)=>{
//    let path = req.url;
//    if(path === '/' || path === '/home'){
//     res.writeHead(200,{
//       'text-content': 'text/html',
//       'my-header': 'custom header'
//     });
//     res.end(html.replace('{{%content%}}','you are in home page'))
//    }else if(path === '/login'){
//     res.writeHead(200);
//     res.end(html.replace('{{%content%}}','you are in login page'))
//    }else{
//     res.writeHead(404);
//     res.end('not found')
//    }
 
// })

// server.listen(5100,'127.0.0.1', ()=>{
//   console.log('server started at port 5100');
// })


// till L-22

// const readLine = require('readline');
// const fs = require('fs');
// const replaceHtml = require('./modules/replceHtml');
// const user = require('./modules/user')

// const http = require('http');
// const url = require('url')
// let html = fs.readFileSync('templete/index.html','utf-8');
// const products = JSON.parse(fs.readFileSync('data/products.json','utf-8'));
// const productHtml = fs.readFileSync('templete/product-list.html','utf-8');
// const productDetailsHtml = fs.readFileSync('templete/product-details.html','utf-8');


// const server = http.createServer();
// server.on('request',(req,res)=>{
//  let {query, pathname:path} =  url.parse(req.url,true);

//    if(path === '/' || path === '/home'){
//     res.writeHead(200,{
//       'Content-type': 'text/html',
//       'my-header': 'custom header'
//     });
//     res.end(html.replace('{{%content%}}','you are in home page'))
//    }else if(path === '/login'){
//     res.writeHead(200,{
//       'Content-type': 'text/html',
//       'my-header': 'custom header'
//     });
//     res.end(html.replace('{{%content%}}','you are in login page'))
//    }else if(path === '/products'){
//     if(!query.id){
//       let productArr =products.map((product)=>{
//      return  replaceHtml(productHtml,product)
//     })
//     res.writeHead(200,{
//       'Content-type': 'text/html'
//     });
//     res.end(html.replace('{{%content%}}',productArr.join(' ')));
//   }else{
//     let fetchedProduct = products[query.id];
//    let responsedProduct= replaceHtml(productDetailsHtml, fetchedProduct)
//     res.end(html.replace('{{%content%}}',responsedProduct));
//   }
//    }else{
//     res.writeHead(404);
//     res.end('not found 404')
//    }
 
// });


// server.listen(5100,'127.0.0.1', ()=>{
//   console.log('server started at port 5100');
// })



// ///custom event

// let emitter = new user();

// emitter.on('userCreated', (id,name)=>{
//   console.log(`user with name: ${name} and  id: ${id} is added`);
// })

// emitter.emit('userCreated',11,'ram')


// till L23

// const fs = require('fs');
// const http = require('http');


// const server = http.createServer();

// server.listen(5100,'127.0.0.1', ()=>{
//   console.log('server started at port 5100');
// })


// server.on('request',(req,res)=>{

//   let file = fs.createReadStream('./files/large-file.txt')

//   file.on('data',(chunk)=>{
//     res.write(chunk);
//   });
//   file.on('end',()=>{
//     res.end()
//   })
//   file.on('error',(err)=>{
//     res.end(err.message);
//   })
  
// })


/// L23
// const fs = require('fs');
// const http = require('http');


// const server = http.createServer();

// server.listen(5100,'127.0.0.1', ()=>{
//   console.log('server started at port 5100');
// })


// server.on('request',(req,res)=>{

//   let file = fs.createReadStream('./files/large-file.txt');
//   file.pipe(res)
  
// })


//till L29

// const fs = require('fs')

// console.log('top leve log started');


// //stored 2nd phase
// fs.readFile('files/input.txt',()=>{
//   console.log('readfile successfully');

//   //stored in 1st phase
// setTimeout(() => {
//   console.log('setTime  callback out execute');
// }, 0);

// //stored in 3rd phase
// setImmediate(()=>{
//   console.log('set imediate callback execute');
// });

// process.nextTick(()=>{console.log('nexttick execute');})

// })


// console.log('top level log complete');



/// till L42

// const express = require('express');
// const fs = require('fs');
// const movies = JSON.parse(fs.readFileSync('data/movies.json'))

// const app = express();
// app.use(express.json()); //midelware

// const logger = (req,res,next)=>{
//     console.log('midelware called');
//     next()
// }
// app.use(logger);
// app.use((req,res,next)=>{
//   req.requestedAt = new Date().toISOString();
//   next()
// })
// //app.use(cors());

// //router handler functions
// const getAllMovies = (req,res)=>{
//   res.status(200).json({
//     status : 'success',
//     requestedAt: req.requestedAt,
//     count : movies.length,
//     data : {
//       movies: movies
//     }
//   })
// }

// const addNewMovie = (req,res)=>{

//   const newID = movies[movies.length-1].id + 1; //create id for new added

//   let newMovie = Object.assign({id:newID}, req.body); //make movie object

//   movies.push(newMovie); //push data in movie

//   fs.writeFile('data/movies.json', JSON.stringify(movies), ()=>{
//     res.status(201).send({
//       status:'success',
//       data:{
//         movie: newMovie
//       }
//     })
//   })
// }
// const getMovieById = (req,res)=>{

//   let id = req.params.id *1 //convert id into num

//   let movie = movies.find(el => el.id===id);

//   if(!movie){
//    return res.status(404).json({
//       status:'failed',
//       message: `movie with id: ${id} not found`
//     })
//   }

//   res.status(200).json({
//     status:'success',
//     data:{
//       movie:movie
//     }
//   })

// }

// const updateMovie = (req,res)=>{
//   let id = req.params.id *1;

//   let movieToUpdate = movies.find(el => el.id === id);
//   let index = movies.indexOf(movieToUpdate)

//   Object.assign(movieToUpdate, req.body);
//   movies[index] = movieToUpdate;

//   if(!movieToUpdate){
//     return res.status(404).json({
//       status:'failed',
//       message: `movie with id: ${id} not found`
//     })
//   }

//   fs.writeFile('data/movies.json',JSON.stringify(movies),(err)=>{
//     res.status(200).json({
//       status:'success',
//       data:{
//         movie: movieToUpdate
//       }
//     })
//   })
// }

// const deleteMovie = (req,res)=>{
//   const id = req.params.id *1;
//   const movieToDelete = movies.find(el=> el.id===id);

//   const index = movies.indexOf(movieToDelete);

//   movies.splice(index,1);

//   if(!movieToDelete){
//     return res.status(404).json({
//       status:'failed',
//       message: `movie with id: ${id} not found to delete`
//     })
//   }

//   fs.writeFile('data/movies.json',JSON.stringify(movies),(err)=>{
//     res.status(204).json({
//       status:'success',
//       data:{
//         movie: null
//       }
//     })
//   })
// }

// // Get req
// // app.get('/api/v1/movies',getAllMovies);
// //post req
// // app.post('/api/v1/movies',addNewMovie);
// //get by id
// // app.get('/api/v1/movies/:id',getMovieById)
// //patch request
// // app.patch('/api/v1/movies/:id',updateMovie)
// //delete request
// // app.delete('/api/v1/movies/:id',deleteMovie)

// app.route('/api/v1/movies').get(getAllMovies).post(addNewMovie);
// app.route('/api/v1/movies/:id').get(getMovieById).patch(updateMovie).delete(deleteMovie)



// let port = 5100;
// app.listen(port,()=>{
//   console.log('server started at port 5100');
// })