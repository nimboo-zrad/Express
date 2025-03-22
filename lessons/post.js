const express = require('express');
const app = express();
const PORT = 3000;
const flightList = [
  {
    destination: "moscow",
    duration: 4
  },
  {
    destination: "dubai",
    duration: 2
  },
];

app.use(express.json());

app.post("/flights", (req, res) =>{
	res.sendStatus(201);
	flightList.push(req.body);
	console.log("done posting...")
});

app.get('/flights', (req, res)=>{
    res.send(flightList);
});

app.listen(PORT, ()=> console.log(`The server is running at port ${PORT}`));