import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DefaultCarousel from "./carousel"

const English_US_SVG = (
  <svg
    className="w-5 h-5 mr-2 rounded-full"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 3900 3900"
  >
    <path fill="#b22234" d="M0 0h7410v3900H0z" />
    <path
      d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
      stroke="#fff"
      strokeWidth="300"
    />
    <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
    <g fill="#fff">
      <g id="d">
        <g id="c">
          <g id="e">
            <g id="b">
              <path
                id="a"
                d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
              />
              <use xlinkHref="#a" y="420" />
              <use xlinkHref="#a" y="840" />
              <use xlinkHref="#a" y="1260" />
            </g>
            <use xlinkHref="#a" y="1680" />
          </g>
          <use xlinkHref="#b" x="247" y="210" />
        </g>
        <use xlinkHref="#c" x="494" />
      </g>
      <use xlinkHref="#d" x="988" />
      <use xlinkHref="#c" x="1976" />
      <use xlinkHref="#e" x="2470" />
    </g>
  </svg>
);

const Deutsch_SVG = (
  <svg
    className="h-3.5 w-3.5 rounded-full mr-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icon-css-de"
    viewBox="0 0 512 512"
  >
    <path fill="#ffce00" d="M0 341.3h512V512H0z" />
    <path d="M0 0h512v170.7H0z" />
    <path fill="#d00" d="M0 170.7h512v170.6H0z" />
  </svg>
);

const Italiano_SVG = (
  <svg
    className="h-3.5 w-3.5 rounded-full mr-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icon-css-it"
    viewBox="0 0 512 512"
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#009246" d="M0 0h170.7v512H0z" />
      <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
    </g>
  </svg>
);

const 中文_繁體_SVG = (
  <svg
    className="h-3.5 w-3.5 rounded-full mr-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="flag-icon-css-cn"
    viewBox="0 0 512 512"
  >
    <defs>
      <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
    </defs>
    <path fill="#de2910" d="M0 0h512v512H0z" />
    <use
      width="30"
      height="20"
      transform="matrix(76.8 0 0 76.8 128 128)"
      xlinkHref="#a"
    />
    <use
      width="30"
      height="20"
      transform="rotate(-121 142.6 -47) scale(25.5827)"
      xlinkHref="#a"
    />
    <use
      width="30"
      height="20"
      transform="rotate(-98.1 198 -82) scale(25.6)"
      xlinkHref="#a"
    />
    <use
      width="30"
      height="20"
      transform="rotate(-74 272.4 -114) scale(25.6137)"
      xlinkHref="#a"
    />
    <use
      width="30"
      height="20"
      transform="matrix(16 -19.968 19.968 16 256 230.4)"
      xlinkHref="#a"
    />
  </svg>
);

export default function Announcementbar() {
  const [currentLocation, setCurrentLocation] = useState("Worldwide");
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [currentSVG, setCurrentSVG] = useState(English_US_SVG);
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
    <header className="bg-white font h-9 font-small text-black text-sm items-center border-b border-black">
      <div className="border-b border-black">
        <div className="container h-9 mx-auto mb-0 flex items-center justify-between">
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
        }  relative z-50 h-14  flex items-center bg-white divide-y divide-gray-100`}
        id="location-dropdown-menu"
      >
        <div className="container mx-auto justify-end flex">
          <ul className="font-medium flex flex-row flex-wrap" role="none">
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLocationClick("Worldwide")}
              >
                <div className="inline-flex items-center">Worldwide</div>
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLocationClick("France")}
              >
                <div className="inline-flex items-center">France</div>
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLocationClick("United Kingdom")}
              >
                <div className="inline-flex items-center">United Kingdom</div>
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLocationClick("United States")}
              >
                <div className="inline-flex items-center">United States</div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          isLanguageDropdownOpen ? "block" : "hidden"
        }  relative z-50 h-14  flex items-center bg-white divide-y divide-gray-100`}
        id="language-dropdown-menu"
      >
        <div className="container mx-auto justify-end flex">
          <ul className="font-medium flex flex-row flex-wrap" role="none">
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLanguageClick("English", English_US_SVG)}
              >
                <div className="inline-flex items-center">
                  {English_US_SVG}
                  English (US)
                </div>
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLanguageClick("Deutsch", Deutsch_SVG)}
              >
                <div className="inline-flex items-center">
                  {Deutsch_SVG}
                  Deutsch
                </div>
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLanguageClick("Italiano", Italiano_SVG)}
              >
                <div className="inline-flex items-center">
                  {Italiano_SVG}
                  Italiano
                </div>
              </button>
            </li>
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() =>
                  handleLanguageClick("中文 (繁體)", 中文_繁體_SVG)
                }
              >
                <div className="inline-flex items-center">
                  {中文_繁體_SVG}
                  中文 (繁體)
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
