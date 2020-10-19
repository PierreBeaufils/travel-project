 const mainController = require('./controllers/mainController');
 const travelerController = require('./controllers/travelerController');
 const adminController = require('./controllers/adminController');
 const travelController = require('./controllers/travelController');

const { Router } = require('express');

const router = Router();

router.get('/',mainController.test);
router.get('/test1',mainController.test3);
router.get('/test2',mainController.test2);

// Formulaire de login : affichage et traitement
router.get('/login', travelerController.loginForm);
router.post('/login', travelerController.doLogin);
// Formulaire de signup : affichage et traitement
router.get('/signup', travelerController.signupForm);
router.post('/signup', travelerController.doSignup);
// Déconnexion
router.post('/logout', travelerController.logout);
// Infos persos de l'utilisateur : affichage et traitement
router.get('/profile', travelerController.profile);
router.post('/profile', travelerController.modifyProfile);
// page de contact (mail prérempli)
router.post('/contact', travelerController.doContact);

router.delete('/travelers/:id', travelerController.deleteTraveler);

//cette route sera protégée par le middleware adminMW
//Seuls les utilisateurs avec un rôle admin pourront y avoir accès
// router.get('/admin', adminMW, adminController.admin);

// Page dashboard
// router.get('/dashboard', Controller)

// Créer un voyage
// router.post('/create-travel', travelController)

// router.get('/travel/:id', travelController)
// router.post('/travel/:id', travelController)
// router.patch('/travel/:id', travelController)
// router.delete('/travel/:id', travelController)

// infos liées à l'hébergement d'un voyage : affichage, insertion, modification suppression 
// router.get('/travel/:id/accomodation', travelController)
// router.post('/travel/:id/accomodation', travelController)
// router.patch('/travel/:id/accomodation', travelController)
// router.delete('/travel/:id/accomodation', travelController)

// infos liées aux activités d'un voyage : affichage, insertion, modification suppression 
// router.get('/travel/:id/activity', travelController)
// router.post('/travel/:id/activity', travelController)
// router.patch('/travel/:id/activity', travelController)
// router.delete('/travel/:id/activity', travelController)

// infos liées aux tâches d'un voyage : affichage, insertion, modification suppression 
// router.get('/travel/:id/task', travelController)
// router.post('/travel/:id/task', travelController)
// router.patch('/travel/:id/task', travelController)
// router.delete('/travel/:id/task', travelController)

// infos liées aux documents d'un voyage : affichage, insertion, modification suppression 
// router.post('/travel/:id/document', travelController)
// router.patch('/travel/:id/document', travelController)
// router.delete('/travel/:id/document', travelController)

// Routes optionnelles
// '/travel/:id/activity/:id'
// '/travel/:id/transport/:id'
// '/travel/:id/accomodation/:id'

module.exports = router;