import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface MultiCarouselProps {
  title: string;
  images: {
    name: string;
    imagePath: string;
    altimagePath: string;
    imageDescription: string;
  }[];
}

export default function MultiCarousel(props: MultiCarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
    },
  };

  return (
    <div className="w-full flex flex-col text-white justify-center items-start">
      <div className="text-sm text-black font-normal pt-4">Shop category</div>
      <div className="text-xl text-black font-bold pb-2">Featured Items</div>

      <div className="w-full relative flex justify-center items-center pb-8">
        <Carousel
          additionalTransfrom={0}
          arrows
          ssr={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container w-full "
          dotListClass="custom-dot-list-style"
          draggable={true}
          focusOnSelect={false}
          infinite={true}
          itemClass="carousel-item"
          // customTransition="all .5"
          // transitionDuration={1000}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          customLeftArrow={
            <div className="absolute left-0 mt-4 ml-4 z-10 cursor-pointer">
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className="h-10 w-10 text-white"
              />
            </div>
          }
          customRightArrow={
            <div className="absolute right-0 mt-4 mr-4 z-10 cursor-pointer">
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="h-10 w-10 text-white"
              />
            </div>
          }
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={true}
          renderDotsOutside
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {props.images.map((image, index) => {
            return (
              <div key={index} className="">
                <img
                  src={image.imagePath}
                  alt="afrovibe check"
                  className="opacity-100 hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src={image.altimagePath}
                  alt="afrovibe check hover"
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
