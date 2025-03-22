const express = require('express');
const app = express();
const PORT = 3000;

app.get('flights', (req, res)=>{
    res.send([
        {
        	destination: "moscow",
            duration: 4
        },
        {
        	destination: "dubai",
            duration: 2
        }
    ]);
});

app.listen(PORT, ()=> console.log(`The server is running at port ${PORT}`));