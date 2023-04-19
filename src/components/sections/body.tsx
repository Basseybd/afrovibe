import ImageWithOverlay from "../reuseables/image_with_overlay";
import edem_model_1 from "../../assests/edem_model_1.jpeg";
import { featuredItems } from "../../data/otherdata";
import ManualCarousel from "../reuseables/manualCarousel";
import Collections from "./collections";

export default function body() {
  return (
    <div>
      <ImageWithOverlay
        imagePath={edem_model_1}
        imageDescription="edem_model_1"
        buttonText="Shop Now"
        heading="SS23 Highlights"
        subheading="Featured Collection"
        specialStyling="-mt-16"
      />
      <ManualCarousel images={featuredItems} />
      <Collections />

    </div>
  );
}
