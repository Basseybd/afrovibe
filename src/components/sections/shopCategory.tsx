import ImageWithOverlay from "../reuseables/image_with_overlay";
import bassey from "../../assests/bassey.jpg";
import edem_dj_friend_1 from "../../assests/edem_dj_friend_1.jpeg";
import edem_yellow_jacket from "../../assests/edem_yellow_jacket.jpeg";
import edem_dj_friend_2 from "../../assests/edem_dj_friend_2.jpeg";

export default function shopCategory() {
  return (
    <div className="w-full flex flex-col text-white justify-center items-start">
      <div className="text-sm text-black font-normal pt-6">Shop category</div>
      <div className="text-xl text-black font-bold pb-2">AfroVibe Official</div>
      <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 gap-y-4 gap-x-4">
        <div className="flex justify-start">
          <ImageWithOverlay
            imagePath={bassey}
            imageDescription="bassey"
            buttonText="Discover"
            heading="AfroVibe Official"
            subheading="Collaborations"
          />
        </div>
        <div className="flex justify-end">
          <ImageWithOverlay
            imagePath={edem_dj_friend_1}
            imageDescription="edem_dj_friend_1"
            buttonText="Shop Now"
            heading="Good Vibes only"
            subheading="Collection"
          />
        </div>
        <div className="flex justify-start">
          <ImageWithOverlay
            imagePath={edem_yellow_jacket}
            imageDescription="edem_yellow_jacket"
            buttonText="Men"
            heading="Spring Summer 23"
            subheading="New Collection"
          />
        </div>
        <div className="flex justify-end">
          <ImageWithOverlay
            imagePath={edem_dj_friend_2}
            imageDescription="edem_dj_friend_2"
            buttonText="Women"
            heading="Spring Summer 23"
            subheading="New Collection"
          />
        </div>
      </div>
    </div>
  );
}
