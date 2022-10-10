const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/Things'); //ajout
const app = express();

mongoose.connect('mongodb+srv://toreapat:041219Tp@cluster0.4xxfeao.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
  
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/stuff',(req,res,next)=>{//ajout
  delete req.body._id; //enlève le champs id de la requête
  const thing = new Thing({
    ...req.body // va recopier les champs dans le body de la requête
  });
  thing.save()
  .then(()=> res.status(201).json({message: 'Objet enregistré!'}))
  .catch(error => res.status( 400).json({error}));
})

app.get('/api/stuff/:id',(req,res,next) => { //ajout find by id
  Thing.findOne({ _id: req.params.id })
  .then(thing => res.status(200).json((thing)))
  .catch(error => res.status(404).json({error}));
});

app.get('/api/stuff', (req, res, next) => {//ajout find all
  Thing.find()
  .then(things => res.status(200).json(things))
  .catch(error => res.status(400).json({error}));
  });

module.exports = app;  