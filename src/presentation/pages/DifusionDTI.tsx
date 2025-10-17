import { useState } from "react";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Slider from "react-slick";
import imagen1 from "../../assets/imagen1.jpg";
import imagen2 from "../../assets/imagen2.jpg";
import imagen3 from "../../assets/imagen3.jpg";
import imagen4 from "../../assets/imagen4.jpg";

export default function Discusion() {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    arrows: false,
  };

  const titulos = [
    "Introducción General",
    "RM Estructural (sMRI)",
    "RM Funcional (fMRI)",
    "Tensor de Difusión (DTI)",
    "Espectroscopia (¹H-MRS)",
    "Integración Multimodal",
    "Limitaciones y Desafíos",
    "Síntesis Final",
  ];

  const textos = [
    `La resonancia magnética no sustituye la evaluación clínica ni los criterios diagnósticos psiquiátricos, pero añade evidencia objetiva sobre la biología del trastorno. En conjunto, sus modalidades —estructural (sMRI), funcional (fMRI), difusión (DTI) y espectroscopia por RM (¹H-MRS)— ofrecen una visión complementaria de estructura, función, conectividad y neuroquímica cerebral.`,
    `En sMRI se describen, a nivel grupal, reducciones de volumen en hipocampo y corteza prefrontal, adelgazamiento cortical y agrandamiento ventricular. Estos patrones respaldan la idea de alteraciones del neurodesarrollo con posibles componentes progresivos en ciertos casos. En la práctica clínica, las mediciones morfométricas ayudan a descartar patología orgánica concomitante y a establecer una línea base cuantitativa para el seguimiento.`,
    `La fMRI aporta el “fenotipo de red”. Durante tareas ejecutivas se observa hipofrontalidad y, en reposo, cambios en la organización de redes por defecto, control ejecutivo y saliencia. En subgrupos con alucinaciones auditivas se han documentado patrones anómalos en cortezas auditivas y regiones del lenguaje. Aunque la fMRI no se usa como test diagnóstico individual, sí contribuye a comprender perfiles sintomáticos y a fundamentar estrategias terapéuticas personalizadas.`,
    `La DTI añade sensibilidad a la microestructura de la sustancia blanca. Disminuciones de la fracción de anisotropía (FA) y aumentos de la difusividad media (MD) en tractos fronto-temporales, cíngulo y cuerpo calloso refuerzan el modelo de “desconectividad” de la esquizofrenia. Estas métricas, repetibles y cuantitativas, son útiles para seguimientos longitudinales y para la estratificación del riesgo en fases tempranas.`,
    `La H-MRS ofrece la dimensión neuroquímica. Alteraciones en glutamato/Glx y GABA en regiones como la corteza cingulada anterior o el estriado se han vinculado con estado clínico, respuesta al tratamiento y, en algunos casos, con vulnerabilidad en poblaciones de riesgo. Este nivel de información ayuda a generar hipótesis pronósticas y a interpretar cambios clínicos bajo tratamientos antipsicóticos.`,
    `Integradas, estas modalidades constituyen un marco multimodal que: aumenta la confianza diagnóstica al aportar señales convergentes; mejora el diagnóstico diferencial frente a otras causas neurológicas o metabólicas; permite fijar una línea base objetiva para monitorizar curso y respuesta terapéutica; y abre posibilidades de predicción individual cuando se combinan con análisis cuantitativos avanzados.`,
    `Existen, sin embargo, limitaciones para su adopción universal: heterogeneidad metodológica, variabilidad entre equipos y centros, costos y la necesidad de protocolos estandarizados. Por ello, la RM hoy funciona mejor como apoyo robusto al juicio clínico que como “prueba diagnóstica” aislada. La tendencia actual con usos multimodales y analítica reproducible, señala una traslación progresiva hacia aplicaciones clínicas más directas.`,
    `En síntesis, la RM aporta valor al diagnóstico de la esquizofrenia al capturar, de manera no invasiva, cambios estructurales, funcionales, de conectividad y neuroquímicos. Su mayor fortaleza está en complementar la evaluación clínica, refinar el diagnóstico diferencial, estratificar riesgo y monitorizar la evolución y la respuesta al tratamiento en el tiempo.`,
  ];

  const cardColors = [
    "bg-[#1a1a1f]/90",
    "bg-[#111119]/90",
    "bg-[#14141c]/90",
    "bg-[#101018]/90",
    "bg-[#181820]/90",
    "bg-[#13131b]/90",
    "bg-[#101018]/90",
    "bg-[#12121a]/90",
  ];

  const accentColors = [
    "text-[#66ffe3]",
    "text-[#8cf9ff]",
    "text-[#b28aff]",
    "text-[#5fffd2]",
    "text-[#ff79c6]",
    "text-[#66ffe3]",
    "text-[#ff79c6]",
    "text-[#66ffe3]",
  ];

  return (
    <Layout>
      {/* === CARRUSEL DE FONDO === */}
      <div className="fixed inset-0 z-0 h-full w-full">
        <Slider {...sliderSettings} className="w-full h-full">
          {[imagen1, imagen2, imagen3, imagen4].map((img, i) => (
            <div key={i} className="relative w-full h-screen">
              <img
                src={img}
                alt={`Imagen ${i + 1}`}
                className="w-full h-full object-cover opacity-75 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
            </div>
          ))}
        </Slider>
      </div>

      {/* === CONTENIDO PRINCIPAL === */}
      <section className="relative z-10 py-24 px-6 md:px-16 text-white font-orbitron pb-32">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#66ffe3] drop-shadow-[0_0_25px_#66ffe3] mb-4 uppercase">
            Discusión
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Integración multimodal de la resonancia magnética en la esquizofrenia
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {textos.map((texto, index) => (
            <div
              key={index}
              onClick={() => setSelectedNote(index)}
              className={`${cardColors[index]} cursor-pointer backdrop-blur-sm text-white font-orbitron p-8 rounded-2xl max-w-xl
              shadow-[0_8px_25px_rgba(0,0,0,0.5)] transform transition-all duration-500 hover:scale-105 border border-[#1a1a1a]
              relative ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}
              before:absolute before:top-[-12px] before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-3 before:bg-[#66ffe3]/60 before:rounded-sm`}
            >
              <h3 className={`text-lg md:text-xl font-bold mb-3 ${accentColors[index]} uppercase`}>
                {titulos[index]}
              </h3>
              <Paragraph>{texto}</Paragraph>
            </div>
          ))}
        </div>

        {/* === MODAL === */}
        {selectedNote !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-all"
            onClick={() => setSelectedNote(null)}
          >
            <div
              className="bg-[#101018]/95 border border-[#1a1a1a] text-white font-orbitron p-10 rounded-2xl max-w-3xl shadow-[0_0_40px_rgba(102,255,227,0.4)] relative scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-4 right-4 text-[#66ffe3] text-2xl hover:text-white transition-all"
              >
                ✕
              </button>
              <h3 className={`text-2xl font-bold mb-4 ${accentColors[selectedNote]} uppercase`}>
                {titulos[selectedNote]}
              </h3>
              <Paragraph>{textos[selectedNote]}</Paragraph>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
