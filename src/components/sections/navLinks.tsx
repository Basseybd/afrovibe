import { useState } from "react";
import { Link } from "react-router-dom";
import { navHeaders } from "../../data/navLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

interface NavLinksProps {
  windowWidth: number;
}

export default function NavLinks(props: NavLinksProps) {
  const [showNav, setShowNav] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState("");
  return (
    <>
      {props.windowWidth < 700 && (
        <button
          className="block md:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <div className={`md:block ${showNav ? "" : "hidden"} md:flex-grow`}>
        <ul className="md:flex md:items-center md:w-auto">
          {navHeaders.map((header) => (
            <li key={header.name} className="md:flex-grow">
              <div className="flex items-center">
                <div className="ml-4 font-medium text-gray-300 hover:text-white">
                  {header.name}
                </div>
                {header.submenu && (
                  <div className="md:hidden ml-2">
                    <button
                      className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
                      onClick={() => setShowSubmenu(header.name)}
                    >
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                  </div>
                )}
              </div>
              {header.submenu && (
                <ul
                  className={`md:hidden ${
                    showSubmenu === header.name ? "block" : "hidden"
                  }`}
                >
                  {header.sublinks.map((sublink) => (
                    <div key={sublink.Head}>
                      <div className="text-lg text-black font-semibold">
                        {sublink.Head}
                      </div>
                      <ul>
                        {sublink.sublink.map((slink) => (
                          <li
                            key={slink.name}
                            className="text-sm text-black my-2.5"
                          >
                            <Link
                              to="placeholder"
                              className="flex items-center pr-5 h-full hover:border-b hover:border-black"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
