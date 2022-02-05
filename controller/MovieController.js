var Movies=require('../models/movies');

module.exports={
    getMovies:async(req,res,next)=>{
        const movie=await  Movies.find();
        res.json({result:movie.map(res=>{
            return {
                id:res.id,
                name:res.name,
                score:res.score
            }
        })})
    },

    insertMovie:async(req,res)=>{
  const movie= await new Movies({
      name:req.body.name,
      score:req.body.score,
  }).save()
  res.json({"res":"added with sucess",
    "name":movie.name,  
});
    }
}