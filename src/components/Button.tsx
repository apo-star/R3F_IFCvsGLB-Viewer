interface props {
  content: string;
}

export default function Button(props: props) {
  return (
    <button className="absolute top-0 text-3xl text-red-600">
      {props.content}
    </button>
  );
}
