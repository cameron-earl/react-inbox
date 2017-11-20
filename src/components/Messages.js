import React from 'react'
import Message from './Message'

const Messages = ({messages, toggleMessageProperty}) => {
  const messageElements = messages.map(m=>(
    <Message
      key={m.id}
      message={m}
      toggleMessageProperty={toggleMessageProperty}
    />
  ))
  return (
    <div >
      { messageElements }
    </div>
  )
}

export default Messages
