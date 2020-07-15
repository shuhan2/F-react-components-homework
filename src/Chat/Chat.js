import React, {Component} from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);
    console.log("message length: " + this.state.messages.length)
    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages: this.state.messages.concat(defaultMessage),
      });
    }, 1000);
  }

  setMessage = name => {
    this.state.messages.push(name)
    this.setState({shop : this.state.shop, messages: this.state.messages})
  };

  render() {
    const {shop, messages} = this.state;
    return (
        <main className="Chat">
          <ChatHeader shop={shop}/>
          <ChatBox messages={this.state.messages}/>
          <ChatInput onNameChanged={this.setMessage}/>
        </main>
    );
  }
}

export default Chat;
