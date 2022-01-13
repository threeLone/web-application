
import React, {useState} from 'react'
import './App.css';
import Axios from 'axios';


function App() {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Email, setEmail] = useState('');

  const submitform = (res,req) => {
    Axios.post("http://127.0.0.1:8081/api/application/",{
      fname: Fname,lname: Lname, email:Email
    }).then(()=>{
      alert('Thankyou for applying')
    })
  }

  

  return (
    <div>
      <div>
        <form>
          <label>Fname</label>
          <input type='name' name='Fname' onChange={(e) => {
            setFname(e.target.value);
          }} />
          <label>Lname</label>
          <input name='Lname' type='name'onChange={(e)=>{
            setLname(e.target.value);
          }}/>
          <label>Email</label>
          <input name='Email' type='email' onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <button type='submit' onClick={submitform}>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App;
