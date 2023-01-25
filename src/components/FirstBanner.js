import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/banner1.png'
const FirstBanner = () => {
  return (
    <Div>
      <div className='first-banner'>
        <div className='first-banner-details'>
          <img src={img1} alt='' />
          <p>
            Résultat d’une longue recherche, Awa Gueye Couture, Costume Africain
            est une fusion des charmes de la veste et de ceux du boubou
            traditionnel africain. Nous croyons sincèrement que l’ajustement et
            la coupe est la partie la plus importante d’un bon costume Africain.
          </p>
          <h3>awa gueye couture,la confiance en soi</h3>
        </div>
      </div>
    </Div>
  )
}
const Div = styled.section`
  .first-banner {
    background: var(--clr-grey-10);
    text-align: center;
    padding: 3rem;
  }
  .first-banner-details {
    margin: 0 auto;
    padding: 2rem;
  }
  @media screen(min-width:992px) {
    .first-banner-details p {
      max-width: 45rem;
    }
  }
`
export default FirstBanner
