import ImageWithOverlay from "../reuseables/image_with_overlay";
import bassey from "../../assests/bassey.jpg";
import edem_dj_friend_1 from "../../assests/edem_dj_friend_1.jpeg";
import edem_yellow_jacket from "../../assests/edem_yellow_jacket.jpeg";
import edem_dj_friend_2 from "../../assests/edem_dj_friend_2.jpeg";

export default function Collections() {
  return (
    <div className="container mx-auto flex text-white justify-center items-center pt-6">
      <div className="container mx-auto grid grid-cols-2 gap-y-7 gap-x-0 pl-8">
        <ImageWithOverlay
          imagePath={bassey}
          imageDescription="bassey"
          buttonText="Discover"
          heading="Discover"
          subheading="Collaborations"
          extraStyling="object-cover"
        />
        <ImageWithOverlay
          imagePath={edem_dj_friend_1}
          imageDescription="edem_dj_friend_1"
          buttonText="Shop Now"
          heading="Good Vibes only"
          subheading="Collection"
          extraStyling="object-cover"
        />
        <ImageWithOverlay
          imagePath={edem_yellow_jacket}
          imageDescription="edem_yellow_jacket"
          buttonText="Men"
          heading="Spring Summer 23"
          subheading="New Collection"
          extraStyling="object-cover"
        />
        <ImageWithOverlay
          imagePath={edem_dj_friend_2}
          imageDescription="edem_dj_friend_2"
          buttonText="Women"
          heading="Spring Summer 23"
          subheading="New Collection"
          extraStyling="object-cover"
        />
      </div>
    </div>
  );
}
