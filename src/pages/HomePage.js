import React from 'react'

import { FeaturedProducts, Contact} from '../components'
import BackTotop from '../components/BackTop'
import FirstBanner from '../components/FirstBanner'
import FirstCategories from '../components/FirstCategories'
import LastBanner from '../components/LastBanner'
import Reviews from '../components/Reviews'
import SecondCategories from '../components/SecondCategories'
import Slide from "../components/Slide"
import TopSection from '../components/TopSection'


const HomePage = () => {
  return <main>
    <Slide/>
    <BackTotop/>
    <TopSection/>
    <FirstCategories/>
    <FirstBanner/>
    <SecondCategories/>
  
    <FeaturedProducts/>
    <LastBanner/>
    <Reviews/>
    <Contact/>
  </main>
}

export default HomePage
