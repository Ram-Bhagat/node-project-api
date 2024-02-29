const Movies = require('./../model/moviesModel')



//router handler functions
exports.getAllMovies = async (req,res)=>{
  try {
    let queryStr = JSON.stringify(req.query)
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)
    const queryObj = JSON.parse(queryStr)
    
    let query = Movies.find(queryObj);
  
    // Sorting logic
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }else{
      query = query.sort('-createdAt')
    }
  
    // Field limiting (projection) logic
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }else{
      query = query.select('-__v')
    }


    //pagination
    const page = req.query.page *1 || 1;
    const limit = req.query.limit *1 ||10;
    const skip = (page -1) * limit
    query = query.skip(skip).limit(page);

    if(req.query.page){
      const movieCount = await Movies.countDocuments();
      if(skip >= movieCount){
        throw new Error('No more movie data')
      }
    }
  
    const movies = await query;



    res.status(200).json({
      status: "success",
      count: movies.length,
      data: {
        movies
      }
    });
  } catch (error) {
  res.status(404).json({
   status:'failed',
   data: error.message
  })
}
  }
  

  exports.addNewMovie = async (req,res)=>{ 
try {
     const movie = await Movies.create(req.body);
     res.status(201).json({
      status:"success",
      data:{
        movie
      }
     })
} catch (error) {
   res.status(400).json({
    status:'failed',
    data: error.message
   })
}
  }
  

  exports.getMovieById = async (req,res)=>{
    try {
      const movie = await Movies.findById(req.params.id);
      res.status(200).json({
       status:"success",
       data:{
         movie
       }
      })
  } catch (error) {
    res.status(404).json({
     status:'failed',
     data: error.message
    })
  }
  }
  
  exports.updateMovie = async (req,res)=>{
    try {
      const updateMovie = await Movies.findByIdAndUpdate(req.params.id,req.body, {new :true ,runValidators :true});
     res.status(200).json({
      status:"success",
      data:{
        movie:updateMovie
      }
     })
 } catch (error) {
   res.status(404).json({
    status:'failed',
    data: error.message
   })
 }
  }
  
  exports.deleteMovie =async (req,res)=>{
    try {
       await Movies.findByIdAndDelete(req.params.id);
      res.status(204).json({
       status:"success",
      })
  } catch (error) {
    res.status(404).json({
     status:'failed',
     data: error.message
    })
  }
  }
  