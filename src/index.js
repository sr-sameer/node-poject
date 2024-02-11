const express = require('express');
require('dotenv').config();
const app = express();

app.get('/',(req,res)=>{
    return res.json({
        message: 'server Fix fine'
    })
})

app.get('/:something',(req,res)=>{
    return res.json({
        message: `server running ${req?.params?.something}`,
        string: JSON.stringify(process.env.PORT)
    });
});


app.listen(process.env.PORT,()=>{
    console.log('Server running fine');
    return true
})