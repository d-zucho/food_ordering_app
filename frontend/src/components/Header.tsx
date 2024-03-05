import { Link } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <header className='border-b-2 border-b-orange-500 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-2xl lg:text-3xl font-bold text-orange-500 tracking-tight'
        >
          MernEats.com
        </Link>

        {/* Header Right */}
        {!isMobile ? <DesktopNav /> : <MobileNav />}
      </div>
    </header>
  )
}

export default Header
