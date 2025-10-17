import Layout from "../components/Layout";
import type { FC } from "react";

// 🖼️ Imágenes para las referencias
import ref1 from "../../assets/logo nego 4.png";
import ref2 from "../../assets/logo negro 1.png";
import ref3 from "../../assets/logo negro 2.png";
import ref4 from "../../assets/logo negro 3.png";
import ref5 from "../../assets/logo negro 4.png";

// ✅ Tipos explícitos
interface Reference {
  img: string;
  link: string;
}

interface ReferenceGalleryProps {
  data: Reference[];
}

// ✅ Arrays tipados
const smriRefs: Reference[] = [
  { img: ref1, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11612547/#pcn13736-sec-0025" },
  { img: ref2, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9886826/" },
  { img: ref3, link: "https://pubmed.ncbi.nlm.nih.gov/35441587/" },
  { img: ref4, link: "https://pubmed.ncbi.nlm.nih.gov/38077177/" },
  { img: ref5, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8556985/" },
];

const fmriRefs: Reference[] = [
  { img: ref1, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5135290/" },
  { img: ref2, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7724147/" },
  { img: ref3, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8288085/" },
  { img: ref4, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4731300/" },
  { img: ref5, link: "https://pubmed.ncbi.nlm.nih.gov/28011131/" },
];

const dtiRefs: Reference[] = [
  { img: ref1, link: "https://pubmed.ncbi.nlm.nih.gov/28288855/" },
  { img: ref2, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9117206/" },
  { img: ref3, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8214122/" },
  { img: ref4, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7476109/#sec13" },
  { img: ref5, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10089087/" },
];

const mrsRefs: Reference[] = [
  { img: ref1, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9332487/" },
  { img: ref2, link: "https://onlinelibrary.wiley.com/doi/10.1111/pcn.13463" },
  { img: ref3, link: "https://www.sciencedirect.com/science/article/pii/S0889159123002817?via%3Dihub" },
  { img: ref4, link: "https://journals.tubitak.gov.tr/medical/vol46/iss3/40/" },
  { img: ref5, link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9332487/" },
];

// ✅ Componente tipado correctamente
const ReferenceGallery: FC<ReferenceGalleryProps> = ({ data }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
    {data.map((ref, index) => (
      <a
        key={index}
        href={ref.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white rounded-2xl p-3 flex items-center justify-center
                   shadow-[0_0_20px_rgba(102,255,227,0.2)] hover:shadow-[0_0_40px_rgba(102,255,227,0.7)]
                   transition-all duration-500 transform hover:scale-105"
      >
        <img
          src={ref.img}
          alt={`Referencia ${index + 1}`}
          className="w-24 h-20 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
        />
      </a>
    ))}
  </div>
);

// ✅ Componente principal — sin ningún cambio funcional o visual
export default function UsoImportancia() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#030303] via-[#0a0a0a] to-[#111827] text-white py-24 px-6 md:px-16">
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-center text-[#66ffe3]
                       drop-shadow-[0_0_25px_#66ffe3] mb-12 tracking-wide">
          IRM – Uso e importancia
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* === RM estructural === */}
          <div className="bg-[#0c0c0f]/90 rounded-2xl p-8 border border-[#1a1a1a] shadow-[0_0_30px_rgba(102,255,227,0.3)]
                          hover:shadow-[0_0_50px_rgba(102,255,227,0.8)] transition-all duration-500 transform hover:scale-[1.03]">
            <h3 className="text-2xl font-orbitron font-bold text-[#66ffe3] mb-4">
              RM estructural (sMRI: T1/T2/FLAIR): ¿qué se ve y por qué?
            </h3>
            <div className="space-y-4 text-[#e6e6e6] text-justify leading-relaxed text-[1.05rem] md:text-[1.1rem] font-inter tracking-normal">
              <p>
                La sMRI expone de forma consistente disminución de volumen en hipocampo, corteza prefrontal, tálamo, ganglios basales y amígdala, además de adelgazamiento cortical fronto-temporal, ventriculomegalia, alteraciones de asimetría y progresión tras el inicio del trastorno. Estos patrones se interpretan como resultado de una combinación de vulnerabilidad del neurodesarrollo (circuitos que maduran con alteraciones de poda sináptica y mielinización) y posibles cambios progresivos ligados al curso clínico.
              </p>
              <p>
                <strong className="text-[#66ffe3]">Por qué ocurre:</strong> el adelgazamiento y la pérdida volumétrica pueden emerger de desbalances excitación/inhibición y estrés oxidativo mantenidos, que a largo plazo afectan integridad neuronal y circuitos vulnerables (eje hipocampo–prefrontal–tálamo).
              </p>
              <h4 className="text-[#66ffe3] font-semibold mt-4">sMRI en primer episodio psicótico (FEP)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Patrón basal:</strong> Hallazgo principal: menor volumen hipocampal (señal más robusta y precoz).
                  Otros cambios (más heterogéneos): prefrontal, tálamo y amígdala con efectos menores o variables
                </li>
                <li><strong>Evolución:</strong> Tendencia longitudinal: el volumen hipocampal se mantiene globalmente estable.
                  esta estabilidad explica por qué algunos cortes transversales sugieren “declive” mientras los seguimientos no muestran pérdidas aceleradas en el periodo crítico temprano.
                </li>
                <li><strong>Efecto del tratamiento:</strong> Cambio característico: mayor volumen en ganglios basales/estriado asociado a la exposición a antipsicóticos.</li>
              </ul>
            </div>
            <ReferenceGallery data={smriRefs} />
          </div>

          {/* === RM funcional === */}
          <div className="bg-[#0c0c0f]/90 rounded-2xl p-8 border border-[#1a1a1a] shadow-[0_0_30px_rgba(178,138,255,0.3)]
                          hover:shadow-[0_0_50px_rgba(178,138,255,0.8)] transition-all duration-500 transform hover:scale-[1.03]">
            <h3 className="text-2xl font-orbitron font-bold text-[#b28aff] mb-4">
              RM funcional BOLD (fMRI): ¿qué se ve y por qué?
            </h3>
            <div className="space-y-4 text-[#e6e6e6] text-justify leading-relaxed text-[1.05rem] md:text-[1.1rem] font-inter tracking-normal">
              <p>
                La fMRI mapea actividad y conectividad; en esquizofrenia predominan la hipoconectividad de red por defecto, red cingulada y redes fronto-parietales, alteraciones de la comunicación CPF–hipocampo, inestabilidad de estados de conectividad y hipofrontalidad (menor activación prefrontal) durante tareas. También se describen hiperactivación hipocampal en subgrupos y activaciones aumentadas en corteza auditiva y área de Broca durante alucinaciones auditivas.
              </p>
              <p>
                <strong className="text-[#b28aff]">Por qué ocurre:</strong> estos patrones de red encajan con una hipótesis de desconexión donde pequeñas alteraciones sinápticas y de neurotransmisión (ver MRS) comprometen la sincronía entre nodos prefrontales, temporales y límbicos. El hipocampo puede oscilar entre hipo y hiperactivación, modulando la salida hacia sistemas de integración sensorial y control ejecutivo; la inestabilidad de estados de conectividad que se reporta traduce esa variabilidad de acoplamiento dinámico.
              </p>
              <h4 className="text-[#b28aff] font-semibold mt-4">fMRI en FEP</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Desorganización de redes (red por defecto, cingulada, fronto-parietal).
                  En tareas: hipofrontalidad (menor activación prefrontal en control ejecutivo).
                  En reposo/actividad espontánea: alteraciones estriatales (índices como ALFF/ReHo anómalos desde el primer episodio).
                </li>
                <li>Normalización parcial de la activación tras iniciar antipsicóticos.
                  Paradigmas cognitivos y emocionales: se observan mayor de activación luego de semanas–meses de terapia eficaz.
                </li>
                <li>Modulación farmacológica: los antipsicóticos pueden modular la conectividad de redes de orden superior.
                  Trayectorias estriato-corticales: su evolución en el primer año puede relacionarse con resistencia al tratamiento (subgrupos con conectividad menos “normalizable”).
                </li>
              </ul>
            </div>
            <ReferenceGallery data={fmriRefs} />
          </div>

          {/* === DTI === */}
          <div className="bg-[#0c0c0f]/90 rounded-2xl p-8 border border-[#1a1a1a] shadow-[0_0_30px_rgba(95,255,210,0.3)]
                          hover:shadow-[0_0_50px_rgba(95,255,210,0.8)] transition-all duration-500 transform hover:scale-[1.03]">
            <h3 className="text-2xl font-orbitron font-bold text-[#5fffd2] mb-4">
              Difusión / DTI: ¿qué se ve y por qué?
            </h3>
            <div className="space-y-4 text-[#e6e6e6] text-justify leading-relaxed text-[1.05rem] md:text-[1.1rem] font-inter tracking-normal">
              <p>
                DTI detecta microalteraciones de sustancia blanca: en tu compendio, hay reducciones significativas de FA en fascículos de asociación, cíngulo y tractos frontales, disrupción global de conectividad estructural y afectación de uncinado, cíngulo y arcuato, lo que respalda un patrón de desconexión a nivel de cables axonales que sustentan la comunicación de redes. 
                La difusión es clave para entender microalteraciones y que se alinea con modelos de neurodesarrollo/neurodegeneración en esquizofrenia. 
              </p>
              <p>
                <strong className="text-[#5fffd2]">Por qué ocurre:</strong> si durante la maduración hay mielinización atípica, alteraciones en calibre axonal o cambios gliales, la difusión se vuelve menos anisotrópica (menor FA), especialmente en tractos fronto-temporales y del cíngulo que integran memoria, emoción y control ejecutivo; DTI capta ese sustrato de “carriles lentos” que fMRI revela luego como desincronía funcional. 
              </p>
              <h4 className="text-[#5fffd2] font-semibold mt-4">Qué medir y dónde mirar (para comparar visitas)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>•	Métricas núcleo: FA, MD (y, si es posible, AD/RD).</li>
                <li>•	Inflamación/compartimentos: Free-Water (FW); si el centro lo permite, fixel-based para densidad/orientación de fibras.</li>
                <li>•	Tractos diana: cíngulo (anterior/posterior), uncinado, arcuato, fronto-occipital inferior, cápsula interna (porción anterior) y cuerpo calloso (genu/esplenio).</li>
              </ul>
              <h4 className="text-[#5fffd2] font-semibold mt-4">DTI/dMRI en primer episodio psicótico (FEP)</h4>
              <p>
                <strong>Patrón basal (antes o al inicio del tratamiento):</strong> Hallazgo principal: disrupción microestructural: menor FA y  mayor MD en tractos fronto-temporales, cíngulo y cuerpo calloso → respalda la hipótesis de desconexión estructural.
                Señal adicional al debut: mayor “free-water” (fracción de agua libre), compatible con procesos neuroinflamatorios/edematosos tempranos.
              </p>
              <p>
                <strong>Evolución temprana (con tratamiento; ≈ primeros 2–3 años):</strong> Tendencia longitudinal: la sustancia blanca es globalmente estable en los primeros 2–3 años tras el debut.
                Los cambios mayores parecen concentrarse alrededor del FEP; después, las trayectorias son planas o discretas. Debido a el impacto de antipsicóticos sobre métricas dMRI (FA/MD/FW) es menor que el observado en sMRI estriatal (aumentos de volumen por medicación).
              </p>
            </div>
            <ReferenceGallery data={dtiRefs} />
          </div>

          {/* === MRS === */}
          <div className="bg-[#0c0c0f]/90 rounded-2xl p-8 border border-[#1a1a1a] shadow-[0_0_30px_rgba(255,121,198,0.3)]
                          hover:shadow-[0_0_50px_rgba(255,121,198,0.8)] transition-all duration-500 transform hover:scale-[1.03]">
            <h3 className="text-2xl font-orbitron font-bold text-[#ff79c6] mb-4">
              H-MRS (espectroscopia): ¿qué se ve y por qué?
            </h3>
            <div className="space-y-4 text-[#e6e6e6] text-justify leading-relaxed text-[1.05rem] md:text-[1.1rem] font-inter tracking-normal">
              <p>
                La MRS aporta el perfil neuroquímico regional. Se destaca cambios en Glutamato/Glx y GABA, mioinositol y reducción de glutatión (GSH); además, diferencias por etapa clínica (p. ej., Glx alto en primeros episodios y descenso posterior) y perfiles intermedios en familiares de primer grado, lo que la posiciona como biomarcador de vulnerabilidad y progresión. 
              </p>
              <p>
                <strong className="text-[#ff79c6]">Por qué ocurre:</strong> el desequilibrio excitación/inhibición (↑/↓ Glu y GABA) altera la ganancia de los circuitos y su capacidad de sincronizarse; si además la defensa antioxidante (GSH) está reducida, el sistema es más vulnerable a estrés oxidativo, lo que puede traducirse en pérdida de integridad neuronal (ver NAA) y, con el tiempo, en adelgazamiento cortical y desconexión que captan sMRI/DTI.
              </p>
              <h4 className="text-[#ff79c6] font-semibold mt-4">Qué medir y dónde mirar (para comparar visitas)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>•	Regiones prioritarias: ACC (cingulada anterior) y estriado; opcionales: hipocampo y tálamo si la SNR lo permite.</li>
                <li>•	Metabolitos clave: Glu/Glx, GABA (si hay MEGA-PRESS), NAA, Cho, Cr, mI; cuando sea posible, GSH.</li>
                <li>•	Reportar: concentraciones absolutas (referenciadas a agua o con corrección por fracción de LCR) o razones (p. ej., Glu/Cr, NAA/Cr, Cho/Cr). Mantén el mismo método entre visitas.</li>
                <li>•	Colocación de vóxel: evita LCR y senos paranasales; replica posición/orientación entre visitas.</li>
              </ul>
              <h4 className="text-[#ff79c6] font-semibold mt-4">H-MRS en primer episodio psicótico (FEP)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Patrón basal (antipsicótico):</strong> Hallazgo principal: anomalías glutamatérgicas en subgrupos (mayor Glx/Glu en ACC o estriado). Otros metabolitos: GABA y mioinositol (mI) alterados en regiones límbico-frontales.</li>
                <li><strong>Efecto del tratamiento (semanas–meses):</strong> Inicio: el Glu en ACC al inicio puede predecir respuesta clínica. Tendencia con tratamiento eficaz: menor Glx/Glu en seguimiento temprano, en paralelo con remisión o mejoría sintomática.</li>
                <li><strong>Seguimiento prolongado (≥ 1–2 años):</strong> Trayectorias: la curva del glutamato se asocia con síntomas y cognición a lo largo del tiempo. Implicación: la MRS actúa como biomarcador de curso, complementario a sMRI/DTI/fMRI.</li>
              </ul>
            </div>
            <ReferenceGallery data={mrsRefs} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
