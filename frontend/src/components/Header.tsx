import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'
import MobileNav from './MobileNav'

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
        {!isMobile ? (
          <div className='flex items-center gap-4'>
            <Menu className='text-orange-500' size={24} />
            <div className=''>
              <Button
                asChild
                className='bg-orange-500 hover:bg-orange-400 text-white'
              >
                <Link to='/'>Sign Up</Link>
              </Button>
              <Button asChild variant={'outline'}>
                <Link to=''>Log In</Link>
              </Button>
            </div>
          </div>
        ) : (
          <MobileNav />
        )}
      </div>
    </header>
  )
}

export default Header
