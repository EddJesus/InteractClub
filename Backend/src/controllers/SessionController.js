const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports = {
    async login(req, res) {
        const {email, password} = req.body;

        const [verificação] = await connection('interactians').where('email', '=', email).select("*");

        if(!verificação){
            return res.status(401).json({error: "Usuário ou senha incorretos!"});
        }else{

            bcrypt.compare(password, verificação.password, (error, success) => {
                if(error){
                    console.log(error);
                    return res.status(500).json({error: "Erro inesperado, tente novamente!"});
                }
                
                if(success){

                    const token = jwt.sign(
                        {
                            id: verificação.id,
                            verificação: verificação.name,
                            email: email,
                        },

                        process.env.JWT_TOKEN, 

                        {
                            expiresIn: "3h"
                        }, 
                        );
                    
                    res.header({Authorization: token});
                    console.log(token);

                    return  res.status(200).json({
                        success: "Autenticado com sucesso!",
                        email: email,
                        name: verificação.name,
                        token: token
                    });
                }else{
                    return res.status(401).json({error: "Usuário ou senha incorretos!"});
                }

  
            })

        }

        
    }
    
}