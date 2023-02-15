import React from 'react'


export default function LeftSideChat(props) {

return(
        <>
        <div className='chat-message'>
            <div className="chat-message-center">
                <div className="message">{props.message}</div>
            </div>
        </div>
        <p className="date-stamp">8:30pm</p>
        </>
)
}