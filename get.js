const express = require('express');
const app = express();
const PORT = 3000;

app.get('info', (req, res)=>{
    res.sendFile("hi this is get!");
});

app.listen(PORT, ()=> console.log(`The server is running at port ${PORT}`));