const mainController = require('./controllers/mainController');
const travelerController = require('./controllers/travelerController');
const loginController = require('./controllers/loginController');

const { Router } = require('express');

const router = Router();

// INFOS VOYAGEURS : affichage globale et individuel, insertion, modification et suppression
router.get('/travelers', travelerController.allTravelers); // Afficher tous les voyageurs en BDD
router.get('/traveler/:id', travelerController.getOneTraveler); // Afficher les infos d'un voyageur
router.post('/traveler', travelerController.newTraveler); // Création d'un nouveau voyageur (signup)
router.patch('/traveler/:id', travelerController.editTraveler); // Modification du profil d'un voyageur
router.delete('/traveler/:id', travelerController.deleteTraveler); // Suppression d'un compte voyageur

// VOYAGES LIES A UN VOYAGEUR : Voyages à venir auxquels un voyageur est inscrit
router.get('/user-travels/:id', mainController.showUserTravels); // Liste des voyages où le voyageur est inscrit

// INFOS DES VOYAGES : affichage globale et individuel, insertion, modification et suppression
router.get('/travels', mainController.showTravels); // Afficher tous les voyages en BDD
router.get('/travel/:id', mainController.showAllInfos); // Afficher 1 voyage 
router.post('/create-travel', mainController.createTravel); // Créer 1 nouveau voyage 
router.patch('/travel/:id', mainController.editTravel); // Modifier 1 voyage existant
router.delete('/travel/:id', mainController.deleteTravel); // Supprimer 1 voyage existant

// INFOS VOYAGEURS LIES A UN VOYAGE : affichage des voyageurs inscrits dans un voyage, inscrire un nouveau voyageur dans un voyage, et supprimer un voyageur d'un voyage
router.get('/travel/:id/travelers', mainController.showTravelers); // Afficher les voyageurs faisant partie d'un voyage
router.post('/travel/:id/traveler', mainController.addTravelers); // Ajouter un voyageur dans un voyage
router.delete('/travel/:id/traveler/:travelerId', mainController.deleteTravelerFromTravel); // Supprimer 1 voyageur d'un voyage

// ROUTES FACTORISEES: INFOS D'UN VOYAGE EN TERMES DE TRANSPORT, ACCOMMODATION, ACTIVITY et TASK  : affichage globale, insertion, modification et suppression
router.get('/travel/:id/:entity', mainController.showEntity); // Afficher les entités en stock lié à un voyage 
router.post('/travel/:id/:entity',mainController.createEntity); // Ajouter une nouvelle entité dans le stock d'un voyage
router.patch('/travel/:id/:entity/:entityId', mainController.editEntity); // Modifier les infos d'une entité dans un voyage
router.delete('/travel/:id/:entity/:entityId', mainController.deleteEntity); // Supprimer une entité d'un voyage

// ROUTE DE SUPRESSION D'UN DOCUMENT


// INFOS DOCUMENTS LIES A UN VOYAGE : affichage globale et individuel, insertion, modification et suppression
// router.delete('/travel/:id/document', travelController) 

// LOGIN et LOGOUT 
router.post('/login', loginController.doLogin); // Login et début de session
router.post('/isLogged', loginController.loginCheck); // MW de contrôle de session active ou pas
router.post('/logout', loginController.logout); // Déconnexion

// SIGNUP
router.post('/signup', loginController.doSignup,loginController.verifyEmail); // inscription et envoi d'un email avec un lien pour contrôler la validité de l'adresse email
router.get('/mail', loginController.verifyToken); // MW de validation de l'email et inscription de l'utilisateur en cas de succès

//cette route sera protégée par le middleware adminMW
//Seuls les utilisateurs avec un rôle admin pourront y avoir accès
// router.get('/admin', adminMW, adminController.admin);

module.exports = router;