import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import UsernameMenu from './UsernameMenu'

const DesktopNav = () => {
  // loginWithRedirect is a function that redirects the user to the Auth0 Universal Login Page
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    <>
      <span className='flex space-x-2 items-center'>
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <div className='flex items-center gap-4'>
            <Button
              asChild
              className='bg-orange-500 hover:bg-orange-400 text-white'
            >
              <Link to='/'>Sign Up</Link>
            </Button>
            <Button
              asChild
              variant={'outline'}
              onClick={async () => await loginWithRedirect()}
            >
              <Link to=''>Log In</Link>
            </Button>
          </div>
        )}
      </span>
    </>
  )
}

export default DesktopNav
