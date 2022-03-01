import './App.css';
import {useState} from "react";
import { fetchRequest } from './utils';

import Body from "./components/firstPart";
import End from './components/secondPart';


const  App = () => {
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e) => {
      e.preventDefault();
      fetchRequest(setUser, username, email, password);
    }

  return (
    <div className='first'>
      <h3 align = "center">{user ? `Welcome ${user}` : "Sign Up Today For A PayPall Account"}</h3>
      <form align = "center" onSubmit={submitHandler}>
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        <input onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
      <button type="submit"> Sign Up </button>
      </form>

  </div>  

    
  );
}

function App1 () {
  return (
    <div>
      <App/>
      <Body/>
      <End/>
    </div>
  )
}
export default (App, App1);
