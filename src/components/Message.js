import React, { Component } from 'react';

class Message extends Component {

  handleSelected = (e) => {
    this.props.toggleMessageProperty(this.props.message.id, 'selected')
  }

  handleStarChange = (e) => {
    this.props.toggleMessageProperty(this.props.message.id, 'starred')
  }

  render() {
    const {id, selected = false, read, labels, starred, subject} = this.props.message

    const labelElements = labels.map((label, i)=>(
      <span key={i} className="label label-warning">{label}</span>
    ))

    return (
      <div
        className={`row message ${read ? 'read' : 'unread'}${selected ? ' selected' : ''}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                checked={selected}
                onChange={this.handleSelected}
              />
            </div>
            <div className="col-xs-2">
              <i
                className={'star fa fa-star' + starred ? '' : '-o'}
                onClick={this.handleStarChange}
                ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {labelElements}
          <span onClick={(e)=>this.props.setMessageProperty(id, 'read', true)}>
            { subject }
          </span>
        </div>
      </div>
    );
  }
}

export default Message;
