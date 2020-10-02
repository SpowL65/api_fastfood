const express = require('express');
const login = require('./assets/user.json');
const foods = require('./assets/api_fastfood.json');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send({message: "oi"});
});
app.get('/user', (req,res)=>{
    res.send(login);
});

app.get('/foods', (req,res)=>{
    res.send(foods);
});

app.get('/food/:id', (req,res)=>{
    const {id} = req.params;

    const index = food.findIndex(p => p.id == id);

    if(index !== -1){
        res.send(food[index]);
    }else{
        res.sendStatus(404);
    }
});

app.listen(process.env.PORT, ()=>{
    console.log('api on');
});