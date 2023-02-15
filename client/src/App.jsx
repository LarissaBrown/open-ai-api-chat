import { useState } from 'react'
import ChatMessage from './assets/components/ChatMessage';
import Navbar from './assets/components/Navbar';
import ChatInputForm from './assets/components/ChatInputForm';
import './App.css'

function App() {

//state of variables
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    { message: "", aimessage: ""} 
  ])

const handleOnChange = (e)=> setInput(e.target.value)

//set the chatLog message with the input value
 async function handleSubmit(e){
  e.preventDefault();
  setChatLog([...chatLog, {message: input}])
  setInput("");
  
//post the chatLog message from the input value
  const response = await fetch("http://localhost:3080/", 

  {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      prompt: JSON.stringify(chatLog.message)
    }
      
  
    })
//receive the response from the openai data and set it in the chatog state
    const data = await response.json();
    console.log("data", data)
    setChatLog([...chatLog, {message: `${data.data}`},{aimessage: `${data.message}`}])
   
}

const handleDropdown = ()=> {

  
}

const chatMessage = chatLog.map((chatLog, index)=> (
  <ChatMessage 
    key={index} 
    message={chatLog.message} 
    aimessage={chatLog.aimessage}/>
  ))
  return (
    <div className="App">
      <section className="chatbox">
          <Navbar />
          <div className="encrypted-note">
            <p>This chat is end to end encrypted</p>
          </div>
          {chatMessage}
          <ChatInputForm 
            onSubmit={handleSubmit} 
            onChange={handleOnChange}
            value={input} 
            message={chatLog.message}
            aimessage={chatLog.aimessage}/>
      </section>
      <aside className="sidemenu">
        <div className="recent-chats">Recent Chats</div>
        <div className="title-container">Clause for renters best interest for a rental property
          <button className="icon-right" onClick={handleDropdown} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>
          <div className="dropdown">
            <h4>Edit Title</h4>
            <h4>Delete Title</h4>
          </div> 
        </div>
    
      </aside>
    </div>
  )
}



export default App
