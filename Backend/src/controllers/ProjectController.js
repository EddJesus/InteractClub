const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {

    async create(req, res) {
        const data = req.body;

        const validation = await connection('interactians').select('permission').where('id_interactians', '=', data.id_interactian);

        if(validation[0].permission === 0){
            return res.status(401).json({error: "Usuário não autorizado!"});
        }

        try {
            await connection('projects').insert({
                title: data.title,
                body: data.body,
                img: data.img,
                id_interactian: data.id_interactian,
            })

            return res.status(201).json({message: "Projeto cadastrado com sucesso!"});
        } catch (error) {
            return res.status(500).json({error: "Erro ao cadastrar novo projeto! (ERRO: " + error + ")"});
        }

    },

    async index(req, res){ 
        

        try {
            const data = await connection('projects').select('*');

            return res.status(200).json(data);
        } catch (error) {

            return res.status(500).json({error: "Erro ao listar casos! (ERRO : " + error + ")"});

        }
    },

    async getProject(req, res){

    },

    
    async update(req, res){
        
    },
    
    
    async delete(req, res){

    } 



}