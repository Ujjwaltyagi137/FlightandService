
const {City} = require('../models/index');

class CityRepository{

    async createCity({name}){
    try{
        const city = await City.create({name});
        return city;
    }
    catch(error){
            console.log("Semething went wrong");
            throw {error};
    }
    }

    async deleteCity( cityid){
    try{
        await City.destroy({
            where:{
                id : cityid
            }
        });
        return true;
    }
    catch(error){
        console.log("Semething went wrong");
        throw {error};
    }
}

    async updateCity(cityid, data){
        try{
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;

        }
        catch(error){
             console.log("Semething went wrong");
        throw {error};
        }

    }

    async getCity(cityid){
        try{
                const city = await City.findByPk(cityid);
                return city;
        }
        catch(error){
        console.log("Semething went wrong");
        throw {error};
        }

    }
}

module.exports = CityRepository;