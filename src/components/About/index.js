import './index.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  //   const [letterClass, setLetterClass] = useState('text-animate')

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, [])

  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch('NishanthanKanagasunderam.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Nishanthan_CV.pdf'
        alink.click()
      })
    })
  }
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              // letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '😊']}
              idx={15}
            />
          </h1>
          <p>
            Motivated software engineering undergraduate from Sri Lanka
            Institute of Information Technology.
          </p>
          <p align="LEFT">
            Solution-driven web developer adept at contributing to highly
            collaborative work environments and finding solutions.Proven
            experience developing consumer-focused websites using HTML, CSS,
            React and Node.JS.Good knowledge of the best practices for web
            design and user experience.
          </p>
          {/* <p align="LEFT">
            Name : Nishanthan Kanagasunderam Field : Software Engineering
          </p> */}
          <Link className="flat-button" onClick={downloadResume}>
            Resume
          </Link>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
//commant
export default About
