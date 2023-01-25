import React from 'react'
import { TbMap2, TbPhoneCall } from 'react-icons/tb'
import {GiReceiveMoney} from "react-icons/gi"
import {MdPayments} from "react-icons/md"
import styled from 'styled-components'
const TopSection = () => {
  return (
    <Div>
      <div className='section-center topSection'>
        <div className='topSection-container'>
          <article>
            <span className='icon-topSection'>
              <TbMap2 />
            </span>
            <div className='topSection-details'>
              <h3>emplacement</h3>
              <p>senegal,Dakar Biscuitterie de la Medina</p>
            </div>
          </article>
          <article>
            <span className='icon-topSection'>
              <GiReceiveMoney />
            </span>
            <div className='topSection-details'>
              <h3>sécurité des paiements</h3>
              <p>
                vous pouvez payer sur toutes les plateformes de transfert
                d'argent
              </p>
            </div>
          </article>
          <article>
            <span className='icon-topSection'>
              <TbPhoneCall />
            </span>
            <div className='topSection-details'>
              <h3>24/7 ligne d'assistance</h3>
              <p>nous restons à votre disposition pour toutes questions </p>
            </div>
          </article>
          <article>
            <span className='icon-topSection'>
              <MdPayments />
            </span>
            <div className='topSection-details'>
              <h3>expédition</h3>
              <p>expédition pour commande supérieure 200.000cfa</p>
            </div>
          </article>
        </div>
      </div>
      
    </Div>
  )
}
const Div = styled.section`
  .topSection {
    margin-top: 2rem;
  }
  .icon-topSection {
    color:aqua;
    font-size: 3rem;
  }
  article {
    display: flex;
    gap: 5rem;
  }
  .topSection-details h3 {
    font-size: 1rem;
  }
  .topSection-details p {
    font-size: 1rem;
    color:grey;
  }
  @media (min-width: 576px) {
    .topSection-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  @media (min-width: 992px) {
    .topSection-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default TopSection