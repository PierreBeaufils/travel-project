 const mainController = require('./controllers/mainController');
 const travelerController = require('./controllers/travelerController');
 const adminController = require('./controllers/adminController');
 const travelController = require('./controllers/travelController');
 const loginController = require ('./controllers/loginController');

const { Router } = require('express');

const router = Router();

router.get('/',mainController.test);

router.get('/travelers', travelerController.allTravelers);
router.get('/travelers/:id', travelerController.oneTraveler);
router.post('/travelers', travelerController.newTraveler);
router.delete('/travelers/:id', travelerController.deleteTraveler);


// Formulaire de login : affichage et traitement
router.get('/login', loginController.loginForm);
router.post('/login', loginController.doLogin);
// Formulaire de signup : affichage et traitement
router.get('/signup', loginController.signupForm);
router.post('/signup', loginController.doSignup);
// Déconnexion
router.post('/logout', loginController.logout);
// Infos persos de l'utilisateur : affichage et traitement
router.get('/profile', loginController.profile);
router.post('/profile', loginController.modifyProfile);
// page de contact (mail prérempli)
router.post('/contact', loginController.doContact);

// //cette route sera protégée par le middleware adminMW
// //Seuls les utilisateurs avec un rôle admin pourront y avoir accès
// router.get('/admin', adminMW, adminController.admin);

// // Page dashboard
// router.get('/dashboard', Controller)

// // Créer un voyage
// router.post('/create-travel', travelController)

// router.get('/travel/:id', travelController)
// router.post('/travel/:id', travelController)
// router.patch('/travel/:id', travelController)
// router.delete('/travel/:id', travelController)

// // infos liées à l'hébergement d'un voyage : affichage, insertion, modification suppression 
// router.get('/travel/:id/accomodation', travelController)
// router.post('/travel/:id/accomodation', travelController)
// router.patch('/travel/:id/accomodation', travelController)
// router.delete('/travel/:id/accomodation', travelController)

// // infos liées aux activités d'un voyage : affichage, insertion, modification suppression 
// router.get('/travel/:id/activity', travelController)
// router.post('/travel/:id/activity', travelController)
// router.patch('/travel/:id/activity', travelController)
// router.delete('/travel/:id/activity', travelController)

// // infos liées aux tâches d'un voyage : affichage, insertion, modification suppression 
// router.get('/travel/:id/task', travelController)
// router.post('/travel/:id/task', travelController)
// router.patch('/travel/:id/task', travelController)
// router.delete('/travel/:id/task', travelController)

// // infos liées aux documents d'un voyage : affichage, insertion, modification suppression 
// router.post('/travel/:id/document', travelController)
// router.patch('/travel/:id/document', travelController)
// router.delete('/travel/:id/document', travelController)

// Routes optionnelles
// '/travel/:id/activity/:id'
// '/travel/:id/transport/:id'
// '/travel/:id/accomodation/:id'

module.exports = router;