const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports = {
    async login(req, res) {
        const {email, password} = req.body;

        const [verificação] = await connection('interactians').where('email', '=', email).select(['password', 'email']);

        if(!verificação){
            return res.status(401).json({error: "Usuário ou senha incorretos!"});
        }else{

            bcrypt.compare(password, verificação.password, (err, success) => {
                if(err){
                    return res.status(500).json({error: "Erro inesperado, tente novamente!"});
                }
                
                if(success){

                    const token = jwt.sign(
                        {
                            email: email,
                        },

                        process.env.JWT_TOKEN, 

                        {
                            expiresIn: "1h"
                        }, 
                        );
                    
                    res.header({Authorization: token});  
                    return  res.status(200).json({success: "Autenticado com sucesso!"});
                }else{
                    return res.status(401).json({error: "Usuário ou senha incorretos!"});
                }
            })

        }

        
    }
    
}