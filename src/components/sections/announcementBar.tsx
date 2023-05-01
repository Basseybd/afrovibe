import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AutoCarousel from "../reuseables/autoCarousel";
import { languages, locations } from "../../data/otherdata";
import FullScreenDropdown from "../reuseables/fullScreenDropdown";

interface AnnouncementbarProps {
  breakpoint: number;
  windowWidth: number;
}

export default function Announcementbar(props: AnnouncementbarProps) {
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
    <header className="bg-white h-9 font-small text-black text-sm items-center">
      <div className="max-w-[80%] h-9 mx-auto flex items-center justify-between">
        {props.windowWidth > 880 && <div className="w-96 ">&nbsp;</div>}
        <AutoCarousel textColor="text-black" direction="top" />
        {props.windowWidth > 880 && (
          <div className="flex w-96 justify-end">
            <div ref={locationdropdownRef}>
              <button
                type="button"
                className="flex h-full items-center font-thin justify-center px-4 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-500"
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
                className="flex items-center font-thin justify-center px-4 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-500"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                {currentSVG}
                {currentLanguage}
              </button>
            </div>
          </div>
        )}
      </div>
      <FullScreenDropdown
        isDropdownOpen={isLocationDropdownOpen}
        array={locations}
        handleClick={handleClick}
        position="justify-end"
        textstyling="text-black hover:bg-gray-100"
        bgColor="bg-white"
      />
      <FullScreenDropdown
        isDropdownOpen={isLanguageDropdownOpen}
        array={languages}
        handleClick={handleClick}
        position="justify-end"
        textstyling="text-black hover:bg-gray-100"
        bgColor="bg-white"
      />
    </header>
  );
}
