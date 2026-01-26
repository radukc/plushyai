import Link from "next/link";
import { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CCPA Notice - Plushify",
  description:
    "California Consumer Privacy Act (CCPA) notice for California residents using Plushify.",
};

export default function CCPAPage() {
  return (
    <>
      <header className="mb-8 pb-8 border-b">
        <h1 className="font-bold tracking-tight mb-2">
          California Privacy Notice (CCPA)
        </h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: {LEGAL_LAST_UPDATED}
        </p>
      </header>

      <p className="lead">
        This California Privacy Notice supplements our{" "}
        <Link href="/privacy">Privacy Policy</Link> and applies solely to
        California residents. It describes how we collect, use, and share
        personal information of California consumers as required by the
        California Consumer Privacy Act of 2018 (CCPA), as amended by the
        California Privacy Rights Act (CPRA).
      </p>

      <h2 id="california-rights">1. California Residents&apos; Rights</h2>
      <p>
        As a California resident, you have specific rights regarding your
        personal information:
      </p>

      <h3>Right to Know</h3>
      <p>
        You have the right to request that we disclose the following information
        about our collection and use of your personal information over the past
        12 months:
      </p>
      <ul>
        <li>The categories of personal information we collected</li>
        <li>The categories of sources from which we collected the information</li>
        <li>Our business or commercial purpose for collecting or selling the information</li>
        <li>The categories of third parties with whom we share the information</li>
        <li>The specific pieces of personal information we collected about you</li>
      </ul>

      <h3>Right to Delete</h3>
      <p>
        You have the right to request that we delete personal information we
        collected from you, subject to certain exceptions.
      </p>

      <h3>Right to Correct</h3>
      <p>
        You have the right to request that we correct inaccurate personal
        information we maintain about you.
      </p>

      <h3>Right to Opt-Out of Sale/Sharing</h3>
      <p>
        You have the right to opt out of the &quot;sale&quot; or
        &quot;sharing&quot; of your personal information, as those terms are
        defined under the CCPA.
      </p>

      <h3>Right to Limit Use of Sensitive Personal Information</h3>
      <p>
        You have the right to limit the use and disclosure of sensitive personal
        information to what is necessary to perform the services.
      </p>

      <h3>Right to Non-Discrimination</h3>
      <p>
        You have the right not to receive discriminatory treatment for
        exercising any of your CCPA rights.
      </p>

      <h2 id="information-collected">2. Categories of Information Collected</h2>
      <p>
        We have collected the following categories of personal information from
        California consumers within the last 12 months:
      </p>

      <table className="w-full text-sm my-6">
        <thead>
          <tr>
            <th className="text-left pb-2 pr-4">Category</th>
            <th className="text-left pb-2 pr-4">Examples</th>
            <th className="text-left pb-2">Collected</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">Identifiers</td>
            <td className="py-3 pr-4 align-top">
              Name, email address, account name, IP address
            </td>
            <td className="py-3 align-top">Yes</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Personal Information (Cal. Civ. Code § 1798.80(e))
            </td>
            <td className="py-3 pr-4 align-top">
              Name, address, payment card information
            </td>
            <td className="py-3 align-top">Yes</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Commercial Information
            </td>
            <td className="py-3 pr-4 align-top">
              Purchase history, credits purchased, services used
            </td>
            <td className="py-3 align-top">Yes</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Internet/Electronic Activity
            </td>
            <td className="py-3 pr-4 align-top">
              Browsing history, search history, interaction with website
            </td>
            <td className="py-3 align-top">Yes</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">Geolocation Data</td>
            <td className="py-3 pr-4 align-top">Approximate location based on IP</td>
            <td className="py-3 align-top">Yes</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Audio/Visual Information
            </td>
            <td className="py-3 pr-4 align-top">
              Photos/images uploaded for processing
            </td>
            <td className="py-3 align-top">Yes</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Inferences
            </td>
            <td className="py-3 pr-4 align-top">
              Preferences derived from usage patterns
            </td>
            <td className="py-3 align-top">Yes</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Sensitive Personal Information
            </td>
            <td className="py-3 pr-4 align-top">
              Account login credentials, precise geolocation
            </td>
            <td className="py-3 align-top">Limited</td>
          </tr>
        </tbody>
      </table>

      <h2 id="how-we-use">3. How We Use Information</h2>
      <p>
        We use the personal information we collect for the following business
        and commercial purposes:
      </p>
      <ul>
        <li>
          <strong>Providing Services:</strong> To provide, maintain, and improve
          our image transformation service
        </li>
        <li>
          <strong>Account Management:</strong> To create and manage your account
        </li>
        <li>
          <strong>Processing Transactions:</strong> To process payments and
          manage credits
        </li>
        <li>
          <strong>Customer Support:</strong> To respond to your inquiries and
          provide assistance
        </li>
        <li>
          <strong>Communications:</strong> To send service-related communications
          and marketing (with consent)
        </li>
        <li>
          <strong>Analytics:</strong> To understand how our service is used and
          improve user experience
        </li>
        <li>
          <strong>Security:</strong> To detect, prevent, and address fraud and
          security issues
        </li>
        <li>
          <strong>Legal Compliance:</strong> To comply with legal obligations
        </li>
      </ul>

      <h2 id="sharing">4. Sharing of Personal Information</h2>
      <p>
        We may share your personal information with the following categories of
        third parties:
      </p>

      <table className="w-full text-sm my-6">
        <thead>
          <tr>
            <th className="text-left pb-2 pr-4">Category of Third Party</th>
            <th className="text-left pb-2 pr-4">Categories of PI Shared</th>
            <th className="text-left pb-2">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">Service Providers</td>
            <td className="py-3 pr-4 align-top">
              Identifiers, Commercial Info, Internet Activity
            </td>
            <td className="py-3 align-top">
              Cloud hosting, payment processing, analytics
            </td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Advertising Partners
            </td>
            <td className="py-3 pr-4 align-top">
              Identifiers, Internet Activity, Inferences
            </td>
            <td className="py-3 align-top">Targeted advertising</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 pr-4 align-top font-medium">
              Business Partners
            </td>
            <td className="py-3 pr-4 align-top">Identifiers, Commercial Info</td>
            <td className="py-3 align-top">Joint offerings or promotions</td>
          </tr>
        </tbody>
      </table>

      <h2 id="do-not-sell">5. Do Not Sell or Share My Personal Information</h2>
      <p>
        Under the CCPA, &quot;selling&quot; and &quot;sharing&quot; personal
        information includes making it available to third parties for monetary
        or other valuable consideration, or for cross-context behavioral
        advertising.
      </p>
      <p>
        <strong>Plushify does not sell personal information</strong> in the
        traditional sense for monetary compensation. However, like many
        businesses, we may share certain information with advertising partners
        that could constitute a &quot;sale&quot; or &quot;share&quot; under the
        CCPA&apos;s broad definitions.
      </p>
      <p>
        To opt out of the sale or sharing of your personal information, you can:
      </p>
      <ul>
        <li>
          Click the &quot;Do Not Sell or Share My Personal Information&quot;
          link in our website footer
        </li>
        <li>
          Email us at{" "}
          <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link>{" "}
          with the subject &quot;CCPA Opt-Out&quot;
        </li>
        <li>
          Use the Global Privacy Control (GPC) signal in your browser - we honor
          GPC signals
        </li>
      </ul>

      <h2 id="exercise-rights">6. How to Exercise Your Rights</h2>
      <p>To submit a request to exercise your California privacy rights:</p>

      <h3>Submitting a Request</h3>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link>
        </li>
        <li>
          <strong>Online:</strong> Submit a request through your account
          settings
        </li>
        <li>
          <strong>Toll-Free:</strong> Call 1-800-PLUSHIFY (placeholder)
        </li>
      </ul>

      <h3>Verification</h3>
      <p>
        To protect your privacy and security, we will verify your identity
        before processing your request. Verification methods may include:
      </p>
      <ul>
        <li>Confirming information you provided when creating your account</li>
        <li>Requiring you to log in to your account</li>
        <li>Asking you to provide additional information to match our records</li>
      </ul>

      <h3>Authorized Agents</h3>
      <p>
        You may designate an authorized agent to make a request on your behalf.
        To do so, you must provide the agent with written permission, and we may
        require the agent to provide proof of authorization and verify their
        identity.
      </p>

      <h3>Response Timing</h3>
      <p>
        We will acknowledge receipt of your request within 10 business days and
        respond to verifiable consumer requests within 45 days. If we need more
        time (up to 90 days total), we will notify you of the reason and
        extension period.
      </p>

      <h2 id="non-discrimination">7. Non-Discrimination</h2>
      <p>
        We will not discriminate against you for exercising your CCPA rights. We
        will not:
      </p>
      <ul>
        <li>Deny you goods or services</li>
        <li>Charge you different prices or rates for goods or services</li>
        <li>Provide you a different level or quality of goods or services</li>
        <li>
          Suggest that you may receive a different price or rate for goods or
          services or a different level or quality of goods or services
        </li>
      </ul>
      <p>
        However, we may offer financial incentives for the collection, sale, or
        deletion of personal information. If we do, we will notify you and
        obtain your opt-in consent.
      </p>

      <h2 id="financial-incentives">8. Financial Incentives</h2>
      <p>
        We may offer programs that provide certain benefits in exchange for
        collecting additional personal information. For example:
      </p>
      <ul>
        <li>
          <strong>Referral Programs:</strong> Earn credits for referring new
          users (requires sharing contact information)
        </li>
        <li>
          <strong>Feedback Programs:</strong> Receive discounts for providing
          usage feedback
        </li>
      </ul>
      <p>
        Participation in these programs is voluntary. You can opt out at any
        time by contacting us.
      </p>

      <h2 id="minors">9. Minors</h2>
      <p>
        We do not knowingly collect personal information from consumers under 16
        years of age. If we learn that we have collected personal information
        from a minor, we will delete that information.
      </p>
      <p>
        We do not sell or share the personal information of consumers we know to
        be under 16 years of age.
      </p>

      <h2 id="shine-the-light">10. California &quot;Shine the Light&quot;</h2>
      <p>
        Under California Civil Code Section 1798.83 (&quot;Shine the Light&quot;
        law), California residents may request information about our disclosure
        of personal information to third parties for their direct marketing
        purposes during the prior calendar year.
      </p>
      <p>
        To make such a request, please email{" "}
        <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link> with
        &quot;Shine the Light Request&quot; in the subject line.
      </p>

      <h2 id="updates">11. Changes to This Notice</h2>
      <p>
        We may update this California Privacy Notice from time to time. We will
        notify you of any material changes by posting the updated notice on our
        website and updating the &quot;Last Updated&quot; date.
      </p>

      <h2 id="contact">12. Contact Information</h2>
      <p>
        If you have questions about this California Privacy Notice or wish to
        exercise your rights:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link>
        </li>
        <li>
          <strong>Phone:</strong> 1-800-PLUSHIFY (placeholder)
        </li>
        <li>
          <strong>Mail:</strong> Plushify Inc., Attn: Privacy, 123 Plushie Lane,
          San Francisco, CA 94102
        </li>
      </ul>
    </>
  );
}
