import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DefaultCarousel from "../reuseables/carousel";
import { languages, locations } from "../../data/otherdata";

export default function Announcementbar() {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0].name);
  const [currentSVG, setCurrentSVG] = useState(languages[0].svg);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const locationdropdownRef = useRef<HTMLDivElement>(null);
  const languagedropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageClick = (language: string, svg: JSX.Element) => {
    setCurrentSVG(svg);
    setCurrentLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const handleLocationClick = (location: string) => {
    setCurrentLocation(location);
    setIsLocationDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      locationdropdownRef.current &&
      !locationdropdownRef.current.contains(event.target as Node)
    ) {
      setIsLocationDropdownOpen(false);
    }
    if (
      languagedropdownRef.current &&
      !languagedropdownRef.current.contains(event.target as Node)
    ) {
      setIsLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white h-9 font-small text-black text-sm items-center">
      <div className="border-b border-black">
        <div className="container h-9 mx-auto flex items-center justify-between">
          <div className="w-96">&nbsp;</div>
          <DefaultCarousel />
          <div className="flex w-96 justify-end">
            <div ref={locationdropdownRef}>
              <button
                type="button"
                data-dropdown-toggle="location-dropdown-menu"
                className="flex items-center font-medium justify-center px-4 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() =>
                  setIsLocationDropdownOpen(!isLocationDropdownOpen)
                }
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-3.5 h-3 p-1 ml-1"
                />
                {currentLocation}
              </button>
            </div>

            <div ref={languagedropdownRef}>
              <button
                type="button"
                data-dropdown-toggle="language-dropdown-menu"
                className="flex items-center font-medium justify-center px-4 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                {currentSVG}
                {currentLanguage}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Dropdown -->  */}
      <div
        className={`${
          isLocationDropdownOpen ? "block" : "hidden"
        }  relative z-50 h-16 flex items-center bg-white divide-gray-100`}
        id="location-dropdown-menu"
      >
        <div className="container mx-auto justify-end flex">
          <ul className="font-medium flex flex-row flex-wrap" role="none">
            {locations.map((location) => (
              <li>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => handleLocationClick(location)}
                >
                  <div className="inline-flex items-center">{location}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          isLanguageDropdownOpen ? "block" : "hidden"
        }  relative z-50 h-16  flex items-center bg-white divide-gray-100`}
        id="language-dropdown-menu"
      >
        <div className="container mx-auto justify-end flex">
          <ul className="font-medium flex flex-row flex-wrap" role="none">
            {languages.map((language) => (
              <li>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() =>
                    handleLanguageClick(language.name, language.svg)
                  }
                >
                  <div className="inline-flex items-center">
                    {language.svg}
                    {language.name}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
