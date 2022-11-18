import React from 'react'
import Companies from '../../components/companies'
import NavHero from '../../components/navhero'
import Platform from '../../components/platform'

const Home = () => {
  return (
    <div>
        <NavHero />
        <Companies />
        <Platform />
    </div>
  )
}

export default Home