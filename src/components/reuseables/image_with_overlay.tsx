import Button from "./button";

interface ImageWithOverlayProps {
  imagePath: string;
  imageDescription: string;
  buttonText: string;
  heading: string;
  subheading: string;
  height: string;
  width: string;
}

export default function ImageWithOverlay(props: ImageWithOverlayProps) {
  return (
    <div className="relative">
      <div className="aboslute -mt-16 z-0">
        <div className="container mx-auto">
          <img
            src={props.imagePath}
            alt={props.imageDescription}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 z-10 text-white pb-4 pl-4">
            <div className="text-base font-normal">{props.subheading}</div>
            <div className="text-3xl font-bold pb-2">{props.heading}</div>
            <Button
              name={props.buttonText}
              action=""
              reverse={true}
              bgColor="bg-white"
              textColor="text-black"
              hieght="h-12"
              width="w-3/4"
              padding="p-5"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}
