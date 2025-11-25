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
      </section>
    </main>
  )
}

export default Chatbot;