import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Information - Plushify",
  description:
    "Information about your rights under the General Data Protection Regulation (GDPR) when using Plushify.",
};

export default function GDPRPage() {
  return (
    <>
      <header className="mb-8 pb-8 border-b">
        <h1 className="font-bold tracking-tight mb-2">
          GDPR Information
        </h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: January 26, 2026
        </p>
      </header>

      <p className="lead">
        This page provides information for residents of the European Economic
        Area (EEA), United Kingdom, and Switzerland about how Plushify complies
        with the General Data Protection Regulation (GDPR) and protects your
        privacy rights.
      </p>

      <h2 id="your-rights">1. Your Rights Under GDPR</h2>
      <p>
        Under the GDPR, you have the following rights regarding your personal
        data:
      </p>

      <h3>Right of Access (Article 15)</h3>
      <p>
        You have the right to obtain confirmation as to whether we are
        processing your personal data and, if so, to access that data along with
        information about:
      </p>
      <ul>
        <li>The purposes of processing</li>
        <li>The categories of personal data concerned</li>
        <li>The recipients or categories of recipients</li>
        <li>The retention period</li>
        <li>The existence of your other rights</li>
      </ul>

      <h3>Right to Rectification (Article 16)</h3>
      <p>
        You have the right to have inaccurate personal data corrected and
        incomplete personal data completed.
      </p>

      <h3>Right to Erasure (Article 17)</h3>
      <p>
        Also known as the &quot;right to be forgotten,&quot; you have the right
        to request the deletion of your personal data when:
      </p>
      <ul>
        <li>The data is no longer necessary for its original purpose</li>
        <li>You withdraw consent and there is no other legal basis</li>
        <li>You object to processing and there are no overriding legitimate grounds</li>
        <li>The data has been unlawfully processed</li>
        <li>The data must be erased for legal compliance</li>
      </ul>

      <h3>Right to Restriction of Processing (Article 18)</h3>
      <p>
        You have the right to request that we restrict processing of your
        personal data when:
      </p>
      <ul>
        <li>You contest the accuracy of the data</li>
        <li>The processing is unlawful but you oppose erasure</li>
        <li>We no longer need the data but you require it for legal claims</li>
        <li>You have objected to processing pending verification</li>
      </ul>

      <h3>Right to Data Portability (Article 20)</h3>
      <p>
        You have the right to receive your personal data in a structured,
        commonly used, and machine-readable format, and to transmit that data to
        another controller.
      </p>

      <h3>Right to Object (Article 21)</h3>
      <p>
        You have the right to object to processing of your personal data based
        on legitimate interests or for direct marketing purposes.
      </p>

      <h3>Right Not to Be Subject to Automated Decision-Making (Article 22)</h3>
      <p>
        You have the right not to be subject to a decision based solely on
        automated processing that produces legal or similarly significant
        effects.
      </p>

      <h2 id="data-controller">2. Data Controller Information</h2>
      <p>
        For purposes of the GDPR, the data controller for your personal
        information is:
      </p>
      <address className="not-italic bg-muted/50 p-4 rounded-lg my-4">
        <strong>Plushify Inc.</strong>
        <br />
        123 Plushie Lane
        <br />
        San Francisco, CA 94102
        <br />
        United States
        <br />
        <br />
        Data Protection Officer:{" "}
        <Link href="mailto:dpo@plushify.com">dpo@plushify.com</Link>
      </address>

      <h2 id="legal-basis">3. Legal Basis for Processing</h2>
      <p>
        We process your personal data on the following legal bases under GDPR:
      </p>

      <h3>Contract Performance (Article 6(1)(b))</h3>
      <p>
        We process data necessary to perform our contract with you, including:
      </p>
      <ul>
        <li>Account registration and management</li>
        <li>Processing your image transformations</li>
        <li>Processing payments</li>
        <li>Providing customer support</li>
      </ul>

      <h3>Consent (Article 6(1)(a))</h3>
      <p>We process certain data based on your explicit consent, including:</p>
      <ul>
        <li>Marketing communications</li>
        <li>Non-essential cookies</li>
        <li>Special category data (if applicable)</li>
      </ul>
      <p>You may withdraw consent at any time without affecting the lawfulness of processing based on consent before withdrawal.</p>

      <h3>Legitimate Interests (Article 6(1)(f))</h3>
      <p>We process some data based on our legitimate interests, including:</p>
      <ul>
        <li>Improving our services and user experience</li>
        <li>Security and fraud prevention</li>
        <li>Analytics and service optimization</li>
      </ul>

      <h3>Legal Obligation (Article 6(1)(c))</h3>
      <p>
        We process data when required by law, such as for tax records and
        responding to valid legal requests.
      </p>

      <h2 id="data-retention">4. Data Retention</h2>
      <p>
        We retain your personal data only as long as necessary for the purposes
        for which it was collected:
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left pb-2">Data Type</th>
            <th className="text-left pb-2">Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 pr-4">Account information</td>
            <td className="py-2">Until account deletion + 30 days</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">Uploaded images</td>
            <td className="py-2">30 days after processing</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">Generated images</td>
            <td className="py-2">Until deleted by user or account closure</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">Transaction records</td>
            <td className="py-2">7 years (legal requirement)</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">Support communications</td>
            <td className="py-2">3 years after resolution</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">Analytics data</td>
            <td className="py-2">26 months (anonymized after)</td>
          </tr>
        </tbody>
      </table>

      <h2 id="international-transfers">5. International Data Transfers</h2>
      <p>
        As Plushify is based in the United States, your personal data may be
        transferred to, stored, and processed in countries outside the EEA.
        When we transfer data internationally, we ensure appropriate safeguards
        are in place:
      </p>
      <ul>
        <li>
          <strong>Standard Contractual Clauses (SCCs):</strong> We use
          EU-approved SCCs with our service providers
        </li>
        <li>
          <strong>Adequacy Decisions:</strong> We may transfer data to countries
          recognized by the EU as providing adequate protection
        </li>
        <li>
          <strong>Additional Measures:</strong> We implement supplementary
          technical and organizational measures as needed
        </li>
      </ul>

      <h2 id="exercise-rights">6. How to Exercise Your Rights</h2>
      <p>
        To exercise any of your GDPR rights, you can contact us through the
        following methods:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link>
        </li>
        <li>
          <strong>Data Protection Officer:</strong>{" "}
          <Link href="mailto:dpo@plushify.com">dpo@plushify.com</Link>
        </li>
        <li>
          <strong>Account Settings:</strong> Some rights can be exercised
          directly in your account settings (e.g., downloading or deleting your
          data)
        </li>
      </ul>

      <h3>What to Include in Your Request</h3>
      <p>To help us process your request efficiently, please provide:</p>
      <ul>
        <li>Your full name and email address associated with your account</li>
        <li>The specific right you wish to exercise</li>
        <li>Any relevant details about the data concerned</li>
        <li>Proof of identity (we may request this to protect your data)</li>
      </ul>

      <h3>Response Time</h3>
      <p>
        We will respond to your request within one month. This period may be
        extended by two further months where necessary, taking into account the
        complexity and number of requests. We will inform you of any extension
        within one month of receiving your request.
      </p>

      <h2 id="complaints">7. Complaints</h2>
      <p>
        If you believe we have not handled your personal data properly or have
        not responded to your requests adequately, you have the right to lodge a
        complaint with a supervisory authority.
      </p>
      <p>You can file a complaint with:</p>
      <ul>
        <li>The supervisory authority in your EU member state of residence</li>
        <li>The supervisory authority in your place of work</li>
        <li>
          The supervisory authority where the alleged infringement took place
        </li>
      </ul>
      <p>
        A list of EU data protection authorities can be found on the{" "}
        <Link
          href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
          target="_blank"
          rel="noopener noreferrer"
        >
          European Data Protection Board website
        </Link>
        .
      </p>
      <p>
        We encourage you to contact us first so we can try to resolve your
        concerns directly.
      </p>

      <h2 id="updates">8. Updates to This Information</h2>
      <p>
        We may update this GDPR information from time to time to reflect changes
        in our practices or legal requirements. We will notify you of any
        material changes through our website or by email.
      </p>

      <h2 id="contact">9. Contact Us</h2>
      <p>
        For any questions about this GDPR information or our privacy practices:
      </p>
      <ul>
        <li>
          <strong>General Privacy Inquiries:</strong>{" "}
          <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link>
        </li>
        <li>
          <strong>Data Protection Officer:</strong>{" "}
          <Link href="mailto:dpo@plushify.com">dpo@plushify.com</Link>
        </li>
      </ul>

      <p className="mt-8 text-sm">
        This page supplements our <Link href="/privacy">Privacy Policy</Link>.
        Please read both documents to understand how we handle your personal
        information.
      </p>
    </>
  );
}
