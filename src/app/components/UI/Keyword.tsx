interface Props {
  text: string;
}

export function Keyword({ text }: Props) {
  return (
    <p className="bg-gray-300 text-gray-600 rounded-md px-2 py-1 mx-1 font-bold text-sm">
      {text}
    </p>
  );
}
