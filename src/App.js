import { useState } from "react";
import './App.css';
import TeamList from './TeamList';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from "./Form";


const dummyTeam = [
  {
    id: 1,
    name: "Cody Codingman",
    email: "ccman@gmail.com",
    role: "Coding Man"
  },
  {
    id: 2,
    name: "Some other person",
    email: "notare@lemailaddress.com",
    role: "Public Relations"
  }
]

function App() {
  const [teamMembers, setTeamMembers] = useState(dummyTeam);

  const addMember = (newMember) => {
    const id = Math.max(...teamMembers.map(t => t.id), 0) + 1;
    newMember.id = id;

    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">

        <Route exact path="/" render={props => {
          return (
            <div>
              <TeamList team={teamMembers} />
              <Link to="/add">Add Member...</Link>
            </div>
          )
        }} />

        <Route exact path="/add" render={props => {
          return (
            <Form addMember={addMember}/>
          )
        }} />

      </header>
    </div>
  );
}

export default App;
