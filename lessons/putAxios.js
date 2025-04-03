import axios from 'axios';

axios.put('http://127.0.0.1:3000/users', {
  firstName: 'Nima', 
})
.then(res => console.log(res.data))
.catch(err => console.error('There has been an error puting data!: ', err.message));