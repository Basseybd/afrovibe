interface ButtonProps {
  name: string;
  action: string;
  reverse: boolean;
  bgColor: string;
  textColor?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div>
      {props.reverse ? (
        <button
          className={`inline-block outline ${props.textColor} ${props.bgColor} rounded-full py-1 px-3 mt-4 md:mt-0 text-sm font-medium `}
        >
          {props.name}
        </button>
      ) : (
        <button className="pr-5 hover:underline"> {props.name} </button>
      )}
    </div>
  );
}
