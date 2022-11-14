const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const nutritionSchema = new mongoose.Schema({


    date: { type: Date, required: true },
    meal: { type: String, required: true },
    food: { type: String, required: true },
    calories: { type: String, required: true }
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Nutrition', nutritionSchema, 'Nutritionn');
//note capital S in the collection namedb.