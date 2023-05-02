import { useState, useRef, useEffect } from "react";
import { navHeaders } from "../../data/navLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "../reuseables/navdropdown";
import NavDropdownToggleProps from "../reuseables/navdropdowntoggle";

interface NavLinksProps {
  windowWidth: number;
}

export default function NavLinks(props: NavLinksProps) {
  const [showNav, setShowNav] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {props.windowWidth < 760 ? (
        <div ref={dropdownRef}>
          <button className="block" onClick={() => setShowNav(!showNav)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {showNav && (
            <div className="block">
              <NavDropdownToggleProps
                showNav={showNav}
                navHeaders={navHeaders}
              />
            </div>
          )}
        </div>
      ) : (
        <NavDropdown navHeaders={navHeaders} />
      )}
    </>
  );
}
