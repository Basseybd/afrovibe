import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ManualCarouselProps {
  title: string;
  images: {
    name: string;
    imagePath: string;
    altimagePath: string;
    imageDescription: string;
  }[];
}

export default function ManualCarousel(props: ManualCarouselProps) {
  return (
    <div className="w-full flex flex-col text-white justify-center items-start">
      <div className="text-sm text-black font-normal pt-6">Shop category</div>
      <div className="flex w-full justify-between pb-4">
        <div className="text-xl text-black font-bold pb-2">Featured Items</div>
        <div className="text-black">
          <button className="pr-3 pl-3">
            <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" />
          </button>
          <button className="pr-3 pl-3">
            <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" />
          </button>
        </div>
      </div>
      <div className="w-full grid-cols-3 gap-y-4 gap-x-4 flex justify-between">
        <div className="relative ">
          <img
            src={require("../../assests/afro_vibe_check.png")}
            alt="afrovibe check"
            className="opacity-100 hover:opacity-0 transition-opacity duration-300"
          />
          <img
            src={require("../../assests/do_you_pass.png")}
            alt="afrovibe check hover"
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="relative">
          <img
            src={require("../../assests/watch_this_space.png")}
            alt="watch this space"
            className="opacity-100 hover:opacity-0 transition-opacity duration-300"
          />
          <img
            src={require("../../assests/i_passed_the_vibe_check.png")}
            alt="watch this space hover"
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="relative">
          <img
            src={require("../../assests/afro_vibe_check.png")}
            alt="afrovibe check"
            className="opacity-100 hover:opacity-0 transition-opacity duration-300"
          />
          <img
            src={require("../../assests/do_you_pass.png")}
            alt="afrovibe check hover"
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}
