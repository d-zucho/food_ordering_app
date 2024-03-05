import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

import { Menu } from 'lucide-react'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className='mb-8'>
          <span>Welcome to MernEats.com</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex'>
          <Button className='flex-1 font-bold bg-orange-500 hover:bg-orange-400'>
            Log in
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
