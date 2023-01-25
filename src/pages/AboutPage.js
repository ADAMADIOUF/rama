import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='A Propos' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='' />
        <article>
          <div className='title'>
            <h2>à propos de moi</h2>
            <div className='underline'></div>
          </div>
          <p>
            je m'appelle cheikh Mbaye œuvre toujours dans la tradition
            artisanale avec le respect des métiers liés à l’Art et à des savoirs
            faire Africains. Awa Gueye Couture tire sa force du
            multiculturalisme. Le couturier adore les voyages, les découvertes
            et la nature. Ses collections s’inspirent en partie de ses périples
            et de ses rencontres. Très à l’écoute de ses clientes, il se
            complait à les surprendre en présentant des créations en accord avec
            ses convictions : des confections élaborées avec des tissus nobles,
            issus de matières naturelles souvent retravaillées et brodées.
            Depuis ses premiers pas, auprès d'un chef couturier, Cheikh Mbaye a
            toujours travaillé dans la plus pure tradition “Haute Couture” et
            s’adresse à toutes celles et ceux qui recherchent l’élégance et
            l’exception. Puisant son inspiration au tréfonds des cultures du
            monde, Cheikh Mbaye est aujourd’hui un acteur incontournable de la
            mode Sénégalaise et Africaine. Plébiscité par le monde du stylisme,
            Awa Gueye Couture a su séduire une clientèle internationale par le
            choix des matières, le glamour, la douceur et l’esprit du détail.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
