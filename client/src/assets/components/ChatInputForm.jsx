import React from 'react'



export default function ChatInputForm(props){



return(

<div className="chat-input-holder">
<form onSubmit={props.onSubmit}>
<input rows="1" 
value={props.value}
onChange={props.onChange}
className="chat-input-textarea" placeholder="message"></input>
</form>
</div>

)}