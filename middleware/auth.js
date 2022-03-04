const jwt = require("jsonwebtoken");

const JWT_TOKEN = process.env.JWT_TOKEN;

// Récupération du token dans le header, et du deuxième élément du tableau
// Vérification des token
// Pour récupérer le user Id

module.exports = (req, res, next) => {
    try 
    {
        const token = req.headers.authorization.replace("Bearer ", "");
        const decodedToken = jwt.verify(token, JWT_TOKEN);
        req.id_user = decodedToken.userId; 
        req.admin = decodedToken.adminRank;
        
        if(decodedToken.userId == undefined) {
            throw new Error
        }
        next();

    } 
    catch(err) 
    {
        res.status(401).json({ error: 'Requête non authentifiée !'});
    }
};