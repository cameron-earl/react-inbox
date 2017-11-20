import React, { Component } from 'react';

class Message extends Component {

  isReadClass = () => this.props.message.read ? ' read' : ' unread'

  isSelectedClass = () => this.props.message.selected ? ' selected' : ''

  starIcon = () => this.props.message.starred ? 'fa-star' : 'fa-star-o'

  handleSelected = (e) => {
    this.props.toggleMessageProperty(this.props.message.id, 'selected')
  }

  handleStarChange = (e) => {
    this.props.toggleMessageProperty(this.props.message.id, 'starred')
  }


  render() {
    const labels = this.props.message.labels.map((label, i)=>(
      <span key={i} className="label label-warning">{label}</span>
    ))

    return (
      <div
        className={'row message' + this.isReadClass() + this.isSelectedClass()}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                checked={ this.props.message.selected }
                onChange={this.handleSelected}
              />
            </div>
            <div className="col-xs-2">
              <i
                className={'star fa ' + this.starIcon()}
                onClick={this.handleStarChange}
                ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {labels}
          <a href="#">
            { this.props.message.subject }
          </a>
        </div>
      </div>
    );
  }
}

export default Message;
