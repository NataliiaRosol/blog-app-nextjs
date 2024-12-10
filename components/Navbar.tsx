'use client'

import Link from 'next/link'
import LoadingBar from 'react-top-loading-bar'
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from './theme-toggle'
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'




const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(()=> {
    setProgress(30);
    setTimeout(()=> {
      setProgress(700);
    }, 700);
    setTimeout(()=> {
      setProgress(100);
    }, 1000)
  }, [pathname])
  useEffect(()=> {
    setTimeout(()=>{
      setProgress(0)
    }, 1100)
    
  }, [])

  return (
    <nav className="h-16 bg-background/60 sticky z-50 top-0 border-b px-8 backdrop-blur flex items-center space-x-4 justify-between">
      <LoadingBar
        color='#00008B'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="font-bold text-lg md:text-xl ">
        <Link href='/'>MyBlog</Link>
      </div>
      <ul className='hidden md:flex w-full justify-end items-center space-x-6 '>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/blogs'}>Blogs</Link></li>
        <li><Link href={'/contacts'}>Contacts</Link></li>
        <li className="buttons space-x-2">
          <Link href={'/login'} className={buttonVariants({ variant: "outline" })}>Login</Link>
          <Link href={'/signup'} className={buttonVariants({ variant: "outline" })}>Sign Up</Link>
          
        </li>
        
      </ul>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Sheet>
  <SheetTrigger><Menu className='size-7 md:hidden' /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        
      </div>
      

      
    </nav>
  )
}

export default Navbar