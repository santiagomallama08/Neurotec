import Layout from "../components/Layout";
import { FaBrain, FaMicroscope, FaNetworkWired, FaChartArea } from "react-icons/fa";
import estructuralImg from "../../assets/estructural.jpg";
import funcionalImg from "../../assets/funcional.jpg";
import dtiImg from "../../assets/difusion.jpg";
import mrsImg1 from "../../assets/espec1.jpg";
import mrsImg2 from "../../assets/espec2.jpg";
import mrsImg3 from "../../assets/espec3.jpg";

export default function IRM() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#030303] via-[#0a0a0a] to-[#111827] text-[#b0fff0] py-20 px-6 md:px-16 border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#7afff3] drop-shadow-[0_0_25px_#7afff3] mb-6 tracking-wide">
            IRM – Secuencias
          </h1>
          <p className="text-sm md:text-base text-[#b0fff0] max-w-3xl mx-auto leading-snug">
            La Resonancia Magnética (RM) permite estudiar el cerebro humano desde múltiples
            perspectivas: estructura, función, conectividad y composición química.
            A continuación, exploramos las principales secuencias aplicadas en esquizofrenia.
          </p>
        </div>
      </section>

      {/* RM ESTRUCTURAL */}
      <section className="relative bg-[#0b0b10] py-14 border-t border-b border-cyan-400/20">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-40" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 relative z-10">
          <div className="md:w-1/2 space-y-2">
            <h2 className="text-2xl font-bold text-[#66ffe3] flex items-center gap-3 border-l-4 border-[#66ffe3] pl-3">
              <FaBrain className="text-[#66ffe3]" /> RM estructural (T1/T2/FLAIR)
            </h2>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Conjunto de secuencias anatómicas que muestran morfología cerebral y permiten cuantificar volúmenes y grosores corticales.
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Cómo funciona: La señal depende de los tiempos de relajación de los protones.
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">• T1 3D : alto contraste sustancia gris/blanca, ideal para volumetría.</p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">• T2: resalta líquido y patología con alto contenido hídrico.</p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">• FLAIR: suprime el LCR para evidenciar lesiones periventriculares/corticales sutiles.</p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Qué aporta en esquizofrenia: tendencia a reducción de volumen en hipocampo y corteza prefrontal, y cambios talámicos; útil para descartar lesiones orgánicas concomitantes.
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Ventajas: disponible en todos los equipos; comparabilidad longitudinal.
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Limitaciones: no específica (no “diagnostica” por sí sola).
            </p>
          </div>

          <div className="md:w-1/2 text-center">
            <img
              src={estructuralImg}
              alt="RM estructural"
              className="rounded-2xl shadow-lg shadow-[#66ffe3]/40 hover:scale-105 transition-transform duration-500 mx-auto"
            />
            <p className="text-white text-sm md:text-base mt-3 px-6">
              Resonancia Magnetica de Cerebro: Secuencia T1, Flair y T2
            </p>
          </div>
        </div>
      </section>

      {/* RM FUNCIONAL */}
      <section className="bg-[#101018] py-14 border-t border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12">
          <div className="md:w-1/2 text-center">
            <img
              src={funcionalImg}
              alt="RM funcional"
              className="rounded-2xl shadow-lg shadow-[#a795ff]/40 hover:scale-105 transition-transform duration-500 mx-auto"
            />
            <p className="text-white text-sm md:text-base mt-3 px-6">
              IRM funcional en el estudio de las conductas agresivas en pacientes con esquizofrenia
            </p>
          </div>

          <div className="md:w-1/2 space-y-2">
            <h2 className="text-2xl font-bold text-[#a795ff] flex items-center gap-3 border-l-4 border-[#a795ff] pl-3">
              <FaChartArea className="text-[#a795ff]" /> RM funcional BOLD (fMRI)
            </h2>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Técnica que detecta cambios hemodinámicos asociados a la actividad neuronal (activación y conectividad de redes).
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Cómo funciona: La deoxihemoglobina es paramagnética y modula la señal T2*. Tras la activación neuronal, hay una respuesta hemodinámica (pico a ~4–6 s) que la secuencia EPI-BOLD captura como variaciones de señal en el tiempo.
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              • Mapas de activación (tareas) y conectividad (reposo: red por defecto, ejecutiva, saliencia, etc.).
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Qué aporta en esquizofrenia: patrones de hipofrontalidad en tareas ejecutivas y alteraciones de conectividad entre redes (p. ej., DMN–control).
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">Ventajas: no invasiva; útil para estudiar circuitos.</p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">Limitaciones: muy sensible a movimiento, interpretación principalmente cualitativa.</p>
          </div>
        </div>
      </section>

      {/* DTI */}
      <section className="bg-[#0c0c12] py-14 border-t border-b border-cyan-400/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 md:px-12">
          <div className="md:w-1/2 space-y-2">
            <h2 className="text-2xl font-bold text-[#5fffd2] flex items-center gap-3 border-l-4 border-[#5fffd2] pl-3">
              <FaNetworkWired className="text-[#5fffd2]" /> Difusión / DTI (tensor de difusión)
            </h2>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Imagen sensible al movimiento browniano del agua para inferir microestructura e integridad de tractos de sustancia blanca.
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Cómo funciona (en simple): Se aplican gradientes de difusión en múltiples direcciones. El agua difunde anisotrópicamente a lo largo de axones mielinizados; el tensor resume esa anisotropía y entrega métricas:
            </p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">• FA (fracción anisotrópica), MD (difusividad media), AD/RD (ejes principal/radial).</p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">Qué entrega: mapas FA/MD y tractografía (reconstrucción de vías).</p>
            <p className="text-sm md:text-base text-white max-w-2xl leading-snug">
              Qué aporta en esquizofrenia: disminución de FA en cingulum, fascículo arcuato y conexiones frontotemporales → evidencia de disconexión estructural.
            </p>
          </div>

          <div className="md:w-1/2 text-center">
            <img
              src={dtiImg}
              alt="DTI tensor de difusión"
              className="rounded-2xl shadow-lg shadow-[#5fffd2]/30 hover:scale-105 transition-transform duration-500 mx-auto"
            />
            <p className="text-white text-sm md:text-base mt-3 px-6">
              Imagen de una mujer de 32 años, los parámetros DTI (valores AD y RD) del giro temporal superior bilateral se toman en una vista axial a nivel de la comisura anterior.
            </p>
          </div>
        </div>
      </section>

      {/* MRS */}
      <section className="bg-[#12121b] py-20 border-t border-b border-pink-500/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-bold text-[#b28aff] flex justify-center items-center gap-3 border-l-4 border-[#b28aff] pl-3 w-fit mx-auto mb-6">
            <FaMicroscope className="text-[#b28aff]" /> Espectroscopia por RM (MRS)
          </h2>

          <div className="text-sm md:text-base text-white leading-snug max-w-5xl mx-auto space-y-3 text-justify">
            <p>
              Técnica que mide metabolitos cerebrales in vivo según su desplazamiento químico (ppm).
            </p>
            <p>
              Cómo funciona (en simple): Secuencias como PRESS/STEAM excitan un vóxel localizado; el espectro muestra picos característicos:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>NAA (~2.0 ppm): marcador de integridad neuronal.</li>
              <li>Cr (~3.0): metabolismo energético (referencia interna frecuente).</li>
              <li>Cho (~3.2): membranas/c-turnover.</li>
              <li>mI (~3.5): glía/osmorregulación.</li>
              <li>Glu/GABA: requieren técnicas/esquemas específicos (p. ej., MEGA-PRESS para GABA).</li>
            </ul>
            <p>
              Qué entrega: concentraciones relativas o razones (p. ej., NAA/Cr, Cho/Cr).
            </p>
            <p>
              Qué aporta en esquizofrenia: ↓NAA en regiones como ACC/hipocampo y alteraciones Glu/GABA, coherentes con disfunción sináptica.
            </p>
            <p>
              Ventajas: información neuroquímica complementaria a estructura/función.
            </p>
            <p>
              Limitaciones: SNR dependiente de campo/tamaño de vóxel; sensible a mala colocación y shim.
            </p>
          </div>

          {/* 🔹 Tres imágenes horizontales con texto debajo */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Imagen 1 */}
            <div className="bg-[#1b1b25] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500">
              <img
                src={mrsImg1}
                alt="MRS 1"
                className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <p className="text-white text-sm md:text-base mt-3 mb-4 px-4 text-center">
                Imagen del univoxel (caja roja), situada sobre lóbulo frontal izquierdo. RM axial T1.
              </p>
            </div>

            {/* Imagen 2 */}
            <div className="bg-[#1b1b25] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500">
              <img
                src={mrsImg2}
                alt="MRS 2"
                className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <p className="text-white text-sm md:text-base mt-3 mb-4 px-4 text-center">
                Imagen del univoxel (caja roja), situado sobre la amígdala izquierda cerebral. RM
                axial T1.
              </p>
            </div>

            {/* Imagen 3 */}
            <div className="bg-[#1b1b25] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500">
              <img
                src={mrsImg3}
                alt="MRS 3"
                className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <p className="text-white text-sm md:text-base mt-3 mb-4 px-4 text-center">
                Imagen de una gráfica de espectroscopia con los metabolitos más comunes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
