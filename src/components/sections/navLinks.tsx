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
      {props.windowWidth < 760 && (
        <button className="block" onClick={() => setShowNav(!showNav)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      {navHeaders.map((header) => (
        <div
          key={header.name}
          className="flex cursor-pointer h-16 items-center group"
        >
          <div className="flex justify-center items-center pr-5 h-full hover:border-b hover:border-black">
            {header.name}
          </div>
          {header.submenu && (
            <div className="absolute top-16 left-0 w-full hidden bg-white group-hover:block group-hover:md:block hover:md:block">
              <div className="max-w-[80%] mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-0 justify-start">
                  {header.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <div className="text-lg text-black font-semibold">
                        {mysublinks.Head}
                      </div>
                      <ul>
                        {mysublinks.sublink.map((slink) => (
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
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div
        className={`${
          showNav ? "block" : "hidden"
        }  absolute z-10 top-25 flex items-center divide-gray-100`}
      >
        <div className="flex max-w-[80%] w-full mx-auto  justify-start">
          <ul className="font-medium flex flex-col flex-wrap" role="none">
            {navHeaders.map((header) => (
              <li key={header.name}>
                <button
                  className={`block px-4 py-2 text-sm`}
                  role="menuitem"
                  onClick={() => setShowNav(!showSubmenu)}
                >
                  <div className="inline-flex items-center">{header.name}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
