const Traveler = require('../models/Traveler');
const bcrypt = require ('bcrypt');

const loginController = {
    doLogin: async (req, res) => {
        console.log(req.body);
        const user = await Traveler.findByEmail(req.body.email)
        if (!user){
            res.json('utilisateur introuvable');
        } else {

            const validPwd = bcrypt.compareSync(req.body.password, user.password); 
            
            if (!validPwd){
                res.json('le mot de passe est incorrect');                
            } else {
                req.session.user = {
                    firstname : user.first_name,
                    lastname : user.last_name,
                    email: user.email,
                    role: user.role
                };

                if (req.body.remember) {
                    req.cookie.expires = new Date (Date.now() + 60*60*24)
                };
                
                res.json(user);
                // res.redirect('/')
            }            
        }
    },

    doSignup: async (req, res) => {
        console.log(req.body);
        const user = await Traveler.findByEmail(req.body.email)
        if (user) {
            res.json ('cette adresse email existe déjà');
        } else {
            if (req.body.password !== req.body.passwordConfirm) {
                res.json('la confirmation du mot de passe est incorrecte');
            } else {
                const hashPwd = bcrypt.hashSync(req.body.password, 10);

                const newUser = new Traveler({
                    first_name: req.body.firstname,
                    last_name: req.body.lastname,
                    email: req.body.email,
                    password: hashPwd,                     
                });

                await newUser.saveAllTravelComponent();

                res.json('signup réussi');
            }            
        }
    },

    logout: (req, res) => {
        req.session.user = false;
        res.redirect('/');
    },
};

module.exports = loginController;