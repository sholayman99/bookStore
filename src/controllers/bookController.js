const bookModel = require("../models/bookModel");




//find all book

exports.ReadAllBook = async(req,res) =>{
    try{
        let result = await bookModel.find({});
        res.status(200).json({message:"success" , data:result});
    }catch (e) {
        res.status(400).json({message:"fail" , data:e})  ;
    }
};

//create book
exports.CreateBook = async(req,res) =>{
    try{
       let reqBody = req.body ;
       let result = await bookModel.create(reqBody);
        res.status(200).json({message:"success" , data:result});
    }catch (e) {
        res.status(400).json({message:"fail" , data:e})  ;
    }
};


//update book

exports.UpdateBook = async(req,res) =>{
    try{
        let id = req.params.id ;
        let reqBody = req.body ;
        let result = await bookModel.updateOne({_id:id},reqBody,{upsert:true}  );
        res.status(200).json({message:"success" , data:result});
    }catch (e) {
        res.status(400).json({message:"fail" , data:e})  ;
    }
}

//remove book
exports.RemoveBook = async(req,res) =>{
    try{
        let id = req.params.id ;
        let result = await bookModel.deleteOne({_id:id} );
        res.status(200).json({message:"success" , data:result});
    }catch (e) {
        res.status(400).json({message:"fail" , data:e})  ;
    }
}

//find data by id
exports.ReadSingleBook = async(req,res) =>{
    try{
        let id = req.params.id ;
        let result = await bookModel.findOne({_id:id} );
        res.status(200).json({message:"success" , data:result});
    }catch (e) {
        res.status(400).json({message:"fail" , data:e})  ;
    }
}
//find data by keyword

exports.FindByKeyWord =async(req,res) =>{

    try{
      let searchRegex = { "$regex" : req.params.keyWord , "$options":"i" }
      let searchParams = [ { title: searchRegex } , {shortDes: searchRegex}] ;
      let searchQuery = {$or:searchParams} ;

      let matchStage = {$match: searchQuery};
      
      let result = await bookModel.aggregate([matchStage]);

      res.status(200).json({message:"success" , data:result});
    }catch(e){
      res.status(400).json({message:"fail" , data:e.message})  ;
    }
}


//find data by category

exports.FindByCategory = async (req,res) =>{
    try{
       let category = req.params.category ;
       let matchStage = {$match: {category:category}};
       let result = await bookModel.aggregate([matchStage]);

       res.status(200).json({message:"success" , data:result});
    }catch (e) {
        res.status(400).json({message:"fail" , data:e.message})  ;
    }
}