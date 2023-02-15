import React from 'react'
import Chat from './Chat'


export default function ChatMessage(props){
const chat = <Chat message={props.message} user={props.user}/>

    return (
    <div >
        {/* if props.message then render this left side messagebubble and vice verse*/}
        {chat}

    </div>
    )
}
    