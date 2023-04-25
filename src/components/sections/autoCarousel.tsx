import { useEffect, useState } from "react";
import { announcements } from "../../data/otherdata";

interface AutoCarouselProps {
  textColor: string;
  direction: string;
}


export default function AutoCarousel(props: AutoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(announcements[0]);
  const [previousWord, setPreviousWord] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % announcements.length;
      setPreviousWord(currentWord);
      setCurrentWord(announcements[nextIndex]);
      setActiveIndex(nextIndex);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [activeIndex, currentWord]);

  return (
    <div
      className={`relative h-9 flex justify-center items-center ${props.textColor} font-extrabold`}
    >
      {announcements.map((announcement, index) => (
        <div
          key={index}
          className={`absolute inset-x-0 flex items-center justify-center -${props.direction}-6 p-1 transform transition-transform duration-1000  ${
            announcement === currentWord
              ? "translate-y-full"
              : announcement === previousWord
              ? "-translate-y-full"
              : index === activeIndex
              ? "translate-y-full"
              : ""
          } `}
        >
          {announcement}
        </div>
      ))}
    </div>
  );
};


