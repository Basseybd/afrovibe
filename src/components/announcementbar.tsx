import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function announcementbar() {
  return (
    <header className="bg-white sm:sticky top-0 font font-small text-black text-sm items-center">
      <div className="container mx-auto flex p-2 items-center">
        <div className="mx-auto">
          <a href="#">New Announcements</a>
        </div>
        <div className="flex">
          <a href="#" className="flex mr-5 ">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-3.5 h-3 p-1 ml-1"
            />
            Worldwide
          </a>
          <a href="#" className="flex mr-5">
            <FontAwesomeIcon
              icon={faLanguage}
              className="w-3.5 h-4 pr-1 pt-1 ml-1"
            />
            English
          </a>
        </div>
      </div>
    </header>
  );
}
