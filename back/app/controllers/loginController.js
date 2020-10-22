const Traveler = require('../models/Traveler');
const bcrypt = require('bcrypt');

const loginController = {
    doLogin: async (req, res) => {
        const user = await Traveler.findByEmail(req.body.email)
        if (!user) {
            res.status(202).json('utilisateur introuvable');
        } else {

            const validPwd = bcrypt.compareSync(req.body.password, user.password);

            if (!validPwd) {
                res.status(202).json('le mot de passe est incorrect');
            } else {
                req.session.user = {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    role: user.role
                };

                // req.session.cookie.expires = new Date (Date.now() + 60*60*24);

                // if (req.body.remember) {
                //     req.cookie.expires = new Date (Date.now() + 60*60*24)
                // };

                res.status(200).json({ logged: true, session: req.session.user });
            }
        }
    },

    loginCheck: (req, res) => {
        if (req.session.user) {
            res.json({ logged: true, session: req.session.user });
        } else {
            res.json({ logged: false, session: {} });
        };
    },

    doSignup: async (req, res) => {
        const user = await Traveler.findByEmail(req.body.email)
        if (user) {
            res.status(202).json('cette adresse email existe déjà');
            // res.json ('cette adresse email existe déjà');
        } else {
            if (req.body.password !== req.body.password_confirm) {
                res.status(202).json('la confirmation du mot de passe est incorrecte');
            } else {
                const hashPwd = bcrypt.hashSync(req.body.password, 10);

                const newUser = new Traveler({
                    first_name: req.body.first_name,
                    last_name: req.body.last_Name,
                    email: req.body.email,
                    password: hashPwd,
                });

                await newUser.saveAllTravelComponent();

                res.json('signup réussi');
            }
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.json('tu es maintenant déconnecté');
    },
};

module.exports = loginController;