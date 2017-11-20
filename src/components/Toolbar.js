import React, { Component } from 'react';

class Toolbar extends Component {

  handleCheck = (e) => {
    this.props.setAllMessageProperty(
      'selected',
      !this.props.messages.some(m=>m.selected)
    )
  }

  handleMarkAsRead = (e) => {
    this.props.setSelectedMessageProperty("read",true)
  }

  handleMarkAsUnread = (e) => {
    this.props.setSelectedMessageProperty("read",false)
  }

  handleDeleteMessages = (e) => {
    this.props.deleteSelectedMessages()
  }

  handleAddLabel = (e) => {
    let newLabel = e.target.value
    if (newLabel === '') return
    this.props.addLabelToSelected(newLabel)
  }

  handleRemoveLabel = (e) => {
    let removedLabel = e.target.value
    if (removedLabel === '') return
    this.props.removeLabelFromSelected(removedLabel)
  }

  handleSelect = () => {
    const newValue = this.state.messages.some(m=>!m.selected)
    this.setState({
      messages: this.state.messages.map(m=>({...m, selected: newValue}))
    })
  }

  render() {

    const unreadCount = this.props.messages.reduce((a,b)=>a+!b.read,0)

    const selectedCount = this.props.messages.reduce((a,b)=>a+!!b.selected,0)

    const allAreSelected = this.props.messages.length === selectedCount

    const selectBoxIcon = !selectedCount ? 'fa-square-o'
      : (allAreSelected ? 'fa-check-square-o' : 'fa-minus-square-o')

    const disabled = selectedCount ? "" : "disabled"

    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span
              className="badge badge">{unreadCount}
            </span> unread message{unreadCount === 1 ? '' : 's'}
          </p>

          <button
            className="btn btn-default"
            onClick={this.handleCheck}
          >
            <i className={`fa ${selectBoxIcon}`}></i>
          </button>

          <button
            className="btn btn-default"
            disabled={disabled}
            onClick={this.handleMarkAsRead}
          >
            Mark As Read
          </button>

          <button
            className="btn btn-default"
            disabled={disabled}
            onClick={this.handleMarkAsUnread}
          >
            Mark As Unread
          </button>

          <select
            className="form-control label-select"
            disabled={disabled}
            onChange={this.handleAddLabel}
            value=""
          >
            <option value="">Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select
            className="form-control label-select"
            disabled={disabled}
            onChange={this.handleRemoveLabel}
            value=""
          >
            <option value="">Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button
            className="btn btn-default"
            disabled={disabled}
            onClick={this.handleDeleteMessages}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
