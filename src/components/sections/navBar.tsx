import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../reuseables/button";
import NavLinks from "./navLinks";
import { Link } from "react-router-dom";

interface NavbarProps {
  windowWidth: number;
}
export default function Navbar(props: NavbarProps) {
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSearchInputBlur() {
    setSearchInputValue("");
  }

  return (
    <header className="sticky bg-transparent top-0 z-40 hover:bg-white focus:bg-white">
      <div className="max-w-[80%] mx-auto h-16 flex flex-nowrap flex-row items-center justify-center transition ease-in-out duration-700 text-white hover:text-black">
        {props.windowWidth > 880 && (
          <div className="title-font font-medium text-xl pr-4 border-r-2 cursor-pointer">
            AfroVibe
          </div>
        )}
        <nav className="mr-auto px-4 flex flex-wrap items-center justify-center">
          <NavLinks windowWidth={props.windowWidth} />
        </nav>

        <div className="relative flex items-center justify-center text-sm">
          <div className="relative h-full items-center">
            <input
              type="search"
              id="floating_outlined"
              className="w-11/12 p-1.5 bg-transparent border-2 border-white rounded-full transition ease-in-out duration-700 hover:border-black peer"
              placeholder=" "
              value={searchInputValue}
              onBlur={handleSearchInputBlur}
              onChange={(event) => setSearchInputValue(event.target.value)}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute -translate-y-4 scale-75 top-2 z-0 origin-[0] rounded-full peer-focus:duration-300 
               peer-focus:text-black peer-focus:opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
              Search
            </label>
          </div>
          {props.windowWidth > 1060 && (
            <div className="relative h-full items-center">
              <Link to="placeholder">
                <Button
                  name="Join the movement"
                  action=""
                  reverse={true}
                  bgColor="bg-transparent"
                  height=""
                  width=""
                  padding="p-1.5"
                  extraStyling="border-2 border-white hover:border-black"
                />
              </Link>
            </div>
          )}
          <Link to="placeholder">
            <button className="px-3">
              <FontAwesomeIcon icon={faUserLarge} size="lg" />
            </button>
          </Link>
          <Link to="placeholder">
            <button className="pr-3">
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
