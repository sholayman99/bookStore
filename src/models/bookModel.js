const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({

        title : { type: String, required: true },
        image :{ type: String, required: true },
        shortDes : { type: String , required: true},
        details:  { type: String , required: true},
        price : { type: Number, required: true , min: 1 },
        stock : { type: Number, required: true, min: 0 },
        category : { type: String , required: true },
        author : { type: String , required: true },
        rating : { type:Number  , required: true },
        remark : { type: String , required: true },
        edition:{type:String, required:true}

    },
    { versionKey:false , timestamps:true }

);

const bookModel = mongoose.model("books", bookSchema);
module.exports = bookModel;