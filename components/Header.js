import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll if you're using it

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-30 shadow-md z-50 backdrop-filter backdrop-blur-lg">
        <div className="flex flex-col px-4 pt-2 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between">
          <div className="flex flex-row items-center justify-between p-4">
            <a
              href="/"
              className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300 md:text-gray-900"
            >
              <img
                className="transition w-10 h-auto"
                src="images/logo.png"
                alt="Product Image"
              />
            </a>
            <button
              className="px-3 py-1 bg-white rounded-full cursor-pointer bg-opacity-30 focus:outline-none md:hidden"
              type="button"
              aria-label="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            className={
              'mt-3 flex-grow items-start md:flex lg:mt-0' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <div className="flex-col pl-4 text-xl md:flex-grow md:pl-0">
              <ul className="flex flex-wrap items-center justify-end flex-grow gap-2 pr-4 space-x-2 mb-2 md:gap-6 md:space-x-6">
                <li>
                  <Link
                    to="portfolio1"
                    smooth={true}
                    duration={500}
                    className="text-lg text-black md:text-black hover:text-gray-300 md:hover:text-gray-700 cursor-pointer"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="text-lg text-black md:text-black hover:text-gray-300 md:hover:text-gray-700 cursor-pointer"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="pt-20"></div> {/* 헤더 높이만큼의 패딩을 추가하여 컨텐츠가 가려지지 않도록 */}
    </>
  );
}
