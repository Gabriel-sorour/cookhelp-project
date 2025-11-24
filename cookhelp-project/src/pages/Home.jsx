import { useNavigate } from 'react-router-dom';
import HomeBanner from '../assets/home-banner.png'
import '../styles/Home.css'

function Home() {
  const navigate = useNavigate();
  function goToChatbot() {
    navigate('/chatbot');
  }

  return (
    <main>
      <section className='banner-container'>
        <img src={HomeBanner} alt="home-banner" />
        <button
          onClick={goToChatbot}
        >
          Start now !
        </button>
      </section>
    </main>
  )
}

export default Home;