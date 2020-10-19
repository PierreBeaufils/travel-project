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

    editTraveler: async (req, res) => {
        const traveler = await Traveler.findOne(req.params.id);

        const travelerToEdit = new Traveler(traveler);

        if (travelerToEdit) {
            travelerToEdit.update(req.body);
            await travelerToEdit.save();
            res.json(travelerToEdit)
        }
    }, 

    deleteTraveler: async (req,res)=> {
        const traveler = await Traveler.findOne(req.params.id);
        // console.log(traveler.id);
        if (traveler) {
            const travelerToDelete = new Traveler(traveler);
            await travelerToDelete.delete();
            res.json ('suppression effectuée');
        } else {
            res.json('Suppression impossible')
        };
    }    
};

module.exports = travelerController