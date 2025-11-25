import { useState } from 'react';
import '../styles/Chatbot.css'

function ChatbotInput() {

  return (
    <div className='chatbot-input'>
      <input placeholder='Send message to Chatbot' />
      <button>
        Send
      </button>
    </div>
  )
}

function Message({ message }) {
  return (
    <div className="message-prime">
      {message.sender === 'robot' && <img src="/" />}
      <p>Hello Chatbot!</p>
      {message.sender === 'user' && <img src="/" />}
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
        <ChatbotInput />
        <Messages
          messages={messages}
          setMessages={setMessages}
        />
      </section>
    </main>
  )
}

export default Chatbot;