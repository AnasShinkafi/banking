"use client"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import { Link } from 'lucide-react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from './Footer'

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={'/icons/hamburger.svg'}
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side={'left'} className=' border-none bg-white'>
                    <Link href={'/'} className='cursor-pointer items-center px-4 flex gap-1'>
                        <Image
                            src={'/icons/logo.svg'}
                            alt='Shinx logo'
                            height={34}
                            width={34}
                        />
                        <h1 className=" text-26 font-ibm-plex-serif font-bold text-black-1">Shinx</h1>
                    </Link>

                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className=' flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((sidebar) => {
                                    const isActive = pathname === sidebar.route || pathname.startsWith(`${sidebar.route}/`)
                                    return (
                                        <SheetClose asChild key={sidebar.route}>
                                            <Link href={sidebar.route} key={sidebar.label} className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>
                                                <Image
                                                    src={sidebar.imgURL}
                                                    alt={sidebar.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                                />
                                                <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isActive })}>{sidebar.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                User
                            </nav>
                        </SheetClose>
                        <Footer />
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav