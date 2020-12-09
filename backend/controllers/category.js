const Category = require("../models/category");
const { success, fail, validation } = require("../utils/helper");

exports.getAllCategory = async(req, res)=> {
    try {
        const categories = await Category.findAll()
        res.status(200).json(success( "OK", {data: categories}, res.statusCode))
        return
    } catch (error) {
        console.log(error);
        res.status(500).json(fail(error, res.statusCode));
        return;
    }
}


exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    res.status(200).json(success("OK", { data: category }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
}


exports.addCategory = async( req, res) => {
    try {
        const name = req.body.name

        // if(!name){
        //      res.status(501).json(validation("Please input name field"));
        // }

        const category = await Category.create({
            name: name
        })
         res.status(200).json(success("OK", { data: category }, res.statusCode));
        
    } catch (error) {
        console.log(error);
        res.status(500).json(fail(error, res.statusCode));
        return;
    }
}