import { useEffect, useRef, useState } from 'react';
import '../styles/Chatbot.css'
import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import loadingGif from '../assets/loading-spinner.gif'
import SettingSymbol from '../assets/setting.svg'

function ChatbotInput({ setMessages, setIsFocused }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

    if (!isLoading && inputText !== '') {
      setMessages(prev => [
        ...prev,
        {
          sender: 'user',
          text: inputText,
          id: crypto.randomUUID()
        }
      ]);

      setIsLoading(true);

      setInputText('');

      // simulate backend response delay

      const loadingId = crypto.randomUUID();

      setMessages(prev => [
        ...prev,
        {
          sender: 'robot',
          text: <img className='loading-gif' src={loadingGif} alt="loading..." />,
          id: loadingId
        }
      ]);

      setTimeout(() => {
        setMessages(prev => prev.map(message =>
          message.id === loadingId ?
            { ...message, text: robotResponse() }
            : message
        ));
        setIsLoading(false);
      }, 500);

    }
  }


  return (
    <div className='chatbot-input'>
      <input
        type='search' //hide the password par at the top of phones keyboard
        autoComplete='nope'
        onChange={saveInputValue}
        onKeyDown={(evnet) => {

          if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
          }
          evnet.key === 'Escape' && setInputText('');
        }}
        placeholder='Send message to Chatbot'
        value={inputText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        onClick={sendMessage}
        type="button" // to avoid borwser deal with it as a summit button
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

function Messages({ messages, isOnBottom }) {
  const messagesRef = useRef(null);
  useEffect(() => {
    const messagesElem = messagesRef.current;
    messagesElem.scrollTop = isOnBottom ? messagesRef.current.scrollHeight : null;
  }, [messages, isOnBottom])

  const messagesArray = isOnBottom ? [...messages] : [...messages].reverse();

  return (
    <div
      ref={messagesRef}
      className={
        isOnBottom ? "messages messages-bottom" : "messages"
      }
    >
      {
        messages[0] === undefined &&
        <div className='welcome-message'>
          <p>
            Welcome to Cook Smarter Chatbot! Start chatting now!
          </p>
        </div>
      }

      {
        messagesArray.map(message =>
          <Message
            key={message.id}
            message={message}
          />
        )
      }
    </div>
  )
}

function ChangeTextBoxPosition({ seIsOnBottom, isOnBottom }) {

  return (
    <div className='move-textbox-div'>
      <p onClick={() => seIsOnBottom(prev => !prev)}>
        {isOnBottom ? 'Move textbox to Top' : 'Move textbox to bottom'}
        <img src={SettingSymbol} />
      </p>
    </div>
  )
}

function Chatbot({ isFocused, setIsFocused, isOnBottom, seIsOnBottom }) {
  const [messages, setMessages] = useState([]);

  if (!isOnBottom) {
    return (
      <div className="chatbot-main">
        <ChatbotInput
          messages={messages}
          setMessages={setMessages}
          setIsFocused={setIsFocused}
        />
        <section className='chatbot-container'>
          <Messages
            messages={messages}
            setMessages={setMessages}
          />
        </section>
        <ChangeTextBoxPosition
          isOnBottom={isOnBottom}
          seIsOnBottom={seIsOnBottom}
        />
      </div>
    );
  }
  else {
    return (
      <div className={
        isFocused ?
          "chatbot-main chatbot-main-for-input"
          : "chatbot-main"}
      >
        <ChangeTextBoxPosition
          isOnBottom={isOnBottom}
          seIsOnBottom={seIsOnBottom}
        />
        <section className='chatbot-container'>
          <Messages
            messages={messages}
            setMessages={setMessages}
            isOnBottom={isOnBottom}
          />
        </section>
        <ChatbotInput
          messages={messages}
          setMessages={setMessages}
          setIsFocused={setIsFocused}
        />
      </div>
    )
  }

}

export default Chatbot;