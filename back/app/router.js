 const mainController = require('./controllers/mainController');
 const travelerController = require('./controllers/travelerController');
 const adminController = require('./controllers/adminController');
 const travelController = require('./controllers/travelController');
 const loginController = require ('./controllers/loginController');

const { Router } = require('express');

const router = Router();

// router.post('/',mainController.test);

// router.patch('/',mainController.test);
// router.get('/test1',mainController.test3);
// router.get('/test2',mainController.test2);

router.get('/travelers', travelerController.allTravelers);
router.get('/traveler/:id', travelerController.getOneTraveler);
router.post('/traveler', travelerController.newTraveler);
router.patch('/traveler/:id', travelerController.editTraveler);
router.delete('/traveler/:id', travelerController.deleteTraveler);

router.get('/user-travels/:id', travelController.showUserTravels);


// Formulaire de login : affichage et traitement
router.post('/login', loginController.doLogin);

router.post('/isLogged', loginController.loginCheck);
// Déconnexion
router.post('/logout', loginController.logout);


// Formulaire de signup : affichage et traitement
router.post('/signup', loginController.doSignup,loginController.verifyEmail);
// Déconnexion

router.get('/mail', loginController.verifyToken);


// Infos persos de l'utilisateur : affichage et traitement
// router.get('/profile', travelerController.profile);
// router.post('/profile', travelerController.modifyProfile);
// page de contact (mail prérempli)


// router.get('/travel/id/travelers', travelerController.allTravelers);
// Voir tout les travelers associé à un voyage

//cette route sera protégée par le middleware adminMW
//Seuls les utilisateurs avec un rôle admin pourront y avoir accès
// router.get('/admin', adminMW, adminController.admin);

// Page dashboard
// router.get('/dashboard', Controller)

// Créer un voyage
router.post('/create-travel', travelController.createTravel);

router.get('/travel/:id', travelController.showAllInfos) //Toutes les datas du voyage Voyageurs + Acco + Transp + activities 
// router.post('/travel/:id', travelController) => Elle fait quoi ???
router.patch('/travel/:id', travelController.editTravel);
router.delete('/travel/:id', travelController.delete);

// infos liées à l'hébergement d'un voyage : affichage, insertion, modification suppression 
router.get('/travel/:id/accommodation', travelController.showAccommodations);
router.post('/travel/:id/accommodation', travelController.createAccommodation);
router.patch('/travel/:id/accommodation/:accoId', travelController.editAccommodation);
// router.delete('/travel/:id/accommodation', travelController)

// infos liées aux activités d'un voyage : affichage, insertion, modification suppression 
router.get('/travel/:id/activity', travelController.showActivity);
router.post('/travel/:id/activity', travelController.createActivity);
router.patch('/travel/:id/activity/:activityId', travelController.editActivity);
// router.delete('/travel/:id/activity', travelController)

// Info liés aux transport d'un voyage :
router.get('/travel/:id/transport', travelController.showTransport);
router.post('/travel/:id/transport', travelController.createTransport);
router.patch('/travel/:id/transport/:transportId', travelController.editTransport);

router.delete('/travel/:id/:entity/:entityId', travelController.deleteEntity);

// infos liées aux tâches d'un voyage : affichage, insertion, modification suppression 
// router.get('/travel/:id/task', travelController)
// router.post('/travel/:id/task', travelController)
// router.patch('/travel:id/task/:id', mainController.test);
// router.delete('/travel/:id/task', travelController)

// infos liées aux documents d'un voyage : affichage, insertion, modification suppression 
// router.post('/travel/:id/document', travelController)
// router.patch('/travel/:id/document', travelController)
// router.delete('/travel/:id/document', travelController)

// Routes optionnelles
// '/travel/:id/activity/:id'
// '/travel/:id/transport/:id'
// '/travel/:id/accommodation/:id'

module.exports = router;