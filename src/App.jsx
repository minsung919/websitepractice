import { useState } from 'react';
import './App.css'
import LoginForm from './components/LoginForm';
import Notes from './components/Notes';
import welcome from './components/Welcome';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');


  return (
    
    <>
    
    {isLoggedIn ? 
    <welcome name = {name} setName = {setName} setIsLoggedIn = {setIsLoggedIn} />

     
    :
    <LoginForm
      styleData={{backgroundColor : 'gray', color: 'white'}}
      setIsLoggedIn = {setIsLoggedIn}
      setName = {setName}
      />

    }   
    <Notes></Notes>
    </>
  );
}


export default App;