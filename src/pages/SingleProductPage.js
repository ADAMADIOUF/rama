import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()
  const { id } = useParams()
  const history = useHistory()
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
  }, [])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const { name, desc, stock, stars, reviews, id: sku, company, img } = product
  return (
    <Wrapper>
      <PageHero title={name} product={product} />
      <div className='section section-center page'>
        <Link to={`/products`} className='btn'>
          retour aux produits
        </Link>
        <div className='product-center'>
          <ProductImages img={img} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />

            <p className='desc'>{desc}</p>
            <p className='info'>
              <span>Disponible:</span>
              {stock > 0 ? 'en stock' : 'En rupture de stock'}
            </p>
            <p className='info'>
              <span>Unité de gestion de stock:</span>
              {sku}
            </p>
            <p className='info'>
              <span>marque:</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  .btn{
    background:#000;
    color:#fff;
  }
`

export default SingleProductPage
