import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface NavDropdownToggleProps {
  showNav: boolean;
  navHeaders: { [key: string]: any };
}

export default function NavDropdownToggle(props: NavDropdownToggleProps) {
  const [activeMenu, setactiveMenu] = useState("");
  const [activeSubMenu, setactiveSubMenu] = useState("");

  const handleMenuClick = (clickedOption: string) => {
    if (activeMenu === clickedOption) {
      setactiveMenu(" ");
      setactiveSubMenu(" ");
    } else if (
      props.navHeaders.some(
        (heading: { [key: string]: any }) => heading.header === clickedOption
      )
    ) {
      setactiveMenu(clickedOption);
      setactiveSubMenu(" ");
    }
  };

  const handleSubMenuClick = (clickedOption: string) => {
    if (activeSubMenu === clickedOption) {
      setactiveSubMenu(" ");
    } else {
      setactiveSubMenu(clickedOption);
    }
  };

  return (
    <div className="absolute flex flex-col bg-white top-16 left-0 w-full border-t">
      {props.navHeaders.map((heading: { [key: string]: any }) => (
        <div key={heading.header} className="pl-[12%]">
          <div className="relative flex cursor-pointer h-16 items-center">
            <button
              onClick={() => handleMenuClick(heading.header)}
              className="relative flex flex-row items-center h-full gap-2"
            >
              <div>{heading.header}</div>
              {activeMenu === heading.header ? (
                <FontAwesomeIcon icon={faChevronUp} className="w-3.5 h-3" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} className="w-3.5 h-3" />
              )}
            </button>
          </div>

          {heading.submenu && (
            <div
              className={`relative w-full p-4 gap-4
                ${activeMenu === heading.header ? " " : "hidden"}
                 bg-white grid grid-cols-1`}
            >
              {heading.subheaderings.map(
                (subheadering: { [key: string]: any }) => (
                  <div key={subheadering.subheader}>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          handleSubMenuClick(subheadering.subheader)
                        }
                        className="flex flex-row items-center gap-2"
                      >
                        <div>{subheadering.subheader}</div>
                        {activeSubMenu === subheadering.subheader ? (
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            className="w-3.5 h-3"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="w-3.5 h-3"
                          />
                        )}
                      </button>
                    </div>

                    <ul
                      className={`relative w-full p-4 bg-white grid grid-cols-1 ${
                        activeSubMenu === subheadering.subheader
                          ? " "
                          : "hidden"
                      }`}
                    >
                      {subheadering.sublinks.map(
                        (sublink: { [key: string]: any }) => (
                          <li
                            key={sublink.name}
                            className="text-sm text-black my-2.5"
                          >
                            <Link
                              to="placeholder"
                              className="flex items-center pr-5 h-full hover:border-b hover:border-black"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
