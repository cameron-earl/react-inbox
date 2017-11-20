import React from 'react'
import Message from './Message'

const Messages = ({messages, toggleMessageProperty, setMessageProperty}) => {
  const messageElements = messages.map(m=>(
    <Message
      key={m.id}
      message={m}
      toggleMessageProperty={toggleMessageProperty}
      setMessageProperty={setMessageProperty}
    />
  ))
  return (
    <div >
      { messageElements }
    </div>
  )
}

export default Messages
