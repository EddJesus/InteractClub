const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {

    async create(req, res) {
        const data = req.body;

        bcrypt.hash(data.password, 10, async (errBcrypt, hash) => {

            if(errBcrypt){
                res.status(500).json({
                    error: errBcrypt + ", Tente novamente!",
                })
            }

            try {
                const validation = await connection('interactians').select('email').where('email', '=', data.email);
                
                if(validation.length > 0){
                    return res.status(406).json({error: "Email already exists!"});
                }
    
                await connection('interactians').insert({
                name: data.name,
                email : data.email,
                tel : data.tel,
                role : data.role,
                password: hash,
                permission: data.permission
                
            });
            } catch (error) {
                res.status(500).json({error: error + ", Tente novamente!"});
            }

            return res.status(201).json({Confirmação : `Usuário ${data.name} criado com sucesso! `});
            
        });


    },

    async index(req, res){ 

        try {

            const data = await connection('interactians').select('*');
            const [totalInteractians] = await connection('interactians').count();

            res.header('X-Total-Count', totalInteractians['count(*)']);

            
            return res.json(data);

        } catch (error) {
            res.status(500).json({error: error + ", Tente novamente!"});
        }
    
    },

    async getInteractian(req, res){

        const {id} = req.params;

        try {
            const [totalInteractians] = await connection('interactians').count();
            const data = await connection('interactians').select('*').where('id_interactians', '=', id);

            if(data.length > 0){
                res.header('X-Total-Count', totalInteractians['count(*)']);

                res.json(data);
            }else{
                res.status(404).json({error: "user not found!"});
            }
            
        } catch (error) {
            res.json({error: error});
        }


        
        

    },

    /* Ver questões das permissões !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    async update(req, res){
        const data = req.body;
    }
    
    */

    /*  Não implementarei ainda   
    
    async delete(req, res){
        await connection('interactians').delete('')
    } */



}