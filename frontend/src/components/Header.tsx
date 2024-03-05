import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='border-b-2 border-b-orange-500 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-2xl lg:text-3xl font-bold text-orange-500 tracking-tight'
        >
          MernEats.com
        </Link>

        <div className='flex gap-4'>
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
    </header>
  )
}

export default Header
