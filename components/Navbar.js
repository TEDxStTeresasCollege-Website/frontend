import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ hide }) => {

    return (
        <div className="relative top-0 h-40">
            <div className={`relative -z-10 w-full h-40 ${hide}`}>
                <Image className="absolute block object-cover" src="/navbar/navbarbgmobile.svg" layout='fill' />
            </div>
            <nav className="absolute top-0 flex items-center w-full z-10 text-sm">
                <div className="flex-1 px-2 ml-2 md:ml-5">
                    <Link href="/"><Image src="/navbar/tedXSTClogo.svg" width="250%" height="100%" /></Link>
                </div>
                <div className="dropdown mr-2 md:mr-5">
                    <button className="bg-transparent text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul className="link-container dropdown-menu hidden">
                        <Link href="/"><a className="rounded-t navbar-link">Home</a></Link>
                        <Link href="/about"><a className="navbar-link">About TED/TEDx</a></Link>
                        <Link href="/about"><a className="navbar-link">TEDxStTeresasCollege</a></Link>
                        <Link href="/circles"><a className="navbar-link">TED Circles</a></Link>
                        <Link href="/partners"><a className="navbar-link">Our Partners</a></Link>
                        <Link href="/blogs"><a className="navbar-link">Blog</a></Link>
                        <Link href="/speaker"><a className="navbar-link">Nominate a Speaker</a></Link>
                        <Link href="/team"><a className="rounded-b navbar-link">Meet the Team</a></Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

Navbar.defaultProps = {
    hide: 'opacity-100'
}

export default Navbar;