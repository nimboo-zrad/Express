const express = require('express');
const app = express();
const PORT = 3000;
const flightList = [
  {
    id: 1,
    destination: "moscow",
    duration: 4
  },
  {
    id: 2,
    destination: "dubai",
    duration: 2
  }
 ];

app.get('/flights', (req, res)=>{
    res.send(flightList);
});

app.get('/flights/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  if(isNaN(id)) return res.status(400).send("the id you provided is not valid");
  
  const founded = flightList.find((flight) => flight.id === id);
  if(!founded) return res.status(404).send("the user not found!");
  
  return res.send(founded);
})

app.listen(PORT, ()=> console.log(`The server is running at port ${PORT}`));