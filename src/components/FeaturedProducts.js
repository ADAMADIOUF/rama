import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const{products_loading:loading,
  products_error:error,
  featured_products:featured} = useProductsContext()
  if(loading){
    return<Loading/>
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Produits populaires</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 9).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 525px;
    }
  }
  
  
   .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
`

export default FeaturedProducts
