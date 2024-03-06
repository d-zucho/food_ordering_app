import Details from '@/components/Details'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
          Grab your Craving from Anywhere
        </h1>
        <span className='-mt-2'>It's just a click away!</span>
        <div className='container flex items-center relative'>
          <Search
            size={24}
            className='text-orange-500 absolute w-8 h-8 left-10'
          />
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search by City or Town'
            className='w-full border-2 border-slate-200 outline-none py-3 pl-12 rounded-full'
          />
          <Button className='bg-orange-500 text-white rounded-full absolute right-10'>
            Search
          </Button>
        </div>
      </div>
      <Details />
    </div>
  )
}

export default HomePage
