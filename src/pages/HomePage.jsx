import React from 'react'
import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <div>
        <div>Featured News</div>
        <div>
          <div>
            news feed
          </div>
          <div>
            <div>
              feed 1
            </div>
            <div>
              feed 2
            </div>
            <div>
              feed 3
            </div>
            <div>
              feed 4
            </div>
          </div>
          <button>
            View more News
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage