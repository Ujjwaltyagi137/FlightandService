const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async ( req , res )=>{
    try {
        const city =await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create",
            err: error
        });
    }
}

const destroy = async ( req , res )=>{
     try {
        const response =await cityService.deleteCity(req.param.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully delete a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete",
            err: error
        });
    }

}

const update = async ( req , res )=>{
     try {
         const response =await cityService.updateCity(req.param.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully update a city",
            err: {}
        });
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update",
            err: error
        });
    }

}

const get = async ( req , res )=>{
     try {
        const response =await cityService.getCity(req.param.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully patch a city",
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to find",
            err: error
        });
    }

}

module.exports = {
    create,
    destroy,
    update,
    get,
}