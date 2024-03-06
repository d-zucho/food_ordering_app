import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

import { CircleUserRound, Menu } from 'lucide-react'
import MobileNavLinks from './MobileNavLinks'

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0()
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className='mb-8'>
          {isAuthenticated ? (
            <span className='flex items-center font-bold gap-2'>
              <CircleUserRound className='text-orange-500' />
              {user?.name}
            </span>
          ) : (
            <span>Welcome to MernEats.com</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex flex-col gap-4 mt-4 items-center'>
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className='flex-1 font-bold bg-orange-500 hover:bg-orange-400'
              onClick={() => loginWithRedirect()}
            >
              Log in
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
