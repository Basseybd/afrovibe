interface ButtonProps {
  name: string;
  action: string;
  reverse: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <div>
      {props.reverse ? (
        <button className="inline-block outline border-white rounded-md py-1 px-3 mt-4 md:mt-0 transition ease-in-out duration-700 bg-black text-white  text-sm font-medium hover:bg-white hover:text-black">
          {props.name}
        </button>
      ) : (
        <button className="pr-5 hover:underline"> {props.name} </button>
      )}
    </div>
  );
}
