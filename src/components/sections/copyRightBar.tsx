import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import AutoCarousel from "./autoCarousel";
import { languages, locations } from "../../data/otherdata";
import FullScreenDropdown from "../reuseables/fullScreenDropdown";

export default function CopyRightBar() {
  const [currentLocation, setCurrentLocation] = useState(locations[0].name);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0].name);
  const [currentSVG, setCurrentSVG] = useState(languages[0].svg);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const locationdropdownRef = useRef<HTMLDivElement>(null);
  const languagedropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (clickedOption: string) => {
    if (languages.some((language) => language.name === clickedOption)) {
      const language = languages.find((lang) => lang.name === clickedOption);
      const svg = language!.svg;
      setCurrentSVG(svg);
      setCurrentLanguage(language!.name);
      setIsLanguageDropdownOpen(false);
    }
    if (locations.some((location) => location.name === clickedOption)) {
      const location = locations.find((loc) => loc.name === clickedOption);
      setCurrentLocation(location!.name);
      setIsLocationDropdownOpen(false);
    }
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
    <footer className="bg-black h-9 font-small text-white text-sm items-center">
      <FullScreenDropdown
        isDropdownOpen={isLocationDropdownOpen}
        array={locations}
        handleClick={handleClick}
      />
      <FullScreenDropdown
        isDropdownOpen={isLanguageDropdownOpen}
        array={languages}
        handleClick={handleClick}
      />
      <div className="max-w-[80%] h-9 mx-auto flex items-center justify-between">
        <div className="flex w-96 justify-start">
          <div ref={locationdropdownRef}>
            <button
              type="button"
              className="flex items-center font-medium justify-center text-sm rounded-lg cursor-pointer"
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
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
              className="flex items-center font-medium justify-center px-4 text-sm rounded-lg cursor-pointer"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              {currentSVG}
              {currentLanguage}
            </button>
          </div>
        </div>
        {/* <AutoCarousel textColor="text-white" direction="bottom"/> */}
        <div className="w-96 flex flex-col items-end">
          © 2023 Afrovibe
        </div>
      </div>
    </footer>
  );
}
