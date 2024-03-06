import AppStore from '../assets/images/appDownload.png'
import LandingPageImage from '../assets/images/landing.png'
import DownloadImage from '../assets/images/appDownload.png'

const Details = () => {
  return (
    <div className='grid md:grid-cols-2 gap-5'>
      <img src={LandingPageImage} alt='' />

      <div className='flex flex-col items-center justify-center gap-4 text-center'>
        <span className='font-bold tracking-tighter text-3xl'>
          Pickup whatever you're craving even faster!
        </span>
        <span className='text-slate-400'>
          Download MernEats for even faster ordering and personalized
          recommendations
        </span>

        <div id='app-buttons' className='flex'>
          <img src={AppStore} alt='App Store Buttons' />
        </div>
      </div>
    </div>
  )
}

export default Details
