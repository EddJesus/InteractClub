module.exports={

    async test(req,res){

        const axios = require('axios');

        const {data} = await axios('https://jsonplaceholder.typicode.com/users');

        return res.json(data);
}
}