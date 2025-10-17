import Layout from "../components/Layout";
import videoBg from "../../assets/portada2.mp4";

export default function Home() {
  return (
    <Layout>
      {/* Contenedor total */}
      <div className="relative w-full min-h-screen overflow-hidden font-poppins text-gray-100 bg-black">
        {/* 🎥 Video de fondo */}
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* 🖤 Capa de gradiente oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10" />

        {/* 🌟 Contenido principal */}
        <div className="relative z-20 flex flex-col justify-center items-center min-h-screen text-center px-6">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-[#5fffd2] drop-shadow-[0_0_25px_#5fffd2] tracking-wider">
            NeuroTec
          </h1>

          <h2 className="text-2xl md:text-3xl mt-3 text-[#a795ff] font-semibold uppercase tracking-[0.25em]">
            Neuroimagen para tecnólogos
          </h2>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed backdrop-blur-md bg-black/40 p-6 rounded-2xl border border-[#5fffd2]/40 shadow-[0_0_25px_#5fffd2]/30">
            La esquizofrenia es un trastorno neuropsiquiátrico que impacta la
            percepción, el pensamiento y la conducta. La Resonancia Magnética
            (RM) ofrece una ventana no invasiva para comprender su base biológica
            desde cuatro frentes complementarios: estructura, función,
            conectividad y neuroquímica. Aunque la RM no establece el diagnóstico
            por sí sola, aporta biomarcadores y evidencia que apoyan el diagnóstico
            diferencial, el seguimiento y la investigación clínica. Aquí en{" "}
            <span className="text-[#5fffd2] font-semibold">NeuroTec</span>{" "}
            encontrarás información técnica sobre el uso de la resonancia en esta
            enfermedad.
          </p>
        </div>

        {/* Línea de energía inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#5fffd2] via-[#a795ff] to-[#ff79c6] shadow-[0_0_20px_#5fffd2] z-30" />
      </div>
    </Layout>
  );
}
