import { useState, useEffect } from 'react'
import ChatMessage from './assets/components/ChatMessage';
import Navbar from './assets/components/Navbar';
import ChatInputForm from './assets/components/ChatInputForm';
import Sidebar from './assets/components/Sidebar';
import './App.css'

function App() {
// console.log("App Rendering")
//state of variables
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  // useEffect(() => {
  //   if(input !== ""){

  //   }
  // }, [input])
  

const handleOnChange = (e)=> setInput(e.target.value)


//set the chatLog message with the input value


 async function handleSubmit(e){
  e.preventDefault();
  setChatLog([...chatLog, { user: "me", message: `${input}` }]);
  console.log("input", input)
  setInput("");
 
console.log("chatLog", chatLog)
//post the chatLog message from the input value
  const response = await fetch("http://localhost:3080/",
  
  {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: chatLog.map((message) => message.message).join("")
     })

      
  
    })
//receive the response from the openai data and set it in the chatog state
    const data = await response.json();
    console.log("data from response", data)//This is getting an empty message sometimes and other times a non-asked for response message
    console.log("chatLog", chatLog)
    setChatLog([...chatLog, { user: "gpt", message: `${data.message}`}])
    console.log("chatLog", chatLog)//missing the user:me message

   
}


const handleDropdown = ()=> {

  
}


const chatMessage = chatLog.map((message, index)=> (
  <ChatMessage 
    key={index} 
    message={message.message} 
    user={message.user}
    />
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
            />
      </section>
          <Sidebar onClick={handleDropdown} />
    </div>
  )
}



export default App
