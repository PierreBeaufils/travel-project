const Traveler = require('../models/Traveler');
const bcrypt = require ('bcrypt');

const loginController = {
    loginForm: async(req, res) => {

    },

    doLogin: async (req, res) => {
        const user = await Traveler.findByEmail(req.body.email)
        if (!user){
            res.json('utilisateur introuvable');
        } else {
            if (req.body.password !== user.password){
                res.json('le mot de passe est incorrect');                
            } else {
                req.session.user = {
                    firstname : user.first_name,
                    lastname : user.last_name,
                    email: user.email,
                    role: user.role
                }

                if (req.body.remember) {
                    req.cookie.expires = new Date (Date.now() + 60*60*24)
                }
                res.json(user);
                res.redirect('/')
            }            
        }
    },
    
    signupForm: (req, res) => {

    },

    doSignup: async (req, res) => {
        const user = await Traveler.findByEmail(req.body.email)
        if (user) {
            res.json ('cet adresse email existe déjà');
        } else {
            
        }

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

module.exports = loginController;