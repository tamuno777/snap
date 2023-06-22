import React from 'react'
import './body.css'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import sideImage from '../assets/image-hero-mobile.png'
import databiz from '../assets/client-databiz.svg'
import audip from '../assets/client-audiophile.svg'
import meet from '../assets/client-meet.svg'
import maker from '../assets/client-maker.svg'


export default function Body() {
  return (
    <div className='body-container '>
        <Container className='text-area'>
            <h1 > <span className='span'>Make</span> remote work</h1>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Provident doloremque dolores aut, delectus labore omnis, maxime itaque animi  vel nulla suscip</p>

            <Button className='btn' variant="dark" href="#text-buttons" >Learn more</Button>

            <div className='mt-5   svgs'>
            <img className='data' src={databiz} alt="" />
            <img className='audio' src={audip} alt="" />
            <img className='meet' src={meet} alt="" />
            <img className='maker' src={maker} alt="" />


            </div>

        </Container>
        <div className='
        heroimg '>
                <img src={sideImage} alt="" />
        </div>
    </div>
  )
}
