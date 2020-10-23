const Accommodation = require("../models/Accommodation");
const Activity = require("../models/Activity");
const Transport = require("../models/Transport");
const Travel = require("../models/Travel");
const Task = require ("../models/Task");

const objectModel = [Accommodation,Activity,Transport,Travel, Task];


const travelController = {
    createTravel: async (req,res) => {
        const newTravel = new Travel(req.body);
        const savedTravel = await newTravel.saveAllTravelComponent();
        res.json(savedTravel);
        // Theme / destination / date départ / date de fin
    },
    showAllInfos: async (req,res) => {
        const travelId = req.params.id;
        const travelinfos = {};
        travelinfos.infos = await Travel.findOneTravelComponent(null,travelId);
        travelinfos.accommodation = await Accommodation.findAllTravelComponent(travelId);
        travelinfos.activity = await Activity.findAllTravelComponent(travelId);
        travelinfos.transport = await Transport.findAllTravelComponent(travelId);
        res.json(travelinfos);
    },

    editTravel: async (req,res) => {
        const travelToEdit = await travel.findOneTravelComponent(null,req.params.id);
        const travelEdited = await new Travel(travelToEdit);
        travelEdited.update(req.body);
        res.json(await travelEdited.saveAllTravelComponent());
    },
    showTravels: async (req, res) =>{
        const allTravels = await Travel.findAllTravelComponent();
        
        if (allTravels.length > 0) { 
            res.json(allTravels);
        } else {
            res.json ('Cet hébergement n\'existe pas');
        };
    },
    showAccommodations: async (req, res) =>{
        const travelId = req.params.id ;
        const travelAccommodations = await Accommodation.findAllTravelComponent(travelId);
        
        if (travelAccommodations.length > 0) { 
            res.json(travelAccommodations);
        } else {
            res.json ('Cet hébergement n\'existe pas');
        };
    },
    showTransport: async (req, res) =>{ 
        const travelId = req.params.id ;
        const travelTransport = await Transport.findAllTravelComponent(travelId);

        if (travelTransport.length > 0) { 
            res.json(travelTransport);
        } else {
            res.json ('Ce transport n\'existe pas');
        };
    },
    showActivity: async (req, res) =>{
        const travelId = req.params.id ;
        const travelActivity = await Activity.findAllTravelComponent(travelId);

        if (travelActivity.length > 0) { 
            res.json(travelActivity);
        } else {
            res.json ('Cette activité n\'existe pas');
        };
    },
    showTask: async (req, res) =>{
        const travelId = req.params.id ;
        const travelTask = await Task.findAllTravelComponent(travelId);

        if (travelTask.length > 0) { 
            res.json(travelTask);
        } else {
            res.json ('Cette tâche n\'existe pas');
        };
    },
    showUserTravels : async (req,res) =>{
        const travelerId = req.params.id;
        const userTravels = await Travel.findAllTravels(travelerId);
        res.json(userTravels);
    },
    createAccommodation: async (req,res) => {
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
    createTask: async (req,res) => {
        const newTask = new Task(req.body);
        const savedTask = await newTask.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    editAccommodation: async (req,res) => {
        const accoToEdit = await Accommodation.findOneTravelComponent(req.params.id,req.params.accoId);
        const accoEdited = await new Accommodation(accoToEdit);
        accoEdited.update(req.body);
        accoEdited.saveAllTravelComponent();
        res.json("Hébergement mis à jour");
    },
    editTransport: async (req,res) => {
        const transportToEdit = await Transport.findOneTravelComponent(req.params.id,req.params.transportId);
        const transportEdited = await new Transport(transportToEdit);
        transportEdited.update(req.body);
        transportEdited.saveAllTravelComponent();
        res.json("Transport mis à jour"); 
    },
    editActivity: async (req,res) => {
        const activityToEdit = await Activity.findOneTravelComponent(req.params.id,req.params.activityId);
        const activityEdited = await new Activity(activityToEdit);
        activityEdited.update(req.body);
        activityEdited.saveAllTravelComponent();
        res.json("Activité mise à jour"); 
    },
    editTask: async (req,res) => {
        const taskToEdit = await Task.findOneTravelComponent(req.params.id,req.params.taskId);
        const taskEdited = await new Task(taskToEdit);
        taskEdited.update(req.body);
        taskEdited.saveAllTravelComponent();
        res.json("Task mise à jour"); 
    },
    delete: async (req,res) => {
        const travelToFind = await Travel.findOneTravelComponent(null,req.params.id);
        const travelToDelete = new Travel(travelToFind);
        await travelToDelete.delete();
        res.json("suppresion effectuée");
    },
    deleteEntity: async (req,res) => {
        let entity = req.params.entity;
        // entity = entity.charAt(0).toUpperCase() + entity.slice(1);
        let entityToUse ;
        
        for (let i = 0 ; i < objectModel.length ; i++) {
            // console.log('objectModel[i].tableName', objectModel[i].tableName);
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };

        // console.log('entityToUse: ', entityToUse);
        // console.log('entityToUse.tableName: ', entityToUse.tableName);
        // console.log('req.params.id: ',req.params.id)
        // console.log('req.params.entityId: ',req.params.entityId)
        
        const entityToFind = await entityToUse.findOneTravelComponent(req.params.id,req.params.entityId);
        // console.log("entityToFind: ", entityToFind);
        if (entityToFind) {
            const entityToDelete = new entityToUse(entityToFind);
            await entityToDelete.delete();
            res.json("suppresion effectuée");
        } else {
            res.json("cette entité n'existe pas");
        }

    }
};

module.exports = travelController ;