export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white py-10 px-6 border-t border-[#1a1a1a] mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left">

        {/* Bloque institucional */}
        <div className="flex-1 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-[#66ffe3] drop-shadow-[0_0_10px_#66ffe3]">
            Universidad Mariana
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Tecnología en Radiodiagnóstico y Radioterapia
          </p>
        </div>

        {/* Nombres del equipo */}
        <div className="flex-1 text-gray-400 text-sm sm:text-base space-y-1">
          <p className="font-semibold text-[#66ffe3] mb-2">Integrantes:</p>
          <p>Manuela Caterine Trujillo Chamorro</p>
          <p>Valentina Pantoja Vega</p>
          <p>Kevin Rodríguez</p>
        </div>

        {/* Derechos */}
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-[#66ffe3] font-semibold">NeuroTec Radiología</span> — Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Línea radiante inferior */}
      <div className="mt-8 w-full h-[2px] bg-gradient-to-r from-[#5fffd2] via-[#a795ff] to-[#ff79c6] shadow-[0_0_10px_#5fffd2]" />
    </footer>
  );
}
