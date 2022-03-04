// Ajout de "mysql" => Permet de se connecter à la BDD MySQL

const mysql = require('mysql');

// Création de la connexion à la BDD MySQL :

const db = mysql.createConnection({
  
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
  
});

// Connexion à la BDD

db.connect(function(err) {

  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");

});

module.exports = db;