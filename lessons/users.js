import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, ()=> console.log(`The server is running on ${host}:${port}`));

app.use(express.json());

const users = [
    {firstName: 'nima', lastName: 'Ziaei Rad', age: 23},
    {firstName: 'parsa', lastName: 'Ziaei Rad', age: 19},
    {firstName: 'elahe', lastName: 'Saberi', age: 47}    
  ];
  
  app.get('/users', (req, res)=>{
    res.send(users);
  });
  
  app.get('/users/:firstName', (req, res) => {
    const fname = req.params.firstName;
    console.log(fname);
    if (fname instanceof String || typeof fname === 'string') return res.status(400).send('your input data is not a name!');
    const user = users.find(user => user.firstName === fname);
    if(!user) return res.status(404).send('sorry your name is not in the list!');
    res.status(201).send('successful!');
  })
  
  
  app.post('/users/:id', (req, res)=>{
    const id = req.params;
    console.log(id);
    users.push(req.body);
    console.log('your request has been posted!');
    res.sendStatus(201);
  });
  
  app.put('/users', (req, res)=>{
    
  })