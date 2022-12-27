import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
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

  const[collaborators, setCollaborators] = useState([])

  const newCollaboratorAdd = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
        <Banner/>
        <Form teams={allTeams.map(team => team.name)} collaboratorAdded={collaborator => newCollaboratorAdd(collaborator)}/>

        {allTeams.map(team => <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor} 
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />)}
        <Footer/>
    </div>
  );
}

export default App;
