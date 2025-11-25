import { useState } from 'react';
import '../styles/Chatbot.css'
import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'

function ChatbotInput({ messages, setMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputValue(event) {
    setInputText(event.target.value);
    console.log(inputText);
  }

  function robotResponse() {
    switch (inputText) {
      case 'hello':
        return 'hello';
      case 'hi':
        return 'hi'
      default:
        return 'okay'
    }
  }

  function addMessage() {
    setMessages(prev => [
      ...prev,
      {
        sender: 'user',
        text: inputText,
        id: crypto.randomUUID()
      },
      {
        sender: 'robot',
        text: robotResponse(),
        id: crypto.randomUUID()
      },
    ])
  }


  return (
    <div className='chatbot-input'>
      <input
        onChange={saveInputValue}
        placeholder='Send message to Chatbot'
      />
      <button
        onClick={addMessage}
      >
        Send
      </button>
    </div>
  )
}

function Message({ message }) {
  return (
    <div className="message-prime">
      {message.sender === 'robot' && <img src={RobotImage} />}
      <p>{message.text}</p>
      {message.sender === 'user' && <img src={UserImage} />}
    </div>
  )
}

function Messages({ messages, setMessages }) {

  return (
    <div className="messages">
      {
        messages.map(message =>
          <Message
            key={message.id}
            message={message}
          />
        )
      }
    </div>
  )
}


function Chatbot() {
  const [messages, setMessages] = useState([{
    sender: 'user',
    text: 'Hello Chatbot!',
    id: crypto.randomUUID()
  },
  {
    sender: 'robot',
    text: 'Hello User!',
    id: crypto.randomUUID()
  }
  ]);

  return (
    <main className="chatbot-main">
      <section className='chatbot-container'>
        <ChatbotInput
          messages={messages}
          setMessages={setMessages}
        />
        <Messages
          messages={messages}
          setMessages={setMessages}
        />
      </section>
    </main>
  )
}

export default Chatbot;