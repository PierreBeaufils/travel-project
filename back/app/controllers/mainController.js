const accommodation = require("../models/Accomodation");


const mainController = {
    test: async (req, res) =>{
        let travelAccomodations = await accommodation.findAllTravelComponent(4);
        res.json(travelAccomodations);
    }
};

module.exports = mainController ;