import React from 'react'
import EmailIcon from '../images/EmailIcon.png'
import LinkedInIcon from '../images/LinkedInIcon.png'

const MainContent = () => {
  return (
    <main className='main'>
      <section className='up-field'>
        <h3 className='up-field__username'>Ivan Batchev</h3>
        <h5 className='up-field__specialization'>Frontend Developer</h5>
        <h6 className='up-field__site'>@mr_mnmlsm</h6>
      </section>

      <section className='buttons-set'>
        <button className='button-set__email-button'><img src={EmailIcon} alt="email-img" /> Email</button>
        <button className='button-set__linkedin-button'><img src={LinkedInIcon} alt="linkedin-img" /> LinkedIn</button>
      </section>

      <section className='text-fieled'>
          <h2 className='text-field__header'>About</h2>
          <p className='text-field__content'>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>         
      </section>
      <section className='text-fieled'>
          <h2 className='text-field__header'>Interests</h2>
          <p className='text-field__content'>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee & Tea fanatic.
          </p>         
      </section>
    </main>
  )
}

export default MainContent