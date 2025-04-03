import axios from 'axios';

axios.get('http://127.0.0.1:3000/users/"parsa"')
.then(res => console.log(res.data))
.catch(err =>{
  if(err.response) console.error('there has been an error: ', err.response.status, err.response.data);
  else if(err.request) console.error('there has been an error: ', err.request);
  else console.log(err.message);
});
