const Accommodation = require("../models/Accommodation");
const Activity = require("../models/Activity");
const Transport = require("../models/Transport");
const Travel = require("../models/Travel");
const Task = require ("../models/Task");
const Traveler = require("../models/Traveler");
const Document = require("../models/Document");
const travel_has_traveler = require("../models/Travel_has_travelers");

const objectModel = [Accommodation,Activity,Transport,Travel, Task, Traveler, travel_has_traveler];


const travelController = {
    createTravel: async (req,res) => {
        const newTravel = new Travel(req.body);
        const savedTravel = await newTravel.saveAllTravelComponent();

        const travel_id = savedTravel.id;
        const traveler_id = req.body.owner;

        const newTravelerToTravel = new travel_has_traveler({travel_id, traveler_id});
        newTravelerToTravel.saveTravelerIntoTravel();

        res.json('Voyage créé');
        // Theme / destination / date départ / date de fin
    },
    showAllInfos: async (req,res) => {
        const travelId = req.params.id;
        const travelinfos = {};
        travelinfos.infos = await Travel.findOneTravelComponent(null,travelId);
        if (travelinfos.infos) {
            travelinfos.accommodation = await Accommodation.findAllTravelComponent(travelId);
            travelinfos.activity = await Activity.findAllTravelComponent(travelId);
            travelinfos.transport = await Transport.findAllTravelComponent(travelId);
            travelinfos.documents =  travelController.showDocuments(req,res,travelinfos);
        } else {
            res.status(404).json('ce voyage n\'existe pas');
        }
    },
    editTravel: async (req,res) => {
        const travelToEdit = await Travel.findOneTravelComponent(null,req.params.id);
        const travelEdited = await new Travel(travelToEdit);
        travelEdited.update(req.body);
        await travelEdited.saveAllTravelComponent();
        res.json('voyage mis à jour')
    },
    showTravels: async (req, res) =>{
        const allTravels = await Travel.findAllTravelComponent();
        
        if (allTravels) { 
            res.json(allTravels);
        } else {
            res.status(404).json ('Il n\'existe pas de voyage');
        };
    },
    showAccommodations: async (req, res) =>{
        const travelId = req.params.id ;
        const travelAccommodations = await Accommodation.findAllTravelComponent(travelId);
        
        if (travelAccommodations.length > 0) { 
            res.json(travelAccommodations);
        } else {
            res.status(404).json ('Ce voyage ne comporte pas encore d\'hébergements');
        };
    },
    showTravelers: async (req, res) =>{
        const travelId = req.params.id ;
        const travelersInTravel = await travel_has_traveler.findTravelersByTravel(travelId);
        // console.log(travelersInTravel);
        
        if (travelersInTravel.length > 0) { 
            res.json(travelersInTravel);
        } else {
            res.status(404).json ('Ce voyage ne comporte pas encore de voyageurs');
        };
    },
    showTransport: async (req, res) =>{ 
        const travelId = req.params.id ;
        const travelTransport = await Transport.findAllTravelComponent(travelId);

        if (travelTransport.length > 0) { 
            res.json(travelTransport);
        } else {
            res.status(404).json ('Ce voyage ne comporte pas encore de transports');
        };
    },
    showActivity: async (req, res) =>{
        const travelId = req.params.id ;
        const travelActivity = await Activity.findAllTravelComponent(travelId);

        if (travelActivity.length > 0) { 
            res.json(travelActivity);
        } else {
            res.status(404).json ('Ce voyage ne comporte pas encore d\'activités');
        };
    },
    showTask: async (req, res) =>{
        const travelId = req.params.id ;
        const travelTask = await Task.findAllTravelComponent(travelId);

        if (travelTask.length > 0) { 
            res.json(travelTask);
        } else {
            res.status(404).json ('Ce voyage ne comporte pas encore de tâches');
        };
    },
    showUserTravels : async (req,res) =>{
        const travelerId = req.params.id;
        const userTravels = await Travel.findAllTravels(travelerId);
        if (userTravels) {
            res.json(userTravels);
        } else {
            res.status(404).json('ce voyageur n\'appartient à aucun voyage')
        }
    },
    showDocuments : async (req,res,travelinfos) => {
        // Je recupere l'id du voyage
        const prefix = req.params.id + "/public/";
        const documents = await Document.getAllPublic(prefix);
        const documentsToShow = [];
        for (let object of documents.Contents) {
            if (object.Size != 0) {
            object.travel_id = req.params.id;
            let documentToPush = await new Document(object);

            delete documentToPush.ETag ;
            delete documentToPush.StorageClass;
            documentsToShow.push(documentToPush);
        }
        }
        travelinfos.documents = documentsToShow;
        // res.json(documentsToShow);
        res.json(travelinfos);

    },

    createAccommodation: async (req,res) => {
        const newAcco = new Accommodation(req.body);
        newAcco.travel_id = req.params.id;
        const savedAcco = await newAcco.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    createActivity: async (req,res) => {
        const newActiv = new Activity(req.body);
        newActiv.travel_id = req.params.id;
        const savedActiv = await newActiv.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    createTransport: async (req,res) => {
        const newTransp = new Transport(req.body);
        newTransp.travel_id = req.params.id; 
        const savedTransp = await newTransp.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    createTask: async (req,res) => {
        const newTask = new Task(req.body);
        newTask.travel_id = req.params.id;
        const savedTask = await newTask.saveAllTravelComponent();
        res.json("Ajout effectué");
    },
    createDocument: async (req,res) => {
        console.log(req.files);
        console.log(req.body.Key);
        const nameOfFile = req.files[0].originalname || req.body.name;
        console.log(nameOfFile);
        const uploadParams = {
            Body: req.files[0].buffer,
            Key: `${req.params.id}/public/${nameOfFile}`,
            travel_id: req.params.id,
            ACL: "public-read"
        }
        const createdDocument = new Document(uploadParams);
        createdDocument.uploadDoc();
        res.json("le document a bien été ajouté !");
    },

    addTravelers: async (req, res) => {
        const newTraveler = new travel_has_traveler(req.body);
        // console.log("newTraveler : ", newTraveler);
        newTraveler.travel_id = req.params.id;
        const addedTraveler = await newTraveler.saveTravelerIntoTravel();
        res.json("ajout effectué");
    },
    editAccommodation: async (req,res) => {
        const accoToEdit = await Accommodation.findOneTravelComponent(req.params.id,req.params.accoId);
        if (accoToEdit) {
            const accoEdited = await new Accommodation(accoToEdit);
            accoEdited.update(req.body);
            accoEdited.saveAllTravelComponent();
            res.json("Hébergement mis à jour");  
        } else {
            res.status(404).json('cet hébergement ne fait pas partie de ce voyage')
        }        
    },
    editTransport: async (req,res) => {
        const transportToEdit = await Transport.findOneTravelComponent(req.params.id,req.params.transportId);
        if (transportToEdit) {
            const transportEdited = await new Transport(transportToEdit);
            transportEdited.update(req.body);
            transportEdited.saveAllTravelComponent();
            res.json("Transport mis à jour");  
        } else {
            res.status(404).json ('Ce transport ne fait pas partie de ce voyage')
        }
    },
    editActivity: async (req,res) => {
        const activityToEdit = await Activity.findOneTravelComponent(req.params.id,req.params.activityId);
        if (activityToEdit) {
            const activityEdited = await new Activity(activityToEdit);
            activityEdited.update(req.body, req.params.id);
            activityEdited.saveAllTravelComponent();
            res.json("Activité mise à jour");  
        } else {
            res.status(404).json('Cette activité ne fait pas partie de ce voyage');
        }
    },
    editTask: async (req,res) => {
        const taskToEdit = await Task.findOneTravelComponent(req.params.id,req.params.taskId);
        if (taskToEdit) {
            const taskEdited = await new Task(taskToEdit);
            taskEdited.update(req.body, req.params.id);
            taskEdited.saveAllTravelComponent();
            res.json("Task mise à jour");     
        } else {
            res.status(404).json('cette tâche ne fait pas partie de ce voyage');
        }
    },
    delete: async (req,res) => {
        const travelToFind = await Travel.findOneTravelComponent(null,req.params.id);
        if (travelToFind) {
            const travelToDelete = new Travel(travelToFind);
            await travelToDelete.delete();
            res.json("suppression effectuée");    
        } else {
            res.status(404).json('cette entité n\'existe pas')
        }
    },
    deleteTravelerFromTravel : async (req, res) => {
        const travelerToFind = await travel_has_traveler.findOneTravelerByTravel(req.params.id, req.params.travelerId);
        // console.log(travelerToFind);
        if (travelerToFind) {
            const travelerToDelete = new travel_has_traveler(travelerToFind);
            // console.log(travelerToDelete);
            await travelerToDelete.deleteTraveler()
            res.json("suppression effectuée")
        } else {
            res.status(404).json('ce voyageur n\'est pas inscrit sur ce voyage')
        }
    },
    deleteEntity: async (req,res) => {
        let entity = req.params.entity;
        // entity = entity.charAt(0).toUpperCase() + entity.slice(1);
        let entityToUse ;

        if (entity === 'document') {
            const documentToDelete = req.body ;
            const deletedDocument = new Document(documentToDelete);
            const deleteConfirmation = await deletedDocument.deleteFile();
            res.json(deleteConfirmation);
        }
        else {
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
            res.status(404).json("cette entité n'existe pas dans ce voyage");
        }}
    },

    deleteDocument: async (req,res) => {
        const documentToDelete = req.body ;
        const deletedDocument = new Document(documentToDelete);
        deletedDocument.deleteFile();
    }
};

module.exports = travelController ;