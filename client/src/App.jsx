import { useState, setState } from 'react'
import ChatMessage from './assets/components/ChatMessage';
import Navbar from './assets/components/Navbar';
import './App.css'

function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
        message: "How can I help you today?"
    },{
        message: "I want to use OpenAi today."
    }])
 async function handleSubmit(e){
  e.preventDefault();
  setChatLog([...chatLog, {message: `${input}`}])
  setInput("");

  const response = await fetch("http://localhost:3080/", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: chatLog.map((message) => message.message).
      join("")
    })
    })
    const data = await response.json();
    setChatLog([...chatLog, {message: `${data.message}`}])


}

  return (
    <div className="App">
      <section className="chatbox">
          <Navbar />
          <div className="encrypted-note">
            <p>This chat is end to end encrypted</p>
          </div>
          {chatLog.map((chatlog, index)=> (
          <ChatMessage key={index} message={chatlog.message}/>
          ))}
        
        <div className="chat-openai">
          <div className="message-openai">OpenAi Chat</div>
          <p className="date-stamp">8:30pm</p>
        </div>


        
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
          <input rows="1" 
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          className="chat-input-textarea" placeholder="message"></input>
          </form>
        </div>
      </section>
      <aside className="sidemenu">
        <div></div>
      </aside>
    </div>
  )
}



export default App
