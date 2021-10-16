import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <nav className="absolute top-0 flex items-center w-full">
                <img src="/navbar/Header.png" className="absolute -z-10" />
                <div className="flex-1 px-2 ml-5">
                    <Link href="/"><Image src="/navbar/tedXSTClogo.svg" width="300%" height="100%" /></Link>
                </div>
                <div className="dropdown mr-5">
                    <button className="bg-transparent text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-100 pt-1 right-5 text-right">
                        <Link href="/about"><a className="rounded-t bg-black hover:bg-gray-800 py-4 px-8 block">About TED/TEDx</a></Link>
                        <Link href="/about"><a className="bg-black hover:bg-gray-800 py-4 px-8 block">TEDxStTeresasCollege</a></Link>
                        <Link href="/circles"><a className="bg-black hover:bg-gray-800 py-4 px-8 block">TED Circles</a></Link>
                        <Link href="/partners"><a className="bg-black hover:bg-gray-800 py-4 px-8 block">Our Partners</a></Link>
                        <Link href="/blogs"><a className="bg-black hover:bg-gray-800 py-4 px-8 block">Blog</a></Link>
                        <Link href="/speaker"><a className="bg-black hover:bg-gray-800 py-4 px-8 block">Nominate a Speaker</a></Link>
                        <Link href="/team"><a className="rounded-b bg-black hover:bg-gray-800 py-4 px-8 block">Meet the Team</a></Link>
                    </ul>
                </div>
                {/* <button className='flex p-3 mr-5 hover:bg-gray-700 rounded text-white ml-auto hover:text-white outline-none'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button> */}
            </nav>
        </>
    );
}

export default Navbar;