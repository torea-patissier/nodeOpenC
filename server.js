const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Réponse du 2e serveur');
});

server.listen(process.env.PORT || 3000);

/**
 * run npx nodemon tu run nodemon
 * Changer la l4
 * https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466231-demarrez-votre-serveur-node
 */
