'use client'
import Link from "next/link";
import { useState } from "react";



export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  function getMenuClasses() {
    let menuClasses = []
            if (isOpen) {
                menuClasses = [
                   "flex", 
                   "absolute",
                   "top-[60px]",
                   "bg-gray-800",
                   "w-full",
                   "p-4",
                   "left-0",
                   "gap-10",
                   "flex-col"
                ]
            } else {
                menuClasses.push("hidden");
            }

            return menuClasses.join("")
        }
    return (
        <nav className="bg-green-800 text-white p-4 sm:p-6 md:flex md: justify-between md: items-center rounded-bl-lg rounded -br-lg">
           <div className="container mx-auto flex justify-between items-center">  
           
            <Link href="/" className="container mx-auto flex justify-between items-center">Did I Like That?</Link>
           
            
    
                <div className={getMenuClasses()}>
                    <Link  href="/create" className="mx-2 hover: text-gray-300">New Entry</Link>
                    <Link  href="https://github.com/rohansinha01/capstone" className="mx-2 hover: text-gray-300">Github</Link>
                    <Link  href="/faq" className="mx-2 hover: text-gray-300">FAQ</Link>
                </div>

                <div>
                    <button onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                         <svg className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            
                            {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                           ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                            )}
                         </svg>
                       
                    </button>
                </div>
            </div>
            

        </nav>
    )
}