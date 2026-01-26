import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Plushify",
  description:
    "Read the terms and conditions governing your use of the Plushify service.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <header className="mb-8 pb-8 border-b">
        <h1 className="font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: January 26, 2026
        </p>
      </header>

      <p className="lead">
        Welcome to Plushify. These Terms of Service (&quot;Terms&quot;) govern
        your access to and use of the Plushify website, services, and
        applications (collectively, the &quot;Service&quot;). Please read these
        Terms carefully before using our Service.
      </p>

      <h2 id="acceptance-of-terms">1. Acceptance of Terms</h2>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms.
        If you disagree with any part of these Terms, you may not access the
        Service.
      </p>
      <p>
        You must be at least 13 years old to use the Service. By using the
        Service, you represent and warrant that you meet this age requirement.
      </p>

      <h2 id="description-of-service">2. Description of Service</h2>
      <p>
        Plushify provides an AI-powered image transformation service that
        converts uploaded photographs into plushie-style artwork. The Service
        includes:
      </p>
      <ul>
        <li>Image upload and processing capabilities</li>
        <li>Multiple plushie style options</li>
        <li>Image storage in your personal gallery</li>
        <li>Download options for generated images</li>
        <li>Credit-based usage system</li>
      </ul>

      <h2 id="user-accounts">3. User Accounts</h2>

      <h3>Account Creation</h3>
      <p>
        To access certain features of the Service, you must create an account.
        You agree to provide accurate, current, and complete information during
        registration and to update such information to keep it accurate and
        complete.
      </p>

      <h3>Account Security</h3>
      <p>
        You are responsible for safeguarding your account credentials and for
        all activities that occur under your account. You agree to notify us
        immediately of any unauthorized use of your account.
      </p>

      <h3>Account Termination</h3>
      <p>
        We reserve the right to suspend or terminate your account at our sole
        discretion, without notice, for conduct that we believe violates these
        Terms or is harmful to other users, us, or third parties, or for any
        other reason.
      </p>

      <h2 id="acceptable-use">4. Acceptable Use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>
          Upload content that is illegal, harmful, threatening, abusive,
          harassing, defamatory, or otherwise objectionable
        </li>
        <li>
          Upload content that infringes on the intellectual property rights of
          others
        </li>
        <li>Upload content depicting minors in any inappropriate manner</li>
        <li>
          Upload content containing explicit sexual content or pornography
        </li>
        <li>Attempt to reverse engineer or extract the AI models or algorithms</li>
        <li>Use automated systems or bots to access the Service</li>
        <li>Resell or redistribute the Service without authorization</li>
        <li>Interfere with or disrupt the Service or servers</li>
      </ul>
      <p>
        For complete details, please review our{" "}
        <Link href="/acceptable-use">Acceptable Use Policy</Link>.
      </p>

      <h2 id="intellectual-property">5. Intellectual Property</h2>

      <h3>Our Intellectual Property</h3>
      <p>
        The Service and its original content, features, and functionality are
        owned by Plushify and are protected by international copyright,
        trademark, patent, trade secret, and other intellectual property laws.
      </p>

      <h3>Your Content</h3>
      <p>
        You retain ownership of any images you upload to the Service. By
        uploading content, you grant us a limited, non-exclusive license to
        process, transform, and store your images solely for the purpose of
        providing the Service.
      </p>

      <h3>Generated Images</h3>
      <p>
        Subject to these Terms and your subscription level, you own the
        plushie-transformed images generated from your uploads. Commercial use
        rights vary by subscription tier—please refer to your plan details.
      </p>

      <h2 id="payment-terms">6. Payment Terms</h2>

      <h3>Credits System</h3>
      <p>
        The Service operates on a credit-based system. Credits are required to
        generate plushie transformations. Credit packages and pricing are
        displayed on our <Link href="/pricing">Pricing page</Link>.
      </p>

      <h3>Purchases</h3>
      <p>
        All purchases are final and non-refundable, except as expressly stated
        in our <Link href="/refund">Refund Policy</Link>. We accept payment
        through the methods displayed at checkout.
      </p>

      <h3>Price Changes</h3>
      <p>
        We reserve the right to modify our prices at any time. Price changes
        will not affect credits already purchased.
      </p>

      <h2 id="disclaimers">7. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
        AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
        IMPLIED. WE DO NOT WARRANT THAT:
      </p>
      <ul>
        <li>The Service will be uninterrupted, timely, secure, or error-free</li>
        <li>The results obtained from the Service will be accurate or reliable</li>
        <li>Any errors in the Service will be corrected</li>
      </ul>
      <p>
        AI-generated results may vary and are not guaranteed to meet your
        expectations. We are not responsible for the quality or suitability of
        generated images for any particular purpose.
      </p>

      <h2 id="limitation-of-liability">8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
        PLUSHIFY, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR
        ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
        INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR
        OTHER INTANGIBLE LOSSES, RESULTING FROM:
      </p>
      <ul>
        <li>Your access to or use of (or inability to access or use) the Service</li>
        <li>Any conduct or content of any third party on the Service</li>
        <li>Any content obtained from the Service</li>
        <li>
          Unauthorized access, use, or alteration of your transmissions or
          content
        </li>
      </ul>
      <p>
        IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE
        PAID TO US IN THE PAST TWELVE (12) MONTHS.
      </p>

      <h2 id="indemnification">9. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Plushify and its
        affiliates from and against any claims, liabilities, damages, losses,
        and expenses arising out of or in any way connected with:
      </p>
      <ul>
        <li>Your access to or use of the Service</li>
        <li>Your violation of these Terms</li>
        <li>
          Your violation of any third-party rights, including intellectual
          property rights
        </li>
        <li>Any content you upload to the Service</li>
      </ul>

      <h2 id="termination">10. Termination</h2>
      <p>
        We may terminate or suspend your access to the Service immediately,
        without prior notice or liability, for any reason whatsoever, including
        without limitation if you breach these Terms.
      </p>
      <p>
        Upon termination, your right to use the Service will immediately cease.
        Any provisions of these Terms that by their nature should survive
        termination shall survive, including ownership provisions, warranty
        disclaimers, indemnity, and limitations of liability.
      </p>

      <h2 id="governing-law">11. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the State of California, United States, without regard to its
        conflict of law provisions.
      </p>
      <p>
        Any disputes arising from or relating to these Terms or the Service
        shall be resolved in the state or federal courts located in San
        Francisco County, California.
      </p>

      <h2 id="changes-to-terms">12. Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time. If a
        revision is material, we will provide at least 30 days&apos; notice
        prior to any new terms taking effect. What constitutes a material change
        will be determined at our sole discretion.
      </p>
      <p>
        By continuing to access or use our Service after those revisions become
        effective, you agree to be bound by the revised Terms.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <Link href="mailto:legal@plushify.com">legal@plushify.com</Link>
        </li>
        <li>
          <strong>Address:</strong> Plushify Inc., 123 Plushie Lane, San
          Francisco, CA 94102
        </li>
      </ul>
    </>
  );
}
