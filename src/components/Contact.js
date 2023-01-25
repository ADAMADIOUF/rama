import React from 'react'
import styled from 'styled-components'
import { ImLocation2 } from 'react-icons/im'
import { BsTelephoneForwardFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import { BsFacebook } from 'react-icons/bs'
import {FaTiktok } from 'react-icons/fa'

const Contact = () => {
  return (
    <Wrapper>
      <div className='contact'>
        <div className='section-center'>
          <div className='contact-container'>
            <article className='contact-form'>
              <h5>
                recevez notre e-mail pour plus d'informations sur les nouveaux
                articles
              </h5>

              <form className='contact-form'>
                <input
                  type='text'
                  className='input-form'
                  placeholder='entrer votre Email'
                />
                <button type='submit' className='btn-form'>
                  s'abonner
                </button>
              </form>
            </article>
            <article className='form-details'>
              <h3>
                <span>plus d informations?</span>
                (+221779436804)
              </h3>
              <p>nous sommes ouverts 8h:00-22h:00</p>
            </article>
          </div>
          <div className='contact-information-container'>
            <article>
              <div className='contact-span-icon'>
                <span className='icon-info'>
                  <ImLocation2 />
                </span>
                <span>30, Rue de Biscuitterie, Dakar Dakar Senegal</span>
              </div>
            </article>
            <article>
              <div className='contact-span-icon'>
                <span className='icon-info'>
                  <BsTelephoneForwardFill />
                </span>
                <span>+(221)779436804</span>
              </div>
            </article>
            <article>
              <div className='contact-span-icon'>
                <span className='icon-info'>
                  <MdEmail />
                </span>
                <span>awagueyecouture25@gmail.com</span>
              </div>
            </article>
            <article>
              <div className='contact-span-icon'>
                <span className='icon-info'>
                  <FaTiktok />
                </span>
                <span className='icon-info'>
                  <BsFacebook />
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .contact {
    background: #000;
    margin-top: 5rem;
    color: #fff;
    padding: 2rem;
  }
  .form-details p {
    color: aqua;
  }
  .contact-form p {
    color: #fff;
  }
  .input-form {
    width: 50%;
    padding: 0.75rem;
    outline: none;
  }
  .btn-form {
    padding: 0.75rem;
    width: 30%;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
  @media (min-width: 992px) {
    .contact-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  .contact-information-container article {
    margin: 2rem;
  }
  .icon-info {
    font-size: 2rem;
    background: var(--clr-white);
    color: var(--clr-black);
    border-radius: 50%;
    padding: 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .icon-info:hover {
    border-radius: 10%;
    background: aqua;
  }
  .contact-span-icon span {
    margin: 0.5rem;
  }
  @media (min-width: 576px) {
    .contact-information-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
  @media (min-width: 992px) {
    .contact-information-container {
      grid-template-columns: repeat(4, 1fr);
    }
    .contact-information-container article {
      margin: 0;
    }
  }
`

export default Contact
