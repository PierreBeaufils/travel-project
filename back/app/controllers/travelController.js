const Accommodation = require("../models/Accomodation");
const Activity = require("../models/Activity");
const Transport = require("../models/Transport");
const Travel = require("../models/Travel");


const travelController = {
    createTravel: async (req,res) => {
        const newTravel = new Travel(req.body);
        const savedTravel = await newTravel.saveAllTravelComponent();
        res.json(savedTravel);
        // Theme / destination / date départ / date de fin
    },
    editTravel: async (req,res) => {
        const travelToEdit = await travel.findOneTravelComponent(null,req.params.id);
        const travelEdited = await new Travel(travelToEdit);
        travelEdited.update(req.body);
        res.json(await travelEdited.saveAllTravelComponent());
    },
    showAccomodations: async (req, res) =>{
        const travelId = req.params.id ;
        const travelAccomodations = await Accommodation.findAllTravelComponent(travelId);
        res.json(travelAccomodations);
    },
    showTransport: async (req, res) =>{
        const travelId = req.params.id ;
        const travelTransport = await Activity.findAllTravelComponent(travelId);
        res.json(travelTransport);
    },
    showActivity: async (req, res) =>{
        const travelId = req.params.id ;
        const travelActivity = await Transport.findAllTravelComponent(travelId);
        res.json(travelActivity);
    },

    createAccomodation: async (req,res) => {
        const newAcco = new Accommodation(req.body);
        const savedAcco = await newAcco.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    createActivity: async (req,res) => {
        const newActiv = new Activity(req.body);
        const savedActiv = await newActiv.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    createTransport: async (req,res) => {
        const newTransp = new Transport(req.body);
        const savedTransp = await newTransp.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    editAccomodation: async (req,res) => {
        const accoToEdit = await Accommodation.findOneTravelComponent(req.params.id,req.params.accoId);
        const accoEdited = await new Accommodation(accoToEdit);
        accoEdited.update(req.body);
        res.json(await accoEdited.saveAllTravelComponent());
    },
    editTransport: async (req,res) => {
        const transportToEdit = await Transport.findOneTravelComponent(req.params.id,req.params.transportId);
        const transportEdited = await new Transport(transportToEdit);
        transportEdited.update(req.body);
        res.json(await transportEdited.saveAllTravelComponent());
    },
    editActivity: async (req,res) => {
        const activityToEdit = await Activity.findOneTravelComponent(req.params.id,req.params.activityId);
        const activityEdited = await new Activity(activityToEdit);
        activityEdited.update(req.body);
        res.json(await activityEdited.saveAllTravelComponent());
    },
    
    delete: async (req,res) => {
        const travelToFind = await Travel.findOneTravelComponent(null,req.params.id);
        const travelToDelete = new Travel(travelToFind);
        await travelToDelete.delete();
        res.json("suppresion effectuée");
    }
};

module.exports = travelController ;