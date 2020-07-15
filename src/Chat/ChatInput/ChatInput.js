import React, {Component} from 'react';
import './ChatInput.scss';
import {ROLE} from "../../constants";

class ChatInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
    };
  }

  handleInput = event => {
    this.state.value = event.target.value;
  };

  handleSubmit = () => {
    const message = {
      role: ROLE.CUSTOMER,
      text: this.state.value
    };
    this.props.onNameChanged(message)
  };

  render() {

    return (
        <footer className="ChatInput">
          <input type="text" onChange={this.handleInput}/>
          <button type="button" onClick={this.handleSubmit}>Send</button>
        </footer>
    );
  }
}

export default ChatInput;
