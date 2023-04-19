import Newcollaboration from "../sections/featuredShop";

interface ManualCarouselProps {
  images: {
    name: string;
    imagePath: string;
    altimagePath: string;
    imageDescription: string;
  }[];
}

export default function ManualCarousel(props: ManualCarouselProps) {
  return (
    <div>
      <Newcollaboration />
    </div>
  );
}
