import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'ACCUEIL',
    url: '/',
  },
  {
    id: 2,
    text: 'a propos',
    url: '/about',
  },
  {
    id: 3,
    text: 'boutique',
    url: '/products',
  },
]


export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`

