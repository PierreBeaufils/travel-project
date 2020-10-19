const accommodation = require("../models/Accomodation");
const activity = require("../models/Activity");
const transport = require("../models/Transport");
const traveler = require("../models/Traveler");
const task = require('../models/Task');


const mainController = {
    test: async (req, res) =>{

        
       const task = await Task.findOne(req.param.id);
        const taskToSave = new Task(task);
        accommodationToSave.saveAllTravelComponent(req.params.id);

        // let travelAccomodations = await accommodation.findAllTravelComponent(4);
        // res.json(travelAccomodations);
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