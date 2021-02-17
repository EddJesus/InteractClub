const jwt = require('jsonwebtoken');

module.exports = {

  async checkAuth(req, res){
    const token = req.body.token;
    const secret_key = process.env.JWT_TOKEN
    if(!secret_key){
      return res.status(400).json({error: "error na chave de acesso!"});
    }
    if(!token){
      return res.status(400).json({error: "token não informado"});
    }

    try {      
      jwt.verify(token, secret_key)
      return res.status(200).json({sucess: "token válido"})
    } catch (error) {
      return res.status(401).json({error: error})
    }

    
  }


}