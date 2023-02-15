import React from 'react'


export default function Chat(props) {

return(
        <>
        {/* //TODO conditional for styling  at chat-message on left or right white or blue needs to be done */}
        <div className='chat-log'>
            <div className={`chat-message ${props.user === "gpt" && "chat-openai"}`}>
                <div className={`message ${props.user === "gpt" && "message-openai"}`}>
                    {props.message}
                </div>
            </div>
        <p className={`date-stamp-user ${props.user === "gpt" && "date-stamp-gpt"}`}>8:30pm</p>
        </div>
        </>
)
}

//example className conditional
// civ className={`message $message.user = "gpt" && "message-openai"}`}></div>