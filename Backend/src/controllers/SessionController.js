const connection = require('../database/connection');
const routes = require('../routes');

module.exports = {
    async login(req, res) {
        const {email, password} = req.body;

        const [verificação] = await connection('interactians').where('email', '=', email).select(['password', 'email']);

        if(!verificação){
            res.json("Email não encontrado!");
        }else{

            if(email !== verificação.email){
                res.json("Error : email not found!");
            } 

            if(password !== verificação.password){
                res.json("Error : senha incorreta!");
            }

            res.json(verificação);
        }


        
    }
    
}