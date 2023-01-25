import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img1 from "../assets/cat1.jpg"
import img2 from '../assets/cat2.jpg'
import img3 from '../assets/cat3.jpg'
import img4 from '../assets/cat4.jpg'

const FirstCategories = () => {
  return (
    <Div>
      <div className='section-center first-categories'>
        <div className='first-categories-container'>
          <article className='first-categories-details f1'>
            <div>
              <h5>Nouvelles Collections</h5>
              <h3>
                meilleurs Costume Africain et Robe Patche Basin Brodé pour tout
                le monde
              </h3>
              <p>
                Au Sénégal, l’art de bien s’habiller a toujours été omniprésent
                dans le quotidien des Sénégalais. En boubou traditionnel ou en
                tenue de ville, les Sénégalais aiment très bien se vêtir.
              </p>
              <Link to={`/products`}>
                <button className='first-categories-btn'>
                  Achetez maintenant
                </button>
              </Link>
            </div>
          </article>
          <article className='first-categories-details f2'>
            <img src={img1} alt='' />
          </article>
          <article className='first-categories-details f3'>
            <img src={img2} alt='' />
          </article>
          <article className='first-categories-details f3'>
            <img src={img3} alt='' />
          </article>
          <article className='first-categories-details f2'>
            <img src={img4} alt='' />
          </article>
          <article className='first-categories-details f1'>
            <div>
              <h5>Nouvelles Collections</h5>
              <h3>
                meilleurs Tenue de Cérémonie et Deux Pièces pour tout le monde
              </h3>
              <p>
                Et surtout lors des grandes cérémonies culturelles et
                religieuses (baptêmes, mariages, Tabaski, Korité etc) pour un
                pays avec 95% de musulmans. Sans oublier les fêtes chrétiennes
                telles que : Noel (24 décembre) et la Saint-Sylvestre (31
                décembre). L’art de bien s’habiller est une vieille tradition
                chez les Sénégalais
              </p>
              <Link to={`/products`}>
                <button className='first-categories-btn'>
                  Achetez maintenant
                </button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </Div>
  )
}
const Div = styled.section`
  .first-categories {
    margin-top: 5rem;
  }
  .first-categories-container {
    margin: 2rem;
  }
  .first-categories-details img {
    width: 100%;
    margin: 1rem;
  }
  .f3 img {
    height: 400px;
  }
  .first-categories-btn {
    background: aqua;
    color: grey;
    font-size: 1rem;
    letter-spacing: var(--spacing);
    outline: none;
    border: none;
    cursor: pointer;
    padding:0.75rem;
  }
  @media (min-width: 576px) {
    .first-categories-container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 992px) {
    .first-categories-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default FirstCategories
