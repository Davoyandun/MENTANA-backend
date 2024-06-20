const admin = require("../config/firebase-config");

class Middleware {
  async decodeToken(req, res, next) {

    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).send("Unauthorized");
    }
    const token = authHeader.split(" ")[1];
    
    if (!token) {
      return res.status(401).send("Unauthorized");
    }
    
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      if(decodedToken){
        return next();
      }
      return res.status(401).send("Unauthorized");
      
    } catch (error) {
      return res.status(401).send({ error: error.message });
    }
  }
}

module.exports = Middleware;