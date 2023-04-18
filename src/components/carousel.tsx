import { useEffect, useState } from "react";

const words = ["WATCH", "THIS", "SPACE"];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [previousWord, setPreviousWord] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % words.length;
      setPreviousWord(currentWord);
      setCurrentWord(words[nextIndex]);
      setActiveIndex(nextIndex);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [activeIndex, currentWord]);

  const prevIndex = (activeIndex - 1 + words.length) % words.length;
  const nextIndex = (activeIndex + 1) % words.length;

  return (
    <div className="relative h-9 flex justify-center items-center text-black font-extrabold">
      {words.map((word, index) => (
        <div
          key={index}
          className={`absolute inset-x-0 flex items-center justify-center -top-6 p-1 transform transition-transform duration-1000  ${
            word === currentWord
              ? "translate-y-full"
              : word === previousWord
              ? "-translate-y-full"
              : index === activeIndex
              ? "translate-y-full"
              : ""
          } `}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default Carousel;

