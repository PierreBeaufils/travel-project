const Traveler = require('../models/Traveler')

const travelerController = {

    allTravelers: async (req,res) => {
        const travelers = await Traveler.findAll();
        res.json(travelers);
    },

    oneTraveler: async (req,res) => {
        const traveler = await Traveler.findOne(req.params.id)
        if (traveler) {
            res.json(traveler);
        } else {
            res.status(404).json('Ce voyageur n\'existe pas')
        }
    },

    newTraveler: async (req,res)=> {
        const newTraveler = new Traveler(req.body);
        await newTraveler.save();
        res.json(newTraveler);
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