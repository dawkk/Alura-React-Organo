import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';


function App() {

  const[users, setUsers] = useState([])

  const newUserRegistered = (user) => {
    console.log(user)
    setUsers([...users, user])
  }

  return (
    <div className="App">
        <Banner/>
        <Form userRegistered={user => newUserRegistered(user)}/>
    </div>
  );
}

export default App;
