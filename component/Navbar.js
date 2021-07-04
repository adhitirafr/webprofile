import Link from 'next/link'
import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 bg-blue-900">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static">
                        <Link href="/">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-blue-100">
                                NIT. | Your connected solusion
                            </a>
                        </Link>
                    </div>

                    <div className="flex flex-col lg:flex-row list-none lg:ml-auto text-blue-100">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/pricing">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                        Pricing
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/portofolio">
                                    <a href="" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                        Portofolio
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bg-yellow-300 py-1"></div>
        </>
    );
}
 
export default Navbar;