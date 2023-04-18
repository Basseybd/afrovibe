import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSearchInputBlur() {
    setSearchInputValue("");
  }
  return (
    <header className="sticky bg-black top-0 z-0">
      <div className="container mx-auto h-10 flex flex-wrap p-2.5 flex-col md:flex-row items-center text-white">
        <div className="title-font font-medium">
          <div className="ml-3 text-xl">AfroVibe</div>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-whtie-700 flex flex-wrap items-center text-base justify-center">
          <button className="pr-5 hover:underline">Men</button>
          <button className="pr-5 hover:underline">Women</button>
          <button className="pr-5 hover:underline">Accessories</button>
          <button className="pr-5 hover:underline">Collections</button>
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
        <button className="inline-block outline border-white rounded-md py-1 px-3 mt-4 md:mt-0 transition ease-in-out duration-700 bg-black text-white  text-sm font-medium hover:bg-white hover:text-black">
          Join the movement
        </button>
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
