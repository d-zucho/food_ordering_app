import HeroImg from '../assets/images/hero.png'

const Hero = () => {
  return (
    <div>
      <img
        src={HeroImg}
        alt='Hero'
        className='w-full max-h-[600px] object-cover'
      />
    </div>
  )
}

export default Hero
