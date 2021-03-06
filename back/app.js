// Ajout "d'express" => Infrastructure d'applications web Node.js minimaliste et flexible
// Création d'une application express
// Ajout de "bodyParser" => Parse les corps de requête entrants dans un middleware 
// Ajout de "helmet" => Permet de sécuriser des applications Express en définissant divers en-têtes HTTP
// Ajout de "path" => Permet de travailler avec le système de fichier

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

// Importation de la route dédiée aux utilisateurs.
// Importation de la route dédiée aux posts.
// Importation de la route dédiée aux commentaires

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentsRoutes = require('./routes/comment');

// Système de sécurité CORS

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
  
});

// Transformation des données en un objet JSON

app.use(bodyParser.json());

// Permet de charger les fichiers qui sont dans 'images'
// Configuration des routes d'API :

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentsRoutes);

// Active helmet

app.use(helmet());

// Exportation du module afin de pouvoir le réutiliser :

module.exports = app;