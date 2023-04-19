import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReverseButton from "../reuseables/button";
import NavLinks from "./navLinks";

export default function Navbar() {
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSearchInputBlur() {
    setSearchInputValue("");
  }
  return (
    <header className="sticky bg-black top-0 z-0">
      <div className="container mx-auto h-16 flex flex-wrap flex-col md:flex-row items-center text-white">
        <div className="title-font font-medium text-xl pr-4 border-r-2 cursor-pointer ">
          AfroVibe
        </div>
        <nav className="mr-auto px-4 flex flex-wrap items-center justify-center">
          <NavLinks />
        </nav>

        <div className="relative mr-5">
          <input
            type="search"
            id="floating_outlined"
            className="block px-2.5 pb-0 pt-4 w-full text-sm text-white items-center bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            value={searchInputValue}
            onBlur={handleSearchInputBlur}
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm bg-black duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
            Search
          </label>
        </div>
        <ReverseButton name="Join the movement" action="" reverse={true} />
        <button className="pr-3 pl-6 text-slate-600 hover:text-white">
          <FontAwesomeIcon icon={faUserLarge} />
        </button>
        <button className="px-3 text-slate-600 hover:text-white">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </header>
  );
}
