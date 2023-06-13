import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
    name : {type : String , required : true},
    ingredients : [{type : String , required : true}],
    directions : {type : String , required : true},
    imageUrl : {type : String },
    servings : {type : Number , required : true},
    prepTime : {type : Number , required : true},
    cookTime : {type : Number , required : true},
    kitchen : {type : String },
    createdAt : {type : Date ,default : Date.now},
    userOwner : {
        type : mongoose.Schema.Types.ObjectId ,
         required : true ,
          ref : "users"
         },
})

export const RecipeModel = mongoose.model("recipes",RecipeSchema);