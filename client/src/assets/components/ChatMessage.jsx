import React from 'react'


export default function ChatMessage(props){

    return (
    <div >
        <div className='chat-message'>
        <div className="chat-message-center">
        <div className="message">{props.message}</div>
        </div>
        </div>
        <p className="date-stamp">8:30pm</p>
        <div className='chat-openai'>
        <div className="message-openai">{props.aimessage}</div>
        <p className="date-stamp">8:30pm</p>
        </div>
    </div>
    )
}
    