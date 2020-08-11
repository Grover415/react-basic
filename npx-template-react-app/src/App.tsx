import React from 'react';
import './App.css';
import Table from './Table'

function App() {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]
  return (    
    <div className="App">
      <header className="App-header">
      <a href="https://www.taniarascia.com/getting-started-with-react/" target="_blank"><h3>Tania article</h3> </a>   
      </header>
      <Table bodyData={characters} />      
    </div>
  );
}

export default App;
