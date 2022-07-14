import React from 'react'
import Twitter from '../images/Twitter.png'
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import Github from '../images/GitHub.png'

const Footer = () => {
  return (
      <footer className='footer'>
          <section className='footer__images-set'>
              <a href=""><img src={Twitter} alt="" /></a>
              <a href=""><img src={Facebook} alt="" /></a>
              <a href=""><img src={Instagram} alt="" /></a>
              <a href=""><img src={Github} alt="" /></a>
          </section>
    </footer>
  )
}

export default Footer