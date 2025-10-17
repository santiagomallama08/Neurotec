import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Paragraph({ children }: Props) {
  return (
    <p
      className="text-[#e6e6e6] font-inter text-[1.05rem] md:text-[1.1rem]
                 leading-relaxed text-justify tracking-normal
                 transition-all duration-300 ease-in-out"
    >
      {children}
    </p>
  );
}
