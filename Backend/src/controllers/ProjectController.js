const connection = require('../database/connection');

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
            return res.status(500).json({error: "Erro ao cadastrar novo projeto!"});
        }

    },

    async index(req, res){ 
        

        try {
            const data = await connection('projects').select('*');

            return res.status(200).json(data);
        } catch (error) {

            return res.status(500).json({error: "Erro ao listar casos!"});

        }
    },

    async getProject(req, res){
        const {id} = req.params;

        try {
            const data = await connection('projects').select('*').where('id_project', '=', id);

            return res.status(200).json(data);
        } catch (error) {

            return res.status(500).json({error: "Erro ao listar casos!"});

        }
    },

    
    async update(req, res){ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! coisa pra resolver
        const {id} = req.params;
        const data = req.body;

        try {
            const data = await connection('projects').update({
                title: data.title,
                body: data.body,
                img: data.img,
                id_interactian: data.id_interactian,
            }).where('id_project', '=', id);

            return res.status(200).json(data);
        } catch (error) {

            return res.status(500).json({error: "Erro ao listar casos!"});

        }
    },
    
    
    async delete(req, res){
        const {id} = req.params;

        try {
            
            const response = await connection('projects').delete('*').where('id_project', '=', id);

            if(response){
                return res.status(200).json({message: "Deletado com sucesso!" + response});
            }else{
                return res.status(404).json({error: "Projeto não encontrado!"});
            }

            
        } catch (error) {

            return res.status(500).json({error: "Erro ao deletar projeto!"});
        }
    } 



}