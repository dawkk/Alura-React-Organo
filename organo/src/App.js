import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';


function App() {

  const allTeams = [
    {
      name:'Programming',
      primaryColor:'#57C278',
      secondaryColor:'#D9F7E9'
    },
    {
      name:'Front-End',
      primaryColor:'#82CFFA',
      secondaryColor:'#E8F8FF'
    },
    {
      name:'Data Science',
      primaryColor:'#A6D157',
      secondaryColor:'#F0F8E2'
    },
    {
      name:'Devops',
      primaryColor:'#E06B69',
      secondaryColor:'#F0E7E8'
    },
    {
      name:'UX & Design',
      primaryColor:'#DB6EBF',
      secondaryColor:'#FAE9F5'
    },
    {
      name:'Mobile',
      primaryColor:'#FFBA05',
      secondaryColor:'#FFF5D9'
    },
    {
      name:'Innovation & Managemen',
      primaryColor:'#FF8A29',
      secondaryColor:'#FFEEDF'
    },
  ]

  const[users, setUsers] = useState([])

  const newUserRegistered = (user) => {
    console.log(user)
    setUsers([...users, user])
  }

  return (
    <div className="App">
        <Banner/>
        <Form userRegistered={user => newUserRegistered(user)}/>
        {allTeams.map(team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor}/>)}
    
    </div>
  );
}

export default App;
