import React, { useState, useEffect } from 'react'
import './App.css';
import { FormControl, Button, InputLabel, Input,IconButton } from '@material-ui/core';
import Message from './Components/Message';
import db from './Components/Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  let [input, setInput] = useState('');
  let [messages, setMessages] = useState([]);
  let [username, setUsername] = useState('Unknown');



  useEffect(() => {
    //run only once when app component loads
    db.collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id,message: doc.data()})));
    })
  }, []);
  useEffect(() => {
    setUsername(prompt("Enter your name"))
  }, []);

  let sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //logic to send the message
    if (input != '') {
      setInput('');
    }
  }

  return (
    <div className='App'>
      <h1>CHAT🚀</h1>
      <img src="https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="facebook" />
      <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          {/* <InputLabel ></InputLabel> */}
          <Input className='app__input' placeholder='Enter a Message...' value={input} onChange={e => setInput(e.target.value)} type="text" />
          <IconButton  className='app__iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} varient="outlined">
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id , message}) => (
          // <p>{message}</p>
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
