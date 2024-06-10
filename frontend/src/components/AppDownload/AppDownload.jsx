import React from 'react'
import './AppDownload.css';
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
       <p>For Better Experience Download <br></br> Tomato App</p>
       <div className="app-download-platforms">
         <img src={assets.play_store} alt='playstore' />
         <img src={assets.app_store} alt='appstore' />
       </div>
    </div>
  )
}

export default AppDownload
