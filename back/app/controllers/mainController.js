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
    showAllInfos: async (req,res) => {
        const travelId = req.params.id;
        let  travelinfos = {};
        travelinfos = await Travel.findOneTravelComponent(null,travelId);
        if (travelinfos) {
            travelinfos.prices = await Travel.findPrice(travelId);
            travelinfos.traveler = await travel_has_traveler.findTravelersByTravel(travelId);
            travelinfos.transport = await Transport.findAllTravelComponent(travelId);
            travelinfos.accommodation = await Accommodation.findAllTravelComponent(travelId);
            travelinfos.activity = await Activity.findAllTravelComponent(travelId);
            travelinfos.task = await Task.findAllTravelComponent(travelId)
            res.json(travelinfos);
        } else {
            res.status(404).json('ce voyage n\'existe pas');
        }
    },

    showTravels: async (req, res) =>{
        let travelInfos = {};
        travelInfos = await Travel.findAllTravelComponent();
        
        if (travelInfos) { 
            res.json(travelInfos);
        } else {
            res.status(404).json ('Il n\'existe pas de voyage');
        };
    },
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
    editTravel: async (req,res) => {
        const travelToEdit = await Travel.findOneTravelComponent(null,req.params.id);
        const travelEdited = await new Travel(travelToEdit);
        travelEdited.update(req.body);
        await travelEdited.saveAllTravelComponent();
        res.json('voyage mis à jour')
    },
    deleteTravel: async (req,res) => {
        const travelToFind = await Travel.findOneTravelComponent(null,req.params.id);
        if (travelToFind) {
            const travelToDelete = new Travel(travelToFind);
            await travelToDelete.delete();
            res.json("suppression effectuée");    
        } else {
            res.status(404).json('cette entité n\'existe pas')
        }
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
    addTravelers: async (req, res) => {
        const newTraveler = new travel_has_traveler(req.body);
        // console.log("newTraveler : ", newTraveler);
        newTraveler.travel_id = req.params.id;
        const addedTraveler = await newTraveler.saveTravelerIntoTravel();
        res.json("ajout effectué");
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

    showEntity: async (req,res) => {
        let entity = req.params.entity;
        let entityToUse;

        for (let i = 0 ; i < objectModel.length ; i++) {
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };

        const entityToFind = await entityToUse.findAllTravelComponent(req.params.id);
        if (entityToFind.length > 0) {
            res.json (entityToFind);
        } else {
            res.status(404).json (`Il y a 0 ${entityToUse.tableName} dans ce voyage`);
        }
    },
    createEntity: async (req,res) => {
        let entity = req.params.entity;
        let entityToUse;

        for (let i = 0 ; i < objectModel.length ; i++) {
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };

        const newEntity = new entityToUse(req.body);
        newEntity.travel_id = req.params.id;

        await newEntity.saveAllTravelComponent();
        res.json('Ajout effectué');
    },
    editEntity: async (req,res) => {
        let entity = req.params.entity;
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

        const entityToEdit = await entityToUse.findOneTravelComponent(req.params.id,req.params.entityId);

        if (entityToEdit) {
            const editedEntity = await new entityToUse(entityToEdit);
            editedEntity.update(req.body);
            editedEntity.saveAllTravelComponent();
            res.json(`${entityToUse.tableName} mise à jour`)
        } else {
            res.status(404).json('mise à jour impossible')
        }
    }},

    deleteEntity: async (req,res) => {
        let entity = req.params.entity;
        let entityToUse ;
        
        for (let i = 0 ; i < objectModel.length ; i++) {
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };
        
        const entityToFind = await entityToUse.findOneTravelComponent(req.params.id,req.params.entityId);
        if (entityToFind) {
            const entityToDelete = new entityToUse(entityToFind);
            await entityToDelete.delete();
            res.json("suppresion effectuée");
        } else {
            res.status(404).json("cette entité n'existe pas dans ce voyage");
        }}
    ,

    
};

module.exports = travelController ;