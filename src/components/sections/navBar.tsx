import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "../reuseables/button";
import NavLinks from "./navLinks";
import { Link } from "react-router-dom";

interface NavbarProps {
  breakpoint: number;
  windowWidth: number;
}
export default function Navbar(props: NavbarProps) {
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSearchInputBlur() {
    setSearchInputValue("");
  }

  return (
    <header className="sticky bg-transparent top-0 z-40 hover:bg-white">
      <div className="max-w-[80%] mx-auto h-16 flex flex-wrap flex-col md:flex-row items-center justify-center transition ease-in-out duration-700 text-white hover:text-black">
        {props.windowWidth > props.breakpoint && (
          <div className="title-font font-medium text-xl pr-4 border-r-2 cursor-pointer">
            AfroVibe
          </div>
        )}
        <nav className="mr-auto px-4 flex flex-wrap items-center justify-center">
          <NavLinks
            breakpoint={props.breakpoint}
            windowWidth={props.windowWidth}
          />
        </nav>

        <div className="relative flex items-center justify-center h-8">
          <div className="relative h-full items-center">
            <input
              type="search"
              id="floating_outlined"
              className="block h-full w-11/12 text-sm bg-transparent rounded-full outline focus:border-black focus:text-black focus:border-1 peer"
              placeholder=" "
              value={searchInputValue}
              onBlur={handleSearchInputBlur}
              onChange={(event) => setSearchInputValue(event.target.value)}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm duration-0 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] rounded-full peer-focus:px-2 peer-focus:text-black peer-focus:opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
              Search
            </label>
          </div>
          {props.windowWidth > props.breakpoint && (
            <div className="relative">
              <Link to="placeholder">
                <Button
                  name="Join the movement"
                  action=""
                  reverse={true}
                  bgColor="bg-transparent"
                  height="h-7"
                  width="w-full"
                />
              </Link>
            </div>
          )}
          <Link to="placeholder">
            <button className="pr-3 pl-3">
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
