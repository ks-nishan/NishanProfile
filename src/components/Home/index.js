import LogoTitle from '../../assets/images/n-logo-c.png'
import { Link } from 'react-router-dom'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'
import Typewriter from 'typewriter-effect'
import { useEffect, useState } from 'react'

const Home = () => {
  const [state] = useState({
    title: 'Hi 🖐️,',
    titleTwo: "I'm ",
    titleThree: 'Nishanthan.',
  })
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <div className="firstTitle">
              {state.title} <br />
            </div>
            <div className="secondTitle">
              {state.titleTwo}
              {state.titleThree}
            </div>
          </h1>
          <div className="myServices">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I'm a Software Engineer.",
                  "I'm a Frontend Engineer.",
                  "I'm a Web Developer💻.",
                  "I'm an Android Developer.",
                ],
              }}
            />
          </div>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
