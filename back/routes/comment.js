const express = require('express');
const router = express.Router();

// Importation de "auth" qui permet de sécuriser les routes
// Importation du "controller" concernant les "commentaire"
// Router de la création d'un commentaire
// Router de la suppression d'un commentaire

const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');
router.post('/:id/comment', auth, commentCtrl.createComment);
router.delete('/comment/:id', auth, commentCtrl.deleteComment);

module.exports = router;