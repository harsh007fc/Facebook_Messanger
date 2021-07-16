import React, { useState,useEffect } from 'react'
import './App.css';
import { FormControl,Button,InputLabel,Input } from '@material-ui/core';
import Message from './Components/Message';

function App() {
  let [input, setInput] = useState('');
  let [messages, setMessages] = useState([{username:'main',text:'dog hai tu'},{username:'tum',text:'tum ho paas mere '},{username:'rana ji',text:'rana ji hai tu'}]);
  let [username,setUsername] = useState('');

  useEffect(()=>{
    setUsername(prompt("Enter your name"))
  },[])

  let sendMessage = (e) => {
    e.preventDefault();
    //logic to send the message
    if (input != '') {
      setMessages([...messages, {username:username,text:input}]);
      setInput('');
    }
  }




  return (
    <div className='App'>
      <h1>CHAT🚀</h1>
      <h2>Welcome {username}</h2>
      <form action="">
      <FormControl>
        <InputLabel >Enter a message 💌</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)} type="text"/>
        <Button disabled={!input}  variant="contained" color="primary" type='submit' onClick={sendMessage} varient="outlined" >Send Message</Button>
      </FormControl>
      </form>
      {
        messages.map(message => (
          // <p>{message}</p>
          <Message username={message.username} text={message.text}/>
        ))
      }
    </div>
  );
}

export default App;
