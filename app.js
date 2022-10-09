const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('Requête reçue!');
    next(); // Permet de passer à la requête suivante, sinon "First express n'est pas exécuté "
});

app.use((req,res,next) => {
    res.status(201)
    next();
});

app.use((req,res,next) => { // We can run http://localhost:3000 and get this message with any method (GET,POST,PUT..)
    res.json({
        message: "First express"
    })
    next();
});

app.use((req,res,next)=>{
    console.log('Réponse envoyée avec succès!');
});

module.exports = app; 

/**
 * exports pour exporter notre app et accéder depuis un autre fichier
 * run 
 * https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express
 */

