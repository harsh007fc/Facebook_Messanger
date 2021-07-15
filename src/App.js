import React,{useState} from 'react'
import './App.css';

function App() {
  let [input,setInput] = useState('');
  let [messages,setMessages] = useState(['hello','main thik','tum thik']);
  console.log(messages);
  let sendMessage = () => {
    //logic to send the message
    if(input != '')
    {
      setMessages([...messages,input]);
      setInput('');
    }
  }



  return (
    <div className='App'>
    <h1>CHAT🚀</h1>
    <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
    <button onClick={sendMessage}>Send Message</button>
    {
      messages.map(message=>(
        <p>{message}</p>
      ))
    }
    </div>
  );
}

export default App;
