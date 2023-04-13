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
    <header className="bg-black md:sticky top-0">
      <div className="container mx-auto flex flex-wrap p-2.5 flex-col md:flex-row items-center text-white">
        <div className="title-font font-medium mb-4 md:mb-0">
          <a href="#" className="ml-3 text-xl">
            AfroVibe
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-whtie-700	flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-black">
            Men
          </a>
          <a href="#" className="mr-5 hover:text-black">
            Women
          </a>
          <a href="#" className="mr-5 hover:text-black">
            Accessories
          </a>
          <a href="#" className="mr-5 hover:text-black">
            Collections
          </a>
        </nav>
        <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
          <input
            type="search"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 eading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="search_ID"
            placeholder="Type query"
            value={searchInputValue}
            onBlur={handleSearchInputBlur}
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
          <label
            htmlFor="search_ID"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
            Search
          </label>
        </div>
        <a
          href="#"
          className="inline-block outline border-white rounded-md py-1 px-3 mt-4 md:mt-0 transition ease-in-out duration-700 bg-black text-white text-center text-sm font-medium hover:bg-white hover:text-black"
        >
          Join the movement
        </a>
        <a href="#" className="pr-3 pl-6 text-slate-600 hover:text-white">
          <FontAwesomeIcon icon={faUserLarge} />
        </a>
        <a href="#" className="px-3 text-slate-600 hover:text-white">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </header>
  );
}
