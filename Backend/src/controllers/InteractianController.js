const { update } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const data = req.body;

        await connection('interactians').insert({
            name: data.name,
            email : data.email,
            tel : data.tel,
            role : data.role,
            password: data.password,
            permission: data.permission
        });

        return res.json({
            Confirmação : data.name
        });
    },

    async index(req, res){
        const [totalInteractians] = await connection('interactians').count();
        const data = await connection('interactians').select('*');

        res.header('X-Total-Count', totalInteractians['count(*)']);

        return res.json(data);
    },

    async getInteractian(req, res){
        const [totalInteractians] = await connection('interactians').count();
        const {id} = req.params;

        const data = await connection('interactians').select('*').where('id_interactians', '=', id);
        
        res.header('X-Total-Count', totalInteractians['count(*)']);

        res.json(data);
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