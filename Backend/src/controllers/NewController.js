const connection = require('../database/connection');
const aws = require("aws-sdk");
const s3 = new aws.S3();

module.exports = {

    async create(req, res) {
        const data = req.body;

        const imgs = req.files;

        var pathimgs = '';
        var url = '';
        var key = '';

        imgs.forEach(img =>{
            pathimgs += img.path;
            url += img.location
            key += img.key
        })

        const validation = await connection('interactians').select('permission').where('id_interactians', '=', data.id_interactian);

        if(validation[0].permission === 0){
            return res.status(401).json({error: "Usuário não autorizado!"});
        }


        try { 
            await connection('news').insert({
                title: data.title,
                body: data.body,
                img: key,
                url: url,
                id_interactian: data.id_interactian,
            })

            return res.status(201).json({message: "Notícia cadastrado com sucesso!"});
        } catch (error) {
            return res.status(500).json({error: "Erro ao cadastrar nova noticia!" + error});
        }

    },

    async index(req, res){ 
        

        try {
            const data = await connection('news').select('*');

            return res.status(200).json(data);
        } catch (error) {

            return res.status(500).json({error: "Erro ao listar notícias!"});

        }
    },

    async getNew(req, res){
        const {id} = req.params;

        try {
            const data = await connection('news').select('*').where('id_new', '=', id);

            if(data == 0){
                return res.status(401).json({error: "Produto não encontrado!"});
            }
            
            return res.status(200).json(data);
        } catch (error) {

            return res.status(500).json({error: "Erro ao listar notícia!"});

        }
    },

    
    async update(req, res){ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! coisa pra resolver
        const {id} = req.params;
        const data = req.body;

        try {
            const data = await connection('news').update({
                title: data.title,
                body: data.body,
                img: data.img,
                id_interactian: data.id_interactian,
            }).where('id_project', '=', id);

            return res.status(200).json(data);
        } catch (error) {

            return res.status(500).json({error: "Erro ao listar notícias!"});

        }
    },
    
    
    async delete(req, res){
        const {id} = req.params;


        const getKey = await connection('news').where('id_new', '=', id).pluck('img');


        try {

            var key = ''

            getKey.map(k => {key = k})

            if(key.length > 0){

                s3.deleteObject({
                    Bucket: process.env.S3_BUCKET_NAME,
                    Key: key
                }).promise();
        
            }
            
            const response = await connection('news').delete('*').where('id_new', '=', id);

            if(response){
                return res.status(200).json({message: "Deletado com sucesso!"});
            }else{
                return res.status(404).json({error: "Notícia não encontrado!"});
            }

            
        } catch (error) {

            return res.status(500).json({error: "Erro ao deletar noticia!"});
        }
        
    } 

}