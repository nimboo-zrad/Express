const express = require('express');
const app = express();
const PORT = 3000;
const flighList = [
    {
    	destination: "moscow",
      duration: 4
    },
   {
    	destination: "dubai",
      duration: 2
    }
]

app.get('flights', (req, res)=>{
    res.send(flightList);
});

app.use(express.json());

app.post("/flights", (req, res) =>{
	console.log(req.body);
	res.send(201);
});

app.listen(PORT, ()=> console.log(`The server is running at port ${PORT}`));