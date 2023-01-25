import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/second-banner.png'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
const SecondCategories = () => {

  return (
    <Div>
      <div className='section-center second-categories'>
        <div className='second-categories-container'>
          <article className='second-categories-img'>
            <img src={img1} alt='' />
          </article>
          <article className='second-categories-details'>
            <h6>Nouvelles Collections</h6>
            <h3>LA COUTURE AU SÉNÉGAL, PLUS QU’UNE PASSION, UN MÉTIER !</h3>
            <p>
              Au Sénégal, l’art de bien s’habiller a toujours été omniprésent
              dans le quotidien des Sénégalais. En boubou traditionnel ou en
              tenue de ville, les Sénégalais aiment très bien se vêtir.
            </p>
            <Link to={`/products`}>
              <button className='second-categories-btn'>
                Achetez maintenant
              </button>
            </Link>
            <hr className='hr' />
            <div>
              <span>
                <Rating className='rating2' />
                <h6>4.5(5.000+)rating</h6>
              </span>
              <p>
                Le couturier adore les voyages, les découvertes et la nature.
                Ses collections s’inspirent en partie de ses périples et de ses
                rencontres. Très à l’écoute de ses clientes, il se complait à
                les surprendre en présentant des créations en accord avec ses
                convictions : des confections élaborées avec des tissus nobles,
                issus de matières naturelles souvent retravaillées et brodées.
              </p>
              <h3>cheikh mabaye</h3>
            </div>
          </article>
        </div>
        <hr className='hr2' />
      </div>
    </Div>
  )
}
const Div = styled.section`
  .hr,
  .hr2 {
    margin-top: 3rem;
  }
  .second-categories {
    background: #fff;
    margin-top: 5rem;
  }
  .second-categories-btn {
    background: aqua;
    color: grey;
    font-size: 1rem;
    letter-spacing: var(--spacing);
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.75rem;
  }
  .second-categories-img img {
    width: 100%;
  }
  .rating2 {
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    .second-categories-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
`
export default SecondCategories
