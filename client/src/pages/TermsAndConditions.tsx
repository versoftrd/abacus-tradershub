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
            Back to Home
          </Link>
          <h1 className="font-sans text-white text-3xl md:text-4xl font-bold">
            Terms and Conditions of Participation – Abacus TradersHub
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Last Updated: August 23rd 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed">
              These Terms and Conditions (the "Agreement") govern the subscription to and participation in Abacus TradersHub (the "Program") as well as any other educational content, services, or offerings provided, operated, or administered by Abacus Exchange Ltd. ("Abacus," "we," "our," or "us"), including but not limited to live sessions, workshops, subscription platforms, and digital materials. By subscribing to the Program, accessing its content, or otherwise participating, you (the "Participant") agree to be bound by these terms.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Purpose and Scope of the Program</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Program is designed solely to provide educational access to lectures, live trading demonstrations, interactive workshops, and related instructional content concerning financial markets.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              All materials and activities are strictly educational and informational in nature. Nothing presented shall be interpreted as:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>investment advice;</li>
              <li>financial, accounting, tax, or legal advice;</li>
              <li>a solicitation or recommendation to buy, hold, or sell any financial instrument or any other asset, tangible or intangible, digital or physical, whether regulated or unregulated;</li>
              <li>personalized or individualized advisory services.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Educational Nature, Disclaimers, and Acknowledgments</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">2.1 No Advisory or Fiduciary Relationship</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Participation in the Program does not create any fiduciary duty, advisory relationship, or professional-client relationship between Abacus (or its instructors, affiliates, or contractors) and the Participant. Abacus is not registered as an investment adviser or broker-dealer in Canada, the United States, or any other jurisdiction.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Market Risks</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Participant acknowledges that trading and investment in financial markets involve substantial risks, including, without limitation, market volatility, leverage risk, liquidity risk, and the possibility of the total loss of capital invested. Past demonstrations or strategies are not indicative of future results.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Live Demonstrations</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Instructors may, at their discretion, execute real or simulated trades during live sessions. Such demonstrations are strictly for educational purposes.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Abacus does not recommend or encourage Participants to replicate such trades.</li>
              <li>Any decision to do so is at the Participant's sole risk and responsibility.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.4 Scope and Limitation of Liability</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              All disclaimers, waivers, and limitations of liability set forth in this Agreement shall apply not only to Abacus Exchange Ltd. itself, but also to its directors, officers, employees, instructors, contractors, consultants, affiliates, agents, and representatives, whether past, present, or future.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, Abacus and such associated persons shall not be liable for any losses, damages, liabilities, or claims of any kind (whether direct, indirect, incidental, consequential, punitive, exemplary, or otherwise) arising out of or relating to the Participant's access to, reliance upon, or participation in the Program.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.5 Margin and Leverage Disclaimer</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Participant acknowledges that the use of margin, credit facilities, or leveraged trading accounts carries a substantially increased risk of loss, including losses that may exceed the original capital invested. Abacus has no responsibility or involvement in any margin, loan, or financing arrangements the Participant may undertake with their broker, financial institution, or third-party platform. The Participant assumes full and exclusive responsibility for any obligations, debt derived from the use of borrowed funds.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.6 No Guarantees of Results</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus makes no warranties or guarantees of any kind, express or implied, regarding any financial results, outcomes, or performance that may arise from participation in the Program.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Subscription, Access, and Use</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">3.1 Subscription Fees and Renewals</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Fees are as published on the official Program website at the time of purchase.</li>
              <li>All fees are non-refundable, except as required by applicable law.</li>
              <li>Subscriptions may renew automatically unless cancelled by the Participant in accordance with Abacus's cancellation procedures.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2 Chargebacks</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              By enrolling in the Program, the Participant waives any right to initiate or pursue chargebacks or payment disputes without first providing Abacus with written notice and a reasonable opportunity to resolve the matter.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">3.3 Access Rights</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Access credentials are strictly personal and non-transferable.</li>
              <li>Unauthorized sharing, rebroadcasting, reproduction, or redistribution of Program content is strictly prohibited.</li>
              <li>Abacus reserves the right to suspend or terminate access immediately, without refund, in the event of any violation.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.4 Billing, Cancellations, and Automatic Charges</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Billing Cycle:</strong> Subscription fees are billed on a recurring basis (monthly, annually, or as otherwise stated at the time of purchase) and will automatically renew at the end of each billing cycle unless cancelled by the Participant.</li>
              <li><strong>Automatic Charges:</strong> By enrolling, the Participant authorizes Abacus Exchange to automatically charge the designated payment method on file for each renewal period.</li>
              <li><strong>Cancellation by Participant:</strong> The Participant may cancel their subscription at any time by following the cancellation process available through their account settings or by contacting Abacus support at soporte@abacusexchange.org. To avoid being charged for the next billing cycle, cancellations must be completed no later than five (5) business days before the renewal date.</li>
              <li><strong>Effect of Cancellation:</strong> Cancellation will stop future charges but does not entitle the Participant to refunds for any fees already paid, except as required by applicable law.</li>
              <li><strong>Suspension for Non-Payment:</strong> Abacus reserves the right to suspend or terminate access to the Program if payment cannot be processed or is otherwise overdue.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Recordings and Content Usage</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Participants acknowledge that live sessions may be recorded. By participating, the Participant consents to such recordings and agrees that Abacus may use them for educational, compliance, archival, or promotional purposes without further notice or compensation.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All Program content, including but not limited to educational materials, audiovisual recordings, transcripts, graphics, logos, trademarks, and proprietary methodologies, is the exclusive property of Abacus or its licensors.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Participants are granted a limited, revocable, non-exclusive, non-transferable license to access and use Program content for personal educational purposes only.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Any unauthorized use may result in termination of access and legal action.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Participant Representations and Warranties</h2>
            <p className="text-gray-300 leading-relaxed mb-4">By subscribing, the Participant represents and warrants that:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>They are at least 18 years of age (or the age of majority in their jurisdiction).</li>
              <li>They have full legal capacity to enter into this Agreement.</li>
              <li>They understand and accept the risks of trading and investing.</li>
              <li>They are solely responsible for ensuring compliance with the laws and regulations of their jurisdiction.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Participant agrees to indemnify, defend, and hold harmless Abacus, its affiliates, directors, officers, instructors, employees, contractors, consultants, and agents from and against any claims, liabilities, damages, costs, or expenses (including reasonable legal fees) arising out of or relating to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>misuse of the Program;</li>
              <li>unauthorized distribution of content;</li>
              <li>violation of applicable laws; or</li>
              <li>claims by third parties, including brokers, banks, regulators, or financial institutions, resulting from the Participant's actions.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law and Jurisdiction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Agreement shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, together with the federal laws of Canada applicable therein.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Participant irrevocably submits to the exclusive jurisdiction of the courts located in Toronto, Ontario, Canada, and waives any objection to venue, jurisdiction, or forum non conveniens.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Dispute Resolution (Optional Arbitration)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus may, at its sole discretion, require that disputes be resolved through binding arbitration in Toronto, Ontario, under the rules of the ADR Institute of Canada. Any such decision by Abacus shall be final and binding on the Participant.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Force Majeure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus shall not be liable for any delay or failure to perform its obligations under this Agreement resulting from causes beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemics, internet or utility outages, strikes, governmental actions, or failures of third-party platforms.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Amendments, Severability, and Waiver</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abacus reserves the right to amend these Terms at any time. Continued participation constitutes acceptance of such amendments.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              If any provision of this Agreement is held invalid or unenforceable, the remaining provisions shall remain in full force and effect. No waiver by Abacus of any breach of this Agreement shall be deemed a waiver of any other or subsequent breach.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sections relating to disclaimers, intellectual property, indemnification, governing law, limitation of liability, and dispute resolution shall survive termination of this Agreement.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">12. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Agreement constitutes the entire understanding between the Participant and Abacus, superseding any prior agreements, communications, or representations.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For inquiries regarding this Agreement, please contact:
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