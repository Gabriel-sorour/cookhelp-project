import { useEffect, useRef, useState } from 'react';
import '../styles/Chatbot.css'
import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'

function ChatbotInput({ setMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputValue(event) {
    setInputText(event.target.value);
    // console.log(inputText);
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

  function sendMessage() {
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
    ]);

    setInputText('');
  }


  return (
    <div className='chatbot-input'>
      <input
        onChange={saveInputValue}
        onKeyDown={(evnet) => {
          evnet.key === 'Enter' && sendMessage();
          evnet.key === 'Escape' && setInputText('');
        }}
        placeholder='Send message to Chatbot'
        value={inputText}
      />
      <button
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  )
}

function Message({ message }) {
  return (
    <div
      className={message.sender === 'user' ? "message-prime user-message" : "message-prime"}
    >
      {message.sender === 'robot' && <img src={RobotImage} />}
      <p>{message.text}</p>
      {message.sender === 'user' && <img src={UserImage} />}
    </div>
  )
}

function Messages({ messages }) {
  const messagesRef = useRef(null);
  useEffect(() => {
    const messagesElem = messagesRef.current;
    messagesElem.scrollTop = messagesRef.current.scrollHeight;
  }, [messages])

  return (
    <div
      ref={messagesRef}
      className="messages">
      {
        messages[0] === undefined &&
        <div className='welcome-message'>
          <p>
            Welcome to Cook Smarter Chatbot! Start chatting now!
          </p>
        </div>
      }

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
  const [messages, setMessages] = useState([]);

  return (
    <div className="chatbot-main">
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
    </div>
  )
}

export default Chatbot;