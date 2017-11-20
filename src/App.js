import React, { Component } from 'react';
import Toolbar from './components/Toolbar'
import Messages from './components/Messages'

class App extends Component {

  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  setMessageProperty = (messageId, property, newValue, toggle) => {
    const messagesClone = this.state.messages.filter(m=>m.id !== messageId)
    const newMessage = Object.assign({},this.state.messages.find(m=>m.id === messageId))
    if (toggle) newValue = !newMessage[property]
    newMessage[property] = newValue
    const newMessages = messagesClone.concat(newMessage).sort((a,b)=>a.id-b.id)
    this.setState({ messages: newMessages })
  }

  toggleMessageProperty = (messageId, property) => {
    this.setMessageProperty(messageId, property, null, true)
  }

  setAllMessageProperty = (property, newValue) => {
    const newMessages = this.state.messages.map(m=>{
      const newMessage = Object.assign({},m)
      newMessage[property] = newValue
      return newMessage
    })
    this.setState({ messages: newMessages })
  }

  setSelectedMessageProperty = (property, newValue) => {
    const newMessages = this.state.messages
      .filter(m=>m.selected)
      .map(m=>{
        const newMessage = Object.assign({},m)
        newMessage[property] = newValue
        return newMessage
      })
      .concat(this.state.messages.filter(m=>!m.selected))
      .sort((a,b)=>a.id-b.id)
    this.setState({ messages: newMessages })
  }

  deleteSelectedMessages = () => {
    const newMessages = this.state.messages.filter(m=>!m.selected)
    this.setState({messages: newMessages})
  }

  addLabelToSelected = (newLabel) => {
    const newMessages = this.state.messages
      .filter(m=>m.selected)
      .map(m=>{

        const newMessage = Object.assign({},m)
        newMessage.labels = [...new Set([...m.labels, newLabel])]
        console.log(m, newMessage)
        return newMessage
      })
      .concat(this.state.messages.filter(m=>!m.selected))
      .sort((a,b)=>a.id-b.id)
    this.setState({messages: newMessages})
  }

  removeLabelFromSelected = (removedLabel) => {
    const newMessages = this.state.messages
      .filter(m=>m.selected)
      .map(m=>{
        const newMessage = Object.assign({},m)
        newMessage.labels = m.labels.filter(l=>l !== removedLabel)
        return newMessage
      })
      .concat(this.state.messages.filter(m=>!m.selected))
      .sort((a,b)=>a.id-b.id)
    this.setState({messages: newMessages})
  }

  render() {
    return (
      <div className="container">
        <Toolbar
          messages={this.state.messages}
          setAllMessageProperty={this.setAllMessageProperty}
          setSelectedMessageProperty={this.setSelectedMessageProperty}
          deleteSelectedMessages={this.deleteSelectedMessages}
          addLabelToSelected={this.addLabelToSelected}
          removeLabelFromSelected={this.removeLabelFromSelected}
        />
        <Messages
          messages={this.state.messages}
          toggleMessageProperty={this.toggleMessageProperty}
        />
      </div>

    )
  }
}

export default App;
