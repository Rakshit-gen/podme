'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
    const pathname=usePathname()
    const router = useRouter()
  return (
    
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href='/' className='flex cursor-pointer items-center gap-3 pb-2 max-lg:justify-center'>
            <Image src='/icons/logo.svg' alt='podme logo' width={23} height={27} />
            <h1 className='text-24 font-extrabold text-white max-lg:hidden'>PodMe</h1>
            </Link>
            {sidebarLinks.map(({route,label,imgURL})=>{
                const isActive = pathname === route || pathname.startsWith(`${route}/`)

                return <Link href={route} key={label} className={cn('flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start', {
                    'bg-nav-focus border-r-4 border-green-500':isActive
                })
                    
                }>
                <Image src={imgURL} height={24} width={24} alt='logo'></Image>{label}
                </Link>
})}

        </nav>
    </section>
  )
}

export default LeftSidebar
