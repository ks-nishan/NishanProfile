import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { Component } from 'react'
import Loader from 'react-loaders'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { dataProjects } from './data'

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              // letterClass={letterClass}
              strArray={[
                'M',
                'y',
                ' ',
                'P',
                'r',
                'o',
                'j',
                'e',
                'c',
                't',
                's',
                '📂',
              ]}
              idx={15}
            />
          </h1>
          <p>
            I have contributed to several academic web-based projects and mobile
            application solutions until the third year of my university life.
          </p>
        </div>
      </div>
      <div className="card-container">
        <Slider {...settings}>
          {dataProjects.map((item) => (
            <div className="card">
              <div className="card-top">
                <img className="card-mage" src={item.link} alt={item.title} />
              </div>
              <div className="card-bottom">
                <h1>{item.title}</h1>
                <h3>{item.techs}</h3>
                <h5>{item.description}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
