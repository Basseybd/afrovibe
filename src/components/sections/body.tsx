import ImageWithOverlay from "../reuseables/image_with_overlay";
import edem_model_1 from "../../assests/edem_model_1.jpeg";
import { featuredItems } from "../../data/otherdata";
import ManualCarousel from "../reuseables/manualCarousel";
import ShopCategory from "./shopCategory";

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
        <ShopCategory />
      </div>
      {/* <ManualCarousel images={featuredItems} /> */}
    </div>
  );
}
