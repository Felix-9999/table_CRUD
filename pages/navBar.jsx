import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-black-400 fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">

                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-200 rounded-md outline-none focus:border-gray-100 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src="/close.svg" width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image
                                            src="/hamburger-menu.svg"
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-100  md:hover:text-purple-100 md:hover:bg-transparent">
                                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center    border-purple-100  md:hover:text-purple-100 md:hover:bg-transparent">
                                    <Link href="/table" onClick={() => setNavbar(!navbar)}>
                                        Table
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center   border-purple-100  md:hover:text-purple-100 md:hover:bg-transparent">
                                    <Link href="/login" onClick={() => setNavbar(!navbar)}>
                                        signIn
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 border-purple-100  md:hover:text-purple-100 md:hover:bg-transparent">
                                    <Link href="/register" onClick={() => setNavbar(!navbar)}>
                                        SignUp
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;