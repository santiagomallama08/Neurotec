import type { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

export default function Card({ title, children }: Props) {
  return (
    <div className="bg-white/95 border border-sky-100 rounded-xl shadow-md hover:shadow-lg hover:border-sky-300 transition-all duration-300 p-6 mb-6">
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-sky-700 border-b border-sky-100 pb-1">
          {title}
        </h3>
      )}
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
