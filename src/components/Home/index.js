import ProfilePic from '../../assets/images/myDP.jpg'
import { Link } from 'react-router-dom'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'
import Typewriter from 'typewriter-effect'
import { useEffect, useState } from 'react'
import Partical from '../Partical'

const Home = () => {
  const [state] = useState({
    title: 'Hi 🖐️,',
    titleTwo: "I'm ",
    titleThree: 'Nishanthan.',
  })
  return (
    <>
      <Partical
        className="particles"
        params={{
          particles: {
            number: {
              value: 200,
            },
            size: {
              value: 15,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
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
                  "I'm a Web Developer.",
                  "I'm an Android Developer.",
                  "I'm a Content Writter",
                ],
              }}
            />
          </div>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="image-container">
          <img className="image" src={ProfilePic} alt="Logo" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
