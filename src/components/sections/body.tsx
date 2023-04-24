import ImageWithOverlay from "../reuseables/imageWithOverlay";
import edem_model_1 from "../../assests/edem_model_1.jpeg";
import { featuredItems } from "../../data/otherdata";
import MultiCarousel from "../reuseables/multiCarousel";
import Collections from "./collections";

import "react-multi-carousel/lib/styles.css";


export default function body() {
  return (
    <div>
      <div className="flex max-w-full m-auto items-center justify-center">
        <ImageWithOverlay
          imagePath={edem_model_1}
          imageDescription="edem_model_1"
          buttonText="Shop Now"
          heading="SS23 Highlights"
          subheading="Featured Collection"
          specialStyling="-mt-16"
          extraStyling="left-[9%]"
        />
      </div>
      <div className="flex max-w-[80%] m-auto items-center justify-center">
        <MultiCarousel title="Comming Soon" images={featuredItems} />
      </div>
      <div className="flex max-w-[80%] m-auto items-center justify-center">
        <Collections />
      </div>
    </div>
  );
}
