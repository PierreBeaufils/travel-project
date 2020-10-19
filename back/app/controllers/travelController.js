const accommodation = require("../models/Accomodation");
const activity = require("../models/Activity");
const transport = require("../models/Transport");


const travelController = {
    showAccomodations: async (req, res) =>{
        const travelId = req.params.id ;
        const travelAccomodations = await accommodation.findAllTravelComponent(travelId);
        res.json(travelAccomodations);
    },
    showTransport: async (req, res) =>{
        const travelId = req.params.id ;
        const travelTransport = await activity.findAllTravelComponent(travelId);
        res.json(travelTransport);
    },
    showActivity: async (req, res) =>{
        const travelId = req.params.id ;
        const travelActivity = await transport.findAllTravelComponent(travelId);
        res.json(travelActivity);
    }
};

module.exports = travelController ;