"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { isatty } from 'tty'
import Footer from './Footer'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href={'/'} className='mb-12 cursor-pointer items-center flex gap-2'>
                <Image 
                    src={'/icons/logo.svg'} 
                    alt='Shinx logo' 
                    height={34}
                    width={34}
                    className='size-[24px] max-xl:size-14'
                    />
                    <h1 className="sidebar-logo">Shinx</h1>
            </Link>
            {sidebarLinks.map((sidebar) => {
                const isActive = pathname === sidebar.route || pathname.startsWith(`${sidebar.route}/`)
                return (
                    <Link href={sidebar.route} key={sidebar.label} className={cn('sidebar-link', { 'bg-bank-gradient' : isActive})}>
                        <div className="relative size-6">
                            <Image 
                                src={sidebar.imgURL}
                                alt={sidebar.label}
                                fill
                                className={cn({'brightness-[3] invert-0' : isActive })}
                            />
                        </div>
                        <p className={cn('sidebar-label', {'!text-white': isatty})}>{sidebar.label}</p>
                    </Link>
                )
            })}
            User
        </nav>
        <Footer 
            user={user}
            type='mobile'
        />
    </section>
  )
}

export default Sidebar