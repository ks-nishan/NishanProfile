import LogoTitle from '../../assets/images/n-logo-c.png'
import { Link } from 'react-router-dom'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          I'm
          <img src={LogoTitle} alt="developer" />
          ishanthan
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / Software Engineer / Mobile App Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
