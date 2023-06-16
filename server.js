/**
 * Achtung! ne pas executer le server ici. ce code est juste pour les besoins de sauvegarde
 * dans le meme fichier a github. donc c'est juste une copie.
 */

const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tonyonline*123"
});
/**
 * le code suivant est entre parentheses car je l'ai executé une seule fois pour creer la base
 * de données. maintenant si je veux me connecter a la base de données et effectuer par exemple une
 * creation de table alors je peux juste l'adapter en utilisant con.connect() + adaptation
 */
con.connect(function(err) {
  if (err) throw err;
  console.log("connection to database server established: Connected!");
  /*Create a database named "mydb":*/
  var sql = "CREATE DATABASE Jobsuchetest1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database Jobsuchetest created");
  });
});

app.get('/api/calcul', (req, res) => {
  const resultat = 2 + 4;
  res.send(resultat.toString());
});

app.listen(port, () => {
  console.log('Serveur démarré avec succès: bien joué tony');
});
