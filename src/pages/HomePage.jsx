import React from 'react'
import Banner from '../components/Banner'
import '../assets/scss/pages/HomePage.scss'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <div className='container'>
        <div className='featured-news'>
          Featured News
        </div>
        <div>
          <div className='new-feed'>
            news feed
          </div>
          <div className='block-feed'>
            <div  className='feed'>
              feed 1
            </div>
            <div className='feed'>
              feed 2
            </div>
            <div className='feed'>
              feed 3
            </div>
            <div className='feed'>
              feed 4
            </div>
          </div>
          <div className='button-container'>
            <button className='button-view'>
              View more News
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage