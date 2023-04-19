import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../reuseables/button";
import NavLinks from "./navLinks";

export default function Navbar() {
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSearchInputBlur() {
    setSearchInputValue("");
  }

  return (
    <header className="sticky bg-transparent top-0 z-40">
      <div className="container mx-auto h-16 flex flex-wrap flex-col md:flex-row items-center transition ease-in-out duration-700 text-white hover:bg-white hover:text-black">
        <div className="title-font font-medium text-xl px-4 border-r-2 cursor-pointer">
          AfroVibe
        </div>
        <nav className="mr-auto px-4 flex flex-wrap items-center justify-center">
          <NavLinks />
        </nav>

        <div className="relative mr-5 flex justify-center">
          <input
            type="search"
            id="floating_outlined"
            className="block w-full text-sm justify-center items-center bg-transparent rounded-full outline appearance-none focus:outline-none focus:ring-0 focus:border-black focus:text-black focus:border-2 peer"
            placeholder=" "
            value={searchInputValue}
            onBlur={handleSearchInputBlur}
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm duration-100 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] rounded-full px-2 peer-focus:px-2 peer-focus:text-black peer-focus:opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
            Search
          </label>
        </div>

        <Button
          name="Join the movement"
          action=""
          reverse={true}
          bgColor="bg-transparent"
        />
        <button className="pr-3 pl-6">
          <FontAwesomeIcon icon={faUserLarge} />
        </button>
        <button className="px-3">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </header>
  );
}
