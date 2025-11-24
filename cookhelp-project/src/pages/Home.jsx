import HomeBanner from '../assets/home-banner.png'
import '../styles/Home.css'

function Home() {

  return (
    <main>
      <section className='banner-container'>
        <img src={HomeBanner} alt="home-banner" />
        <button>
          Start now !
        </button>
      </section>
    </main>
  )
}

export default Home;