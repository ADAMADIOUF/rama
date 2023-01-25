import React from 'react'
import styled from 'styled-components'
import img1 from "../assets/lastbanner.jpg"

const LastBanner = () => {
  
  return (
    <Div>
      <div className='section-center last-banner'>
        <div className='last-banner-img'>
          <img src={img1} alt="" />
          </div>
          <div className='last-banner-details'>
            <h3>visitez notre magasin</h3>
            <p>
              le boubou est une chemise africaine composèe d'un grand rectangle
              de tissu avec une ouverte au centre pour le cou.
            </p>
            <h6>email:awagueyecouture25@gmail.com</h6>
            <h5>phone +221779436807</h5>
          </div>
       
      </div>
      
    </Div>
  )
}
const Div = styled.section`


`
export default LastBanner