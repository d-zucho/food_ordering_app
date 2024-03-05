import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const DesktopNav = () => {
  return (
    <div className='flex items-center gap-4'>
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
  )
}

export default DesktopNav
