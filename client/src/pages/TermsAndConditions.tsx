import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-page-bg">
      {/* Header with back button */}
      <div className="relative bg-[#0a0a0a] pt-20 pb-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <h1 className="font-sans text-white text-3xl md:text-4xl font-bold">
            Términos y Condiciones de Participación – Abacus TradersHub
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Última Actualización: 23 de agosto de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed">
              Estos Términos y Condiciones (el "Acuerdo") rigen la suscripción y participación en Abacus TradersHub (el "Programa") así como cualquier otro contenido educativo, servicios u ofertas proporcionadas, operadas o administradas por Abacus Exchange Ltd. ("Abacus", "nosotros", "nuestro" o "nos"), incluyendo pero no limitándose a sesiones en vivo, talleres, plataformas de suscripción y materiales digitales. Al suscribirse al Programa, acceder a su contenido o participar de otro modo, usted (el "Participante") acepta estar sujeto a estos términos.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Propósito y Alcance del Programa</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Programa está diseñado exclusivamente para proporcionar acceso educativo a conferencias, demostraciones de trading en vivo, talleres interactivos y contenido instructivo relacionado sobre los mercados financieros.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Todos los materiales y actividades son estrictamente de naturaleza educativa e informativa. Nada de lo presentado será interpretado como:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>asesoramiento de inversión;</li>
              <li>asesoramiento financiero, contable, fiscal o legal;</li>
              <li>una solicitud o recomendación para comprar, mantener o vender cualquier instrumento financiero o cualquier otro activo, tangible o intangible, digital o físico, ya sea regulado o no regulado;</li>
              <li>servicios de asesoramiento personalizado o individualizado.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Naturaleza Educativa, Descargos de Responsabilidad y Reconocimientos</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">2.1 Ninguna Relación de Asesoramiento o Fiduciaria</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              La participación en el Programa no crea ningún deber fiduciario, relación de asesoramiento o relación profesional-cliente entre Abacus (o sus instructores, afiliados o contratistas) y el Participante. Abacus no está registrada como asesor de inversiones o agente de bolsa en Canadá, Estados Unidos o cualquier otra jurisdicción.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Riesgos de Mercado</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Participante reconoce que el trading e inversión en mercados financieros involucra riesgos sustanciales, incluyendo, sin limitación, volatilidad del mercado, riesgo de apalancamiento, riesgo de liquidez y la posibilidad de pérdida total del capital invertido. Las demostraciones o estrategias pasadas no son indicativas de resultados futuros.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Demostraciones en Vivo</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Los instructores pueden, a su discreción, ejecutar operaciones reales o simuladas durante las sesiones en vivo. Tales demostraciones son estrictamente para fines educativos.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Abacus no recomienda ni alienta a los Participantes a replicar tales operaciones.</li>
              <li>Cualquier decisión de hacerlo es únicamente bajo el riesgo y responsabilidad del Participante.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.4 Alcance y Limitación de Responsabilidad</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Todos los descargos de responsabilidad, renuncias y limitaciones de responsabilidad establecidos en este Acuerdo se aplicarán no solo a Abacus Exchange Ltd. en sí, sino también a sus directores, funcionarios, empleados, instructores, contratistas, consultores, afiliados, agentes y representantes, ya sean pasados, presentes o futuros.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              En la máxima medida permitida por la ley aplicable, Abacus y dichas personas asociadas no serán responsables de ninguna pérdida, daño, responsabilidad o reclamación de cualquier tipo (ya sea directa, indirecta, incidental, consecuencial, punitiva, ejemplar o de otro tipo) que surja de o se relacione con el acceso, dependencia o participación del Participante en el Programa.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.5 Descargo de Responsabilidad de Margen y Apalancamiento</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Participante reconoce que el uso de margen, facilidades de crédito o cuentas de trading apalancadas conlleva un riesgo sustancialmente mayor de pérdida, incluyendo pérdidas que pueden exceder el capital original invertido. Abacus no tiene responsabilidad o participación en cualquier arreglo de margen, préstamo o financiamiento que el Participante pueda emprender con su broker, institución financiera o plataforma de terceros. El Participante asume total y exclusiva responsabilidad por cualquier obligación, deuda derivada del uso de fondos prestados.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.6 Sin Garantías de Resultados</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus no ofrece garantías de ningún tipo, expresas o implícitas, con respecto a cualquier resultado, consecuencia o rendimiento financiero que pueda surgir de la participación en el Programa.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Suscripción, Acceso y Uso</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">3.1 Tarifas de Suscripción y Renovaciones</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Las tarifas son según se publican en el sitio web oficial del Programa al momento de la compra.</li>
              <li>Todas las tarifas no son reembolsables, excepto según lo requiera la ley aplicable.</li>
              <li>Las suscripciones pueden renovarse automáticamente a menos que sean canceladas por el Participante de acuerdo con los procedimientos de cancelación de Abacus.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2 Contracargos</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Al inscribirse en el Programa, el Participante renuncia a cualquier derecho de iniciar o perseguir contracargos o disputas de pago sin antes proporcionar a Abacus un aviso por escrito y una oportunidad razonable para resolver el asunto.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">3.3 Derechos de Acceso</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Las credenciales de acceso son estrictamente personales e intransferibles.</li>
              <li>El compartir no autorizado, retransmitir, reproducir o redistribuir contenido del Programa está estrictamente prohibido.</li>
              <li>Abacus se reserva el derecho de suspender o terminar el acceso inmediatamente, sin reembolso, en caso de cualquier violación.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.4 Facturación, Cancelaciones y Cargos Automáticos</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Ciclo de Facturación:</strong> Las tarifas de suscripción se facturan de forma recurrente (mensual, anual, o como se establezca en el momento de la compra) y se renovarán automáticamente al final de cada ciclo de facturación a menos que sean canceladas por el Participante.</li>
              <li><strong>Cargos Automáticos:</strong> Al inscribirse, el Participante autoriza a Abacus Exchange a cargar automáticamente el método de pago designado registrado para cada período de renovación.</li>
              <li><strong>Cancelación por el Participante:</strong> El Participante puede cancelar su suscripción en cualquier momento siguiendo el proceso de cancelación disponible a través de la configuración de su cuenta o contactando el soporte de Abacus en soporte@abacusexchange.org. Para evitar ser cobrado por el siguiente ciclo de facturación, las cancelaciones deben completarse no más tarde de cinco (5) días hábiles antes de la fecha de renovación.</li>
              <li><strong>Efecto de la Cancelación:</strong> La cancelación detendrá futuros cargos pero no da derecho al Participante a reembolsos por cualquier tarifa ya pagada, excepto según lo requiera la ley aplicable.</li>
              <li><strong>Suspensión por Falta de Pago:</strong> Abacus se reserva el derecho de suspender o terminar el acceso al Programa si el pago no puede ser procesado o está en mora.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Grabaciones y Uso de Contenido</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Los participantes reconocen que las sesiones en vivo pueden ser grabadas. Al participar, el Participante consiente dichas grabaciones y acepta que Abacus puede usarlas para propósitos educativos, de cumplimiento, archivo o promocionales sin mayor aviso o compensación.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Derechos de Propiedad Intelectual</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Todo el contenido del Programa, incluyendo pero no limitado a materiales educativos, grabaciones audiovisuales, transcripciones, gráficos, logotipos, marcas comerciales y metodologías propietarias, es propiedad exclusiva de Abacus o sus licenciantes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A los participantes se les otorga una licencia limitada, revocable, no exclusiva, no transferible para acceder y usar el contenido del Programa únicamente para fines educativos personales.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cualquier uso no autorizado puede resultar en la terminación del acceso y acción legal.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Representaciones y Garantías del Participante</h2>
            <p className="text-gray-300 leading-relaxed mb-4">Al suscribirse, el Participante declara y garantiza que:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Tiene al menos 18 años de edad (o la edad de mayoría en su jurisdicción).</li>
              <li>Tiene plena capacidad legal para celebrar este Acuerdo.</li>
              <li>Comprende y acepta los riesgos del trading e inversión.</li>
              <li>Es únicamente responsable de asegurar el cumplimiento con las leyes y regulaciones de su jurisdicción.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Indemnización</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Participante acepta indemnizar, defender y eximir de responsabilidad a Abacus, sus afiliados, directores, funcionarios, instructores, empleados, contratistas, consultores y agentes de y contra cualquier reclamo, responsabilidad, daño, costo o gasto (incluyendo honorarios legales razonables) que surja de o se relacione con:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>mal uso del Programa;</li>
              <li>distribución no autorizada de contenido;</li>
              <li>violación de leyes aplicables; o</li>
              <li>reclamos de terceros, incluyendo brokers, bancos, reguladores o instituciones financieras, resultantes de las acciones del Participante.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Este Acuerdo se regirá e interpretará de acuerdo con las leyes de la Provincia de Ontario, Canadá, junto con las leyes federales de Canadá aplicables allí.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Participante se somete irrevocablemente a la jurisdicción exclusiva de los tribunales ubicados en Toronto, Ontario, Canadá, y renuncia a cualquier objeción de lugar, jurisdicción o forum non conveniens.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Resolución de Disputas (Arbitraje Opcional)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus puede, a su sola discreción, requerir que las disputas se resuelvan a través de arbitraje vinculante en Toronto, Ontario, bajo las reglas del Instituto ADR de Canadá. Cualquier decisión de Abacus será final y vinculante para el Participante.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Fuerza Mayor</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus no será responsable por cualquier retraso o falta de cumplimiento de sus obligaciones bajo este Acuerdo resultante de causas más allá de su control razonable, incluyendo pero no limitado a actos de Dios, desastres naturales, pandemias, cortes de internet o servicios públicos, huelgas, acciones gubernamentales, o fallas de plataformas de terceros.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Enmiendas, Separabilidad y Renuncia</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus se reserva el derecho de enmendar estos Términos en cualquier momento. La participación continuada constituye aceptación de dichas enmiendas.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Si cualquier disposición de este Acuerdo se considera inválida o inaplicable, las disposiciones restantes permanecerán en plena vigencia y efecto. Ninguna renuncia por Abacus de cualquier incumplimiento de este Acuerdo se considerará una renuncia de cualquier otro incumplimiento posterior.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Las secciones relacionadas con descargos de responsabilidad, propiedad intelectual, indemnización, ley aplicable, limitación de responsabilidad y resolución de disputas sobrevivirán la terminación de este Acuerdo.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">12. Acuerdo Completo</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Este Acuerdo constituye el entendimiento completo entre el Participante y Abacus, sustituyendo cualquier acuerdo, comunicación o representación previa.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">13. Información de Contacto</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Para consultas sobre este Acuerdo, por favor contacte a:
            </p>
            <p className="text-[#0055FF] font-medium">
              📩 soporte@abacusexchange.org
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}