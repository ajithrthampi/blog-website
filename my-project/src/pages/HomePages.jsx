import React from 'react'
import Header from '../components/Header'
import EmailContainer from '../components/EmailContainer'
import HeaderNavigate from '../components/HeaderNavigate'
import NewsFeeds from '../components/NewsFeeds'
import Footer from '../components/Footer'

const HomePages = () => {
  return (
    <>
      <div className='md:px-20 px-3'>
        <Header/>
        <EmailContainer/>
        <HeaderNavigate/>
        <Footer/>
      </div>
    </>
  )
}

export default HomePages