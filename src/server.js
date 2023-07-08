const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
const cors = require('cors');
app.use(cors());

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
  /*var sql = "CREATE DATABASE Jobsuchetest3";
  con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Database Jobsuchetest3 created");
  });*/
});

con.query('CREATE DATABASE IF NOT EXISTS Jobsuche;', (err, result) => {
  if (err) throw err;
  console.log("Database created");

  con.changeUser({database : 'Jobsuche'}, function(err) {
    if (err) throw err;

    con.query(`
    CREATE TABLE IF NOT EXISTS Employeur (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        adresse VARCHAR(255),
        siteWeb VARCHAR(255),
        email VARCHAR(255),
        telephone VARCHAR(255)
    )`, (err, result) => {
      if (err) throw err;
      console.log("Employeur table created");

      con.query(`
      CREATE TABLE IF NOT EXISTS OffreEmploi (
          id INT AUTO_INCREMENT PRIMARY KEY,
          employeurId INT,
          titre VARCHAR(255),
          description TEXT,
          salaire FLOAT,
          datePublication TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          lieu VARCHAR(255),
          typeContrat VARCHAR(255),
          secteur VARCHAR(255),
          niveauExperience VARCHAR(255),
          niveauEducation VARCHAR(255),
          FOREIGN KEY (employeurId) REFERENCES Employeur(id)
      )`, (err, result) => {
        if (err) throw err;
        console.log("OffreEmploi table created");

        con.query(`
        CREATE TABLE IF NOT EXISTS RechercheurEmploi (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255),
            email VARCHAR(255),
            motDePasse VARCHAR(255),
            cv TEXT,
            lettreMotivation TEXT
        )`, (err, result) => {
          if (err) throw err;
          console.log("RechercheurEmploi table created");
        });
      });
    });
  });
});

/*con.query('USE Jobsuche', (err, result) => {
    if (err) throw err;

    con.query('ALTER TABLE Employeur ADD COLUMN type_de_compte VARCHAR(255);', (err, result) => {
        if (err) throw err;
        console.log("Column type_de_compte added to Employeur table");
    });

    con.query('ALTER TABLE RechercheurEmploi ADD COLUMN type_de_compte VARCHAR(255);', (err, result) => {
        if (err) throw err;
        console.log("Column type_de_compte added to RechercheurEmploi table");
    });
}); */

//creation d'une nouvelle table pour contenir toutes les candidatures aux offres d'emploi
con.changeUser({database : 'Jobsuche'}, function(err) {
  if (err) throw err;

  con.query(`
    CREATE TABLE IF NOT EXISTS Candidatures (
        id INT AUTO_INCREMENT PRIMARY KEY,
        rechercheurEmploiId INT,
        offreEmploiId INT,
        dateCandidature TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (rechercheurEmploiId) REFERENCES RechercheurEmploi(id),
        FOREIGN KEY (offreEmploiId) REFERENCES OffreEmploi(id)
    )`, (err, result) => {
    if (err) throw err;
    console.log("Candidatures table created");
  });
});




app.get('/api/calcul', (req, res) => {
  const resultat = 2 + 4;
  res.send(resultat.toString());
});

app.post('/api/offres-emploi', (req, res) => {
  const offreEmploi = req.body;
  const query = 'INSERT INTO OffreEmploi SET ?';
  connection.query(query, offreEmploi, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erreur lors de la création de l\'offre d\'emploi' });
      return;
    }
    res.json({ success: true });
  });
});

app.post('/api/rechercheurs-emploi', async (req, res) => {
  const rechercheurEmploi = req.body;

  // Hachage du mot de passe avant de l'insérer dans la base de données
  const salt = await bcrypt.genSalt(10);
  rechercheurEmploi.motDePasse = await bcrypt.hash(rechercheurEmploi.motDePasse, salt);

  const query = 'INSERT INTO RechercheurEmploi SET ?';
  connection.query(query, rechercheurEmploi, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erreur lors de la création du compte' });
      return;
    }
    res.json({ success: true });
  });
});

app.post('/api/authentification', (req, res) => {
  const { email, motDePasse } = req.body;

  connection.query('SELECT * FROM RechercheurEmploi WHERE email = ?', [email], async (error, results) => {
    if (error || results.length === 0) {
      return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);

    if (!isMatch) {
      return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
    }

    const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });

    res.json({ token });
  });
});

app.listen(port, () => {
  console.log('Serveur is running on port 3000');
});
