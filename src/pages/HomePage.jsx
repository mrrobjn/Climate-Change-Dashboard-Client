import React from 'react'
import Banner from '../components/Banner'
import '../assets/scss/pages/HomePage.scss'


const feedCart = () => {
  return <div  className='feed'>
            <img className='feed-image' src="https://image2.slideserve.com/5236252/climate-graphs-l.jpg" alt="" />
            <div className='feed-information'>
              <div className='date'> 14 SEPTEMBER , 2021</div>
              <div className='title'>Climate change is affecting Vietnam Climate change is affecting Vietnam Climate change is affecting Vietnam</div>
            </div>
          </div>
}

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
            <div className='feed-information'>
              <div className='date'> 14 SEPTEMBER , 2021</div>
              <div className='title'>Climate change is affecting Vietnam</div>
              <div className='line'></div>
              <div className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <a className='read-more'>
                Read more
                <svg viewBox="0 -6.5 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#2043cf"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-1511.000000, -158.000000)" fill="#0075ff" fill-rule="nonzero"> <g id="1" transform="translate(1350.000000, 120.000000)"> <path d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </a>
            </div>
            {/* <img className='feed-image' src="https://1.bp.blogspot.com/-4ulYHLowiCQ/V8Vo9Sp7MgI/AAAAAAAA4NQ/o9XEgGOsb0whCVg-TnmrPaSnGEf-hzUAwCLcB/s1600/Temperature.gif" alt="" /> */}
            <img className='feed-image' src="https://image2.slideserve.com/5236252/climate-graphs-l.jpg" alt="" />
          </div>
          <div className='block-feed'>
            {feedCart()}
            {feedCart()}
            {feedCart()}
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