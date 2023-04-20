import Button from "./button";

interface ImageWithOverlayProps {
  imagePath: string;
  imageDescription: string;
  buttonText: string;
  heading: string;
  subheading: string;
  extraStyling?: string;
  specialStyling?: string;
}

export default function ImageWithOverlay(props: ImageWithOverlayProps) {
  return (
    <div className="relative w-full">
      <div className={`aboslute z-0 ${props.specialStyling}`}>
        <div className="">
          <img
            src={props.imagePath}
            alt={props.imageDescription}
            className="h-full w-full object-contain"
          />
          <div
            className={`absolute bottom-0 z-10 text-white pb-4 pl-4 ${props.extraStyling}`}
          >
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
