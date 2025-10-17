interface Props {
  text: string;
}

export default function SectionTitle({ text }: Props) {
  return (
    <h2 className="text-3xl font-extrabold mb-6 text-blue-900 border-l-4 border-sky-400 pl-3">
      {text}
    </h2>
  );
}
