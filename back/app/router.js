const mainController = require('./controllers/mainController');
const travelerController = require('./controllers/travelerController');
const loginController = require('./controllers/loginController');

const { Router } = require('express');

const router = Router();

// INFOS VOYAGEURS : affichage globale et individuel, insertion, modification et suppression
router.get('/travelers', travelerController.allTravelers);
router.get('/traveler/:id', travelerController.getOneTraveler);
router.post('/traveler', travelerController.newTraveler);
router.patch('/traveler/:id', travelerController.editTraveler);
router.delete('/traveler/:id', travelerController.deleteTraveler);
// VOYAGES LIES A UN VOYAGEUR : Voyages à venir auxquels un voyageur est inscrit
router.get('/user-travels/:id', mainController.showUserTravels);

// INFOS DU VOYAGE : affichage globale et individuel, insertion, modification et suppression
router.get('/travels', mainController.showTravels);
router.get('/travel/:id', mainController.showAllInfos);
router.post('/create-travel', mainController.createTravel);
router.patch('/travel/:id', mainController.editTravel);
router.delete('/travel/:id', mainController.delete);

// INFOS HEBERGEMENTS LIES A UN VOYAGE : affichage globale et individuel, insertion, modification et suppression 
router.get('/travel/:id/accommodation', mainController.showAccommodations);
router.post('/travel/:id/accommodation', mainController.createAccommodation);
router.patch('/travel/:id/accommodation/:accoId', mainController.editAccommodation);

// INFOS ACTIVITES LIEES A UN VOYAGE : affichage globale et individuel, insertion, modification et suppression 
router.get('/travel/:id/activity', mainController.showActivity);
router.post('/travel/:id/activity', mainController.createActivity);
router.patch('/travel/:id/activity/:activityId', mainController.editActivity);

// INFOS TRANSPORT LIES A UN VOYAGE : affichage globale et individuel, insertion, modification et suppression
router.get('/travel/:id/transport', mainController.showTransport);
router.post('/travel/:id/transport', mainController.createTransport);
router.patch('/travel/:id/transport/:transportId', mainController.editTransport);

// INFOS TACHES LIES A UN VOYAGE : affichage globale et individuel, insertion, modification et suppression 
router.get('/travel/:id/task', mainController.showTask);
router.post('/travel/:id/task', mainController.createTask);
router.patch('/travel/:id/task/:taskId', mainController.editTask);

// ROUTE FACTORISEE POUR SUPPRESSION de Hébergement, activité, transport, task liés à un voyage
router.delete('/travel/:id/:entity/:entityId', mainController.deleteEntity);

// INFOS DOCUMENTS LIES A UN VOYAGE : affichage globale et individuel, insertion, modification et suppression
// router.post('/travel/:id/document', travelController)
// router.patch('/travel/:id/document', travelController)
// router.delete('/travel/:id/document', travelController)

// Formulaire de login : traitement
router.post('/login', loginController.doLogin);
// MW de vérification de session de login
router.post('/isLogged', loginController.loginCheck);
// Formulaire de signup : traitement
router.post('/signup', loginController.doSignup);
// Déconnexion
router.post('/logout', loginController.logout);

// Routes optionnelles
// '/travel/:id/activity/:id'
// '/travel/:id/transport/:id'
// '/travel/:id/accommodation/:id'

// Infos persos de l'utilisateur : affichage et traitement
// page de contact (mail prérempli)

// Voir tout les travelers associé à un voyage
// router.get('/travel/id/travelers', travelerController.allTravelers);

//cette route sera protégée par le middleware adminMW
//Seuls les utilisateurs avec un rôle admin pourront y avoir accès
// router.get('/admin', adminMW, adminController.admin);

module.exports = router;