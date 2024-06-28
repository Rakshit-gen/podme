import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href='/' className='flex cursor-pointer items-center gap-3 pb-1 max-lg:justify-center'>
            <Image src='/icons/logo.svg' alt='podme logo' width={23} height={27} />
            <h1 className='text-24 font-extrabold text-white max-lg:hidden'>PodMe</h1>
            </Link>
            {sidebarLinks.map(({route,label,imgURL})=>{
                return <Link href={route} className='flex gap-2'>
                <Image src={imgURL} height={20} width={25} alt='logo'></Image>{label}
                </Link>
})}

        </nav>
    </section>
  )
}

export default LeftSidebar