const accommodation = require("../models/Accomodation");
const activity = require("../models/Activity");
const transport = require("../models/Transport");
const traveler = require("../models/Traveler");
const task = require('../models/Task');


const mainController = {
    test: async (req, res) =>{

    //     let accomodationToSave = {
        // name: "chateau du roi",
        // adress: "028 Hovde Junction",
        // city: "Hayama",
        // coordinate: "(38.1483676,39.1483676)",
        // information: "",
        // availability: "",
        // arrival_date: "2020-05-13 14:23:08", 
        // departure_date: "2020-12-03 00:04:24",
        // unit_price: 58.05,
        // quantity: 7,
        // travel_id: 15
    // };

    // 

    // {
        // "name": "Mongoose, banded",
        // "topic": "test",
        // "place": "43 Pennsylvania Alley", 
        // "duration": "34 minute",
        // "description": "test",
        // "date": "2020-11-15 15:36:47",
        // "unit_price": 32.78,
        // "quantity": 6,
        // "travel_id": 15
    //     }
        
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