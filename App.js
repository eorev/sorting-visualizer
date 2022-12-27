import './App.css';
import Navbar from './Componenets/Navbar.jsx';
import Header from './Componenets/Header';
import {useState} from 'react';
import generateRandomList from './generateRandomList';

function App() {
  let [ list, setList ] = useState(generateRandomList());

  return (
    <div className="App">
      <Navbar list={list} setList={setList}/>
      <Header list={list}/>
    </div>
  );
}

export default App;
