import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="w-screen h-[10vh] bg-white shadow-lg flex justify-between items-center px-10 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-center py-2 pr-6">
          <h1 className="text-3xl text-black font-joining">
            <span className="text-4xl font-extrabold text-green-400 font-joining">
              B
            </span>
            ookestra
          </h1>
        </div>
        <div className="flex items-center justify-center gap-x-10 ">
          <div className="items-center justify-center hidden lg:flex">
            {" "}
            <Link
              to={"/"}
              className="px-6 py-2 text-sm lg:text-[16px] text-fade-black font-radios hover:text-green-500 transition-all ease-in-out duration-300"
            >
              Home
            </Link>
            <Link
              to={"/allBooks"}
              className="px-6 py-2 text-sm lg:text-[16px] text-fade-black font-radios hover:text-green-500 transition-all ease-in-out duration-300"
            >
              All Books
            </Link>
            <Link
              to={"/addBook"}
              className="px-6 py-2 text-sm lg:text-[16px] text-fade-black font-radios hover:text-green-500 transition-all ease-in-out duration-300"
            >
              Add Book
            </Link>
            <Link
              to={"/allBooks"}
              className="px-6 py-2 text-sm lg:text-[16px] text-fade-black font-radios hover:text-green-500 transition-all ease-in-out duration-300"
            >
              Update Book
            </Link>
            <Link className="px-6 py-2 text-sm lg:text-[16px] text-fade-black font-radios hover:text-green-500 transition-all ease-in-out duration-300">
              About us
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-5">
            {open ? (
              <ImCross
                size={30}
                className="text-green-400 lg:hidden"
                onClick={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <GiHamburgerMenu
                size={30}
                className="text-green-400 lg:hidden"
                onClick={() => {
                  setOpen(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div
        id="hs-offcanvas-example"
        className={`hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto transition-transform duration-500 ease-in-out transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } block end-auto bottom-0
  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700`}
      >
        <div className="px-6">
          <Link
            className="flex-none text-xl font-semibold text-black focus:outline-none focus:opacity-80 dark:text-white"
            href="/"
            aria-label="Brand"
          >
            BOOKESTRA
          </Link>
        </div>
        <nav
          className="flex flex-col flex-wrap w-full p-6 hs-accordion-group"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                to={""}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </Link>
            </li>
            <Link></Link>
            <li className="hs-accordion" id="users-accordion">
              <Link
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                to={""}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                All Books
              </Link>
            </li>
            <li className="hs-accordion" id="account-accordion">
              <Link
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                to={""}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={18} cy={15} r={3} />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                  <path d="m21.7 16.4-.9-.3" />
                  <path d="m15.2 13.9-.9-.3" />
                  <path d="m16.6 18.7.3-.9" />
                  <path d="m19.1 12.2.3-.9" />
                  <path d="m19.6 18.7-.4-1" />
                  <path d="m16.8 12.3-.4-1" />
                  <path d="m14.3 16.6 1-.4" />
                  <path d="m20.7 13.8 1-.4" />
                </svg>
                Add Book
              </Link>
            </li>
            <li className="hs-accordion" id="projects-accordion">
              <Link
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                to={""}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                  <path d="M15 2v5h5" />
                </svg>
                Update Book
              </Link>
            </li>

            <li>
              <Link
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                to={""}
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
