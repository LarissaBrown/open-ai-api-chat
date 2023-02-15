import React from 'react'
import RightSideChat from './RightSideChat'
import LeftSideChat from './LeftSideChat'


export default function ChatMessage(props){
const rightChat = <RightSideChat aimessage={props.aimessage}/>
const leftChat = <LeftSideChat message={props.message}/>

    return (
    <div >
        {/* if props.message then render this left side messagebubble and vice verse*/}
        {leftChat}
        {rightChat}

    </div>
    )
}
    