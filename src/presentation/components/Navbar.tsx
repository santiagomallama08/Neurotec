import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Agregar tipos explícitos
  const navItem = (to: string, label: string) => (
    <Link
      key={to}
      to={to}
      onClick={() => setMenuOpen(false)} // Cierra menú al hacer clic
      className={`block px-4 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
        location.pathname === to
          ? "text-[#5fffd2] drop-shadow-[0_0_8px_#5fffd2]"
          : "text-gray-300 hover:text-[#a795ff] hover:drop-shadow-[0_0_6px_#a795ff]"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-[#5fffd2]/30 shadow-[0_0_25px_rgba(72,255,215,0.4)] transition-all duration-300">
      {/* Línea radiante superior */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#5fffd2] via-[#a795ff] to-[#ff79c6] animate-pulse" />

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold font-orbitron text-[#5fffd2] tracking-wider drop-shadow-[0_0_15px_#5fffd2]">
          NeuroTec Radiología 🧠
        </h1>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#5fffd2] text-2xl md:hidden focus:outline-none transition-transform duration-300 hover:scale-110"
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegación en escritorio */}
        <nav className="hidden md:flex gap-4">
          {[
            { to: "/", label: "Inicio" },
            { to: "/irm-secuencias", label: "IRM Secuencias" },
            { to: "/uso-importancia", label: "Uso e Importancia" },
            { to: "/difusion-dti", label: "Discusión" },
          ].map((link) => navItem(link.to, link.label))}
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t border-[#5fffd2]/20 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-2">
          {[
            { to: "/", label: "Inicio" },
            { to: "/irm-secuencias", label: "IRM Secuencias" },
            { to: "/uso-importancia", label: "Uso e Importancia" },
            { to: "/difusion-dti", label: "Discusión" },
          ].map((link) => navItem(link.to, link.label))}
        </nav>
      </div>

      {/* Línea radiante inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#5fffd2] via-[#a795ff] to-[#ff79c6] shadow-[0_0_15px_#5fffd2]" />
    </header>
  );
}
