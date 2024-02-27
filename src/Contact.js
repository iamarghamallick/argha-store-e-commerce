import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d460.0172782259423!2d88.3668793186465!3d22.7231031647764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709050631354!5m2!1sen!2sin" width="100%" height="400" style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <h2>Feel free to contact us</h2>
        <div className="contact-form">
          <form action="https://formspree.io/f/mrgnklvp" method="post" className="contact-inputs">
            <input
              type="text"
              name="username"
              id="username"
              required
              autoComplete='off'
              // value=""
              placeholder='Username'
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete='off'
              // value=""
              placeholder='Email'
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder='Message'>
            </textarea>
            <input
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;
      margin-top: 3rem;
    }

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    input[type="submit"] {
      cursor: pointer;
      transition: all 0.2s;
    }
  `;

export default Contact