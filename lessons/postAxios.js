import axios from 'axios';

axios.post('http://127.0.0.1:3000/users', {
  firstName: 'majid',
  lastName: 'Ziaei Rad',
  age: 60
})
.then(res => console.log(res.data))
.catch(err => console.error('there has been an error posting: ', err.message));