import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden flex flex-col">
      <Navbar />
      <main className="relative z-10 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
