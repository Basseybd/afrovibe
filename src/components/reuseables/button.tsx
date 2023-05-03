interface ButtonProps {
  name: string;
  action: string;
  reverse: boolean;
  bgColor: string;
  textColor?: string;
  height?: string;
  width?: string;
  padding?: string;
  extraStyling?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div>
      {props.reverse ? (
        <button
          className={` ${props.textColor} ${props.bgColor} ${props.height} ${
            props.extraStyling
          } ${props.width} ${
            props.padding
          } relative flex items-center justify-center rounded-full px-3 text-sm font-medium ${
            props.bgColor === "bg-transparent"
              ? "hover:bg-white"
              : "hover:bg-black hover:text-white "
          }`}
        >
          {props.name}
        </button>
      ) : (
        <button className="pr-5 hover:underline"> {props.name} </button>
      )}
    </div>
  );
}
