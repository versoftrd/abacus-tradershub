import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-page-bg">
      {/* Header with back button */}
      <div className="relative bg-[#0a0a0a] pt-20 pb-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
          <h1 className="font-sans text-white text-3xl md:text-4xl font-bold">
            Términos y Condiciones de Participación
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Abacus TradersHub - Última Actualización: 23 de agosto de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed">
              Estos Términos y Condiciones (el "Acuerdo") rigen la suscripción y participación en el programa Abacus TradersHub (el "Programa"), así como en cualquier otro contenido educativo, servicio u oferta proporcionada, operada o administrada por Abacus Exchange Ltd. ("Abacus", "nosotros" o "nuestro"), incluyendo pero no limitándose a sesiones en vivo, talleres, plataformas de suscripción y materiales digitales. Al suscribirse al Programa, acceder a su contenido o participar en él, usted (el "Participante") acepta quedar vinculado por estos términos.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Finalidad y Alcance del Programa</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Programa tiene como único propósito proporcionar acceso educativo a clases, demostraciones en vivo de trading, talleres interactivos y contenidos relacionados con los mercados financieros.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Todo el material y las actividades son estrictamente educativas e informativas. Nada de lo presentado deberá interpretarse como:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>asesoría de inversión;</li>
              <li>asesoría financiera, contable, fiscal o legal;</li>
              <li>una solicitud o recomendación para comprar, mantener o vender cualquier instrumento financiero o activo, tangible o intangible, digital o físico, regulado o no regulado;</li>
              <li>servicios de asesoría personalizados o individualizados.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Naturaleza Educativa, Descargos de Responsabilidad y Reconocimientos</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">2.1 No existe relación fiduciaria o de asesoría</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              La participación en el Programa no crea relación fiduciaria, de asesoría ni profesional-cliente entre Abacus (ni sus instructores, afiliados o contratistas) y el Participante. Abacus no está registrada como asesora de inversiones ni como intermediaria de valores en Canadá, Estados Unidos ni en ninguna otra jurisdicción.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Riesgos del Mercado</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Participante reconoce que el trading y la inversión en mercados financieros conllevan riesgos sustanciales, incluyendo, sin limitarse a:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>volatilidad del mercado,</li>
              <li>riesgo por apalancamiento,</li>
              <li>riesgo de liquidez,</li>
              <li>posibilidad de pérdida total del capital invertido.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Rendimientos pasados no garantizan resultados futuros.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Demostraciones en Vivo</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Los instructores podrán, a su discreción, ejecutar operaciones reales o simuladas durante las sesiones en vivo. Estas demostraciones son únicamente con fines educativos.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Abacus no recomienda ni alienta a replicar estas operaciones.</li>
              <li>Cualquier decisión de hacerlo será bajo responsabilidad exclusiva del Participante.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.4 Alcance y Limitación de Responsabilidad</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Las exenciones, renuncias y limitaciones de responsabilidad contenidas en este Acuerdo aplican no solo a Abacus Exchange Ltd., sino también a sus directores, ejecutivos, empleados, instructores, contratistas, consultores, afiliados, agentes y representantes, presentes, pasados o futuros.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hasta el máximo permitido por la ley aplicable, Abacus y las personas asociadas no serán responsables por pérdidas, daños, responsabilidades o reclamaciones de ningún tipo (ya sean directas, indirectas, incidentales, consecuenciales, punitivas, ejemplares o de otra índole) que se deriven del acceso, uso o participación del Participante en el Programa.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.5 Descargo sobre uso de margen y apalancamiento</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Participante reconoce que el uso de cuentas apalancadas, márgenes o financiamiento conlleva riesgos elevados de pérdida, incluso superiores al capital invertido inicialmente. Abacus no asume ninguna responsabilidad por acuerdos financieros externos. El Participante asume total responsabilidad por cualquier obligación derivada del uso de fondos prestados.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.6 Sin Garantía de Resultados</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus no ofrece garantías explícitas ni implícitas sobre resultados financieros o rendimientos derivados de la participación en el Programa.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Suscripción, Acceso y Uso</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">3.1 Tarifas y Renovaciones</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Las tarifas se publican en el sitio web oficial del Programa al momento de la compra.</li>
              <li>Todas las tarifas son no reembolsables, salvo que la ley aplicable disponga lo contrario.</li>
              <li>Las suscripciones pueden renovarse automáticamente, salvo cancelación previa por parte del Participante.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2 Reversiones de Cargo (Chargebacks)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Al inscribirse, el Participante renuncia al derecho de iniciar contracargos o disputas de pago sin antes haber notificado por escrito a Abacus y brindado una oportunidad razonable de resolver el conflicto.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">3.3 Credenciales de Acceso</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Las credenciales de acceso son personales e intransferibles.</li>
              <li>Está prohibido compartir, retransmitir, reproducir o redistribuir contenido del Programa.</li>
              <li>Cualquier violación podrá resultar en la suspensión o terminación inmediata del acceso sin derecho a reembolso.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.4 Facturación, Cancelaciones y Cargos Automáticos</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Ciclo de facturación:</strong> Las tarifas se cobran de forma recurrente (mensual, anual u otro), y se renuevan automáticamente salvo cancelación.</li>
              <li><strong>Cargos automáticos:</strong> El Participante autoriza a Abacus a realizar cargos automáticos en su método de pago registrado.</li>
              <li><strong>Cancelación:</strong> Puede realizarse en cualquier momento a través de la configuración de cuenta o escribiendo a soporte@abacusexchange.org. Para evitar un nuevo cargo, debe cancelarse mínimo cinco (5) días hábiles antes de la fecha de renovación.</li>
              <li><strong>Efectos de la cancelación:</strong> Esta detiene futuros cargos, pero no implica reembolsos de montos ya pagados.</li>
              <li><strong>Suspensión por falta de pago:</strong> Abacus se reserva el derecho de suspender el acceso ante pagos rechazados o vencidos.</li>
            </ul>
          </section>

          {/* Sections 4-13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Grabaciones y Uso de Contenido</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Al participar, el Participante autoriza la grabación de sesiones en vivo y otorga consentimiento para que dichas grabaciones sean utilizadas por Abacus con fines educativos, promocionales, de archivo o cumplimiento normativo, sin compensación adicional.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Derechos de Propiedad Intelectual</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Todo el contenido del Programa —materiales, grabaciones, gráficos, logotipos, metodologías, etc.— es propiedad exclusiva de Abacus o de sus licenciantes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Se otorga al Participante una licencia limitada, revocable, no exclusiva y no transferible para uso personal y educativo.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cualquier uso no autorizado podrá dar lugar a la cancelación del acceso y acciones legales.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Declaraciones y Garantías del Participante</h2>
            <p className="text-gray-300 leading-relaxed mb-4">El Participante declara y garantiza que:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Tiene al menos 18 años de edad (o la mayoría de edad en su jurisdicción).</li>
              <li>Tiene capacidad legal para suscribir este Acuerdo.</li>
              <li>Comprende y acepta los riesgos del trading e inversión.</li>
              <li>Es responsable de cumplir con las leyes y regulaciones aplicables en su jurisdicción.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Indemnización</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              El Participante se compromete a indemnizar y eximir de responsabilidad a Abacus (y a sus afiliados, empleados, instructores y agentes) ante cualquier reclamación, daño, costo o gasto (incluyendo honorarios legales razonables) derivados de:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>uso indebido del Programa,</li>
              <li>distribución no autorizada de contenido,</li>
              <li>violación de leyes aplicables, o</li>
              <li>reclamos de terceros relacionados con sus acciones.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Legislación Aplicable y Jurisdicción</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Este Acuerdo se regirá por las leyes de la Provincia de Ontario, Canadá, y las leyes federales canadienses aplicables. El Participante acepta someterse a la jurisdicción exclusiva de los tribunales de Toronto, Ontario, y renuncia a cualquier objeción respecto a dicha jurisdicción o lugar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Resolución de Conflictos (Arbitraje Opcional)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus podrá, a su sola discreción, requerir que las disputas se resuelvan mediante arbitraje vinculante en Toronto, conforme a las normas del Instituto ADR de Canadá. Dicha decisión será final y obligatoria para el Participante.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Fuerza Mayor</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus no será responsable por retrasos o incumplimientos derivados de causas fuera de su control razonable, incluyendo desastres naturales, pandemias, fallas técnicas, huelgas, acciones gubernamentales o caídas de servicios de terceros.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Modificaciones, Divisibilidad y Renuncia</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Abacus se reserva el derecho de modificar estos Términos en cualquier momento. La participación continua implicará aceptación.</li>
              <li>Si alguna disposición se declara inválida, el resto seguirá vigente.</li>
              <li>Ninguna renuncia a un incumplimiento se interpretará como renuncia a futuros incumplimientos.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">12. Acuerdo Completo</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Este Acuerdo constituye el acuerdo íntegro entre el Participante y Abacus, y sustituye cualquier comunicación o acuerdo previo.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">13. Información de Contacto</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Para cualquier consulta relacionada con este Acuerdo, puede comunicarse a:
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