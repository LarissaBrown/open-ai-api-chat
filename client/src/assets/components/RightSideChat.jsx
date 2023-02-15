import React from 'react'



export default function RightSideChat(props) {

    return(
        <div className='chat-openai'>
        <div className="message-openai" >{props.aimessage}</div>
            <p className="date-stamp">8:30pm</p>
        </div>
    )}