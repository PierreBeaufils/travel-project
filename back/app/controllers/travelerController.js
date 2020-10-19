const Traveler = require('../models/Traveler')

const travelerController = {

    allTravelers: async (req,res) => {
        const travelers = await Traveler.findAllTravelComponent();
        res.json(travelers);
    },

    // oneTraveler: async (req,res) => {
    //     const traveler = await Traveler.findOneTravelComponent(req.params.id)
    //     if (traveler) {
    //         res.json(traveler);
    //     } else {
    //         res.status(404).json('Ce voyageur n\'existe pas')
    //     }
    // },

    // Besoin ???? Pour qui et pour quoi ?

    newTraveler: async (req,res)=> {
        const newTraveler = new Traveler(req.body);
        await newTraveler.saveAllTravelComponent();
        res.json(newTraveler);
    },

    editTraveler: async (req,res) => {
        
        const traveler = await Traveler.findOneTravelComponent(null ,req.params.id);
        const travelerToEdit = new Traveler(traveler);
        travelerToEdit.update(req.body);
        travelerToEdit.saveAllTravelComponent();
    },

    deleteTraveler: async (req,res)=> {
        const traveler = await Traveler.findOne(req.params.id);
        const travelerToDelete = new Traveler(traveler);
        await travelerToDelete.delete();
        res.json ('suppression effectuée');

        // if (!traveler) {
        //     res.json('voyageur introuvable');
        // } else {
        //     await traveler.delete();
        //     res.json ('suppression effectuée');
        // }
    },

    loginForm: async(req, res) => {

    },

    doLogin: async (req, res) => {

    },
    
    signupForm: (req, res) => {

    },

    doSignup: async (req, res) => {

    },

    logout: (req, res) => {

    },

    profile: (req, res) => {
        
    },

    modifyProfile: (req, res) => {

    },

    doContact: (req, res) => {

    }
};

module.exports = travelerController
