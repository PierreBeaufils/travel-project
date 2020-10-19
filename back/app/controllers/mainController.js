const accommodation = require("../models/Accomodation");
const activity = require("../models/Activity");
const transport = require("../models/Transport");


const mainController = {
    test: async (req, res) =>{
        let travelAccomodations = await accommodation.findAllTravelComponent(4);
        res.json(travelAccomodations);
    },
    test2: async (req, res) =>{
        let travelAccomodations = await activity.findAllTravelComponent(6);
        res.json(travelAccomodations);
    },
    test3: async (req, res) =>{
        let travelAccomodations = await transport.findAllTravelComponent(4);
        res.json(travelAccomodations);
    }
};

module.exports = mainController ;