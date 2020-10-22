const Traveler = require('../models/Traveler');
const bcrypt = require('bcrypt');
const mailApp = require('../services/nodemailer');
const crypt = require("../services/crypt");

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

    doSignup: async (req, res,next) => {
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
                next();
            }            
        }
    },

    logout: (req, res) => {
        req.session.user = false;
        res.redirect('/');
    },

    verifyEmail: async (req,res) => {
        const userToVerify = await Traveler.findByEmail(req.body.email);
        const tokenToSend = crypt.getToken(userToVerify.id,Date.now());
        mailApp.transporter.sendMail(mailApp.messageConstructor(userToVerify.email,tokenToSend));
        console.log(tokenToSend);
    },

    verifyToken: async (req,res) => {
       const decryptedToken = crypt.decryptText(req.query.token).split(new RegExp('-'));
       console.log(decryptedToken);
       if (Date.now() - decryptedToken[1] < 1000*60*60*24) {
           let travelerToValidate = await Traveler.findOneTravelComponent(null,decryptedToken[0]);
        //    travelerToValidate.email_check = true;
            travelerToValidate = new Traveler(travelerToValidate);
           travelerToValidate.update({"email_check": true});
           travelerToValidate.saveAllTravelComponent();
       } else {console.log("c'est raté");
       console.log(Date.now() - decryptedToken[1]);
    }
       
    }



    // méthode pour vérifier l'email en détail :
        //générer un timestamp concatener avec l'id de l'utilisateur Passé dans la session ?
        // envoyer un mail a l'utilisateur contenant la valeur crypté, et une url a suivre pour valider.
        // Lorsque l'utilisateur visite l'url la valeur crypté est passé en parametre d'url et extraite pour être comparé
        // 
        
};

module.exports = loginController;