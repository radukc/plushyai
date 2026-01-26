import Link from "next/link";
import { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy - Plushify",
  description:
    "Learn how Plushify collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="mb-8 pb-8 border-b">
        <h1 className="font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: {LEGAL_LAST_UPDATED}
        </p>
      </header>

      <p className="lead">
        At Plushify, we take your privacy seriously. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you use our service.
      </p>

      <h2 id="information-we-collect">1. Information We Collect</h2>

      <h3>Personal Information</h3>
      <p>We may collect personal information that you voluntarily provide when:</p>
      <ul>
        <li>Creating an account (name, email address)</li>
        <li>Making a purchase (payment information)</li>
        <li>Contacting our support team</li>
        <li>Subscribing to our newsletter</li>
      </ul>

      <h3>Images and Content</h3>
      <p>
        When you use our plushification service, we temporarily process the
        images you upload. These images are used solely for generating your
        plushie transformations and are handled according to our data retention
        policies outlined below.
      </p>

      <h3>Automatically Collected Information</h3>
      <p>We automatically collect certain information when you visit our site:</p>
      <ul>
        <li>Device and browser information</li>
        <li>IP address</li>
        <li>Usage data and analytics</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>

      <h2 id="how-we-use-information">2. How We Use Your Information</h2>
      <p>We use the collected information for various purposes:</p>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To process your image transformations</li>
        <li>To process payments and manage your account</li>
        <li>To send you updates, marketing, and promotional materials</li>
        <li>To respond to your inquiries and provide customer support</li>
        <li>To improve our service and develop new features</li>
        <li>To detect, prevent, and address technical issues</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 id="information-sharing">3. Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information in the following circumstances:
      </p>

      <h3>Service Providers</h3>
      <p>
        We may share your information with third-party service providers who
        perform services on our behalf, such as payment processing, data
        analysis, email delivery, hosting services, and customer service.
      </p>

      <h3>Legal Requirements</h3>
      <p>
        We may disclose your information if required to do so by law or in
        response to valid requests by public authorities.
      </p>

      <h3>Business Transfers</h3>
      <p>
        In the event of a merger, acquisition, or sale of assets, your personal
        information may be transferred as part of that transaction.
      </p>

      <h2 id="data-security">4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational security measures
        to protect your personal information against unauthorized access,
        alteration, disclosure, or destruction. These measures include:
      </p>
      <ul>
        <li>Encryption of data in transit and at rest</li>
        <li>Regular security assessments</li>
        <li>Access controls and authentication</li>
        <li>Secure data storage practices</li>
      </ul>
      <p>
        However, no method of transmission over the Internet or electronic
        storage is 100% secure. While we strive to protect your personal
        information, we cannot guarantee its absolute security.
      </p>

      <h2 id="your-rights">5. Your Rights</h2>
      <p>
        Depending on your location, you may have certain rights regarding your
        personal information:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> Request a copy of the personal information we
          hold about you
        </li>
        <li>
          <strong>Correction:</strong> Request correction of inaccurate or
          incomplete information
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your personal
          information
        </li>
        <li>
          <strong>Portability:</strong> Request a copy of your data in a
          portable format
        </li>
        <li>
          <strong>Objection:</strong> Object to certain processing of your
          information
        </li>
        <li>
          <strong>Withdrawal:</strong> Withdraw consent where processing is
          based on consent
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at{" "}
        <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link>.
      </p>

      <h2 id="cookies">6. Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on
        our service and hold certain information. You can instruct your browser
        to refuse all cookies or to indicate when a cookie is being sent.
      </p>
      <p>
        For more information about the cookies we use, please see our{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2 id="childrens-privacy">7. Children&apos;s Privacy</h2>
      <p>
        Our service is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under 13. If you
        are a parent or guardian and you are aware that your child has provided
        us with personal information, please contact us.
      </p>

      <h2 id="data-retention">8. Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy:
      </p>
      <ul>
        <li>
          <strong>Account information:</strong> Retained while your account is
          active and for a reasonable period afterward
        </li>
        <li>
          <strong>Uploaded images:</strong> Processed images are temporarily
          stored for up to 30 days and then automatically deleted
        </li>
        <li>
          <strong>Generated plushies:</strong> Stored in your gallery until you
          delete them or close your account
        </li>
        <li>
          <strong>Transaction records:</strong> Retained as required by
          applicable financial regulations
        </li>
      </ul>

      <h2 id="international-transfers">9. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other
        than your own. We ensure appropriate safeguards are in place to protect
        your information in accordance with this Privacy Policy.
      </p>

      <h2 id="changes-to-policy">10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the &quot;Last Updated&quot; date. You are advised to review
        this Privacy Policy periodically for any changes.
      </p>

      <h2 id="contact-us">11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our privacy
        practices, please contact us:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <Link href="mailto:privacy@plushify.com">privacy@plushify.com</Link>
        </li>
        <li>
          <strong>Address:</strong> Plushify Inc., 123 Plushie Lane, San
          Francisco, CA 94102
        </li>
      </ul>

      <p className="mt-8 text-sm">
        For California residents, please see our <Link href="/ccpa">CCPA Notice</Link>.
        For EU residents, please see our <Link href="/gdpr">GDPR Information</Link>.
      </p>
    </>
  );
}
