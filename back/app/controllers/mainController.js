const accommodation = require("../models/Accommodation");
const activity = require("../models/Activity");
const transport = require("../models/Transport");
const traveler = require("../models/Traveler");
const task = require('../models/Task');


const mainController = {
    test: async (req, res) =>{

        
       const task = await Task.findOne(req.param.id);
        const taskToSave = new Task(task);
        accommodationToSave.saveAllTravelComponent(req.params.id);

        // let travelAccommodations = await accommodation.findAllTravelComponent(4);
        // res.json(travelAccommodations);
    },
    test2: async (req, res) =>{
        let travelAccommodations = await activity.findAllTravelComponent(6);
        res.json(travelAccommodations);
    },
    test3: async (req, res) =>{
        let travelAccommodations = await transport.findAllTravelComponent(4);
        res.json(travelAccommodations);
    }
};

module.exports = mainController ;