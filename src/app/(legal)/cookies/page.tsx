import Link from "next/link";
import { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy - Plushify",
  description:
    "Learn about how Plushify uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <header className="mb-8 pb-8 border-b">
        <h1 className="font-bold tracking-tight mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: {LEGAL_LAST_UPDATED}
        </p>
      </header>

      <p className="lead">
        This Cookie Policy explains how Plushify (&quot;we&quot;, &quot;us&quot;,
        or &quot;our&quot;) uses cookies and similar technologies when you visit
        our website or use our services.
      </p>

      <h2 id="what-are-cookies">1. What Are Cookies</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile
        device when you visit a website. They are widely used to make websites
        work more efficiently, provide information to the website owners, and
        enhance user experience.
      </p>
      <p>
        Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
        Persistent cookies remain on your device when you go offline, while
        session cookies are deleted as soon as you close your web browser.
      </p>

      <h2 id="types-of-cookies">2. Types of Cookies We Use</h2>
      <p>We use the following categories of cookies on our website:</p>

      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function properly. They
        enable core functionality such as security, account authentication, and
        session management. Without these cookies, services you have requested
        cannot be provided.
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left pb-2">Cookie Name</th>
            <th className="text-left pb-2">Purpose</th>
            <th className="text-left pb-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 pr-4">session_id</td>
            <td className="py-2 pr-4">User authentication and session management</td>
            <td className="py-2">Session</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">csrf_token</td>
            <td className="py-2 pr-4">Security protection against cross-site attacks</td>
            <td className="py-2">Session</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">cookie_consent</td>
            <td className="py-2 pr-4">Stores your cookie consent preferences</td>
            <td className="py-2">1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>Functional Cookies</h3>
      <p>
        These cookies enable enhanced functionality and personalization, such as
        remembering your preferences (like dark mode) and providing improved
        features.
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left pb-2">Cookie Name</th>
            <th className="text-left pb-2">Purpose</th>
            <th className="text-left pb-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 pr-4">theme</td>
            <td className="py-2 pr-4">Remembers your light/dark mode preference</td>
            <td className="py-2">1 year</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">language</td>
            <td className="py-2 pr-4">Stores your language preference</td>
            <td className="py-2">1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website
        by collecting and reporting information anonymously. This helps us
        improve our website and services.
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left pb-2">Cookie Name</th>
            <th className="text-left pb-2">Purpose</th>
            <th className="text-left pb-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 pr-4">_ga</td>
            <td className="py-2 pr-4">Google Analytics - distinguishes users</td>
            <td className="py-2">2 years</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">_gid</td>
            <td className="py-2 pr-4">Google Analytics - distinguishes users</td>
            <td className="py-2">24 hours</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">_gat</td>
            <td className="py-2 pr-4">Google Analytics - throttles request rate</td>
            <td className="py-2">1 minute</td>
          </tr>
        </tbody>
      </table>

      <h3>Marketing Cookies</h3>
      <p>
        These cookies are used to track visitors across websites. The intention
        is to display ads that are relevant and engaging for the individual
        user.
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left pb-2">Cookie Name</th>
            <th className="text-left pb-2">Purpose</th>
            <th className="text-left pb-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 pr-4">_fbp</td>
            <td className="py-2 pr-4">Facebook Pixel - ad targeting</td>
            <td className="py-2">3 months</td>
          </tr>
        </tbody>
      </table>

      <h2 id="how-to-control-cookies">3. How to Control Cookies</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You
        can exercise your cookie preferences in the following ways:
      </p>

      <h3>Cookie Consent Banner</h3>
      <p>
        When you first visit our website, you will see a cookie consent banner
        that allows you to accept or customize your cookie preferences.
      </p>

      <h3>Browser Settings</h3>
      <p>
        Most web browsers allow you to control cookies through their settings.
        You can typically find these settings in your browser&apos;s
        &quot;Options&quot; or &quot;Preferences&quot; menu. Here are links to
        cookie settings for common browsers:
      </p>
      <ul>
        <li>
          <Link
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </Link>
        </li>
        <li>
          <Link
            href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </Link>
        </li>
        <li>
          <Link
            href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </Link>
        </li>
        <li>
          <Link
            href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </Link>
        </li>
      </ul>

      <h3>Opt-Out Links</h3>
      <p>You can opt out of certain third-party cookies directly:</p>
      <ul>
        <li>
          <Link
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-Out
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/help/568137493302217"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Ad Preferences
          </Link>
        </li>
      </ul>

      <p>
        Please note that if you choose to disable cookies, some parts of our
        website may not function properly.
      </p>

      <h2 id="third-party-cookies">4. Third-Party Cookies</h2>
      <p>
        In addition to our own cookies, we may also use various third-party
        cookies to report usage statistics of the Service, deliver advertisements
        on and through the Service, and so on. These third parties may collect
        information about your online activities over time and across different
        websites.
      </p>
      <p>Third-party services we use that may set cookies include:</p>
      <ul>
        <li>
          <strong>Google Analytics:</strong> Web analytics service
        </li>
        <li>
          <strong>Stripe:</strong> Payment processing
        </li>
        <li>
          <strong>Facebook:</strong> Social media integration and advertising
        </li>
      </ul>

      <h2 id="similar-technologies">5. Similar Technologies</h2>
      <p>In addition to cookies, we may use other similar technologies:</p>

      <h3>Local Storage</h3>
      <p>
        We use local storage to store preferences and cache data for better
        performance. Local storage is similar to cookies but allows for more
        data to be stored.
      </p>

      <h3>Pixel Tags</h3>
      <p>
        We may use pixel tags (also called web beacons or clear GIFs) to track
        user activities and measure the effectiveness of our marketing
        campaigns.
      </p>

      <h2 id="do-not-track">6. Do Not Track</h2>
      <p>
        Some browsers include a Do Not Track (DNT) feature that signals to
        websites that you do not want to be tracked. Since there is no accepted
        standard for how to respond to DNT signals, we do not currently respond
        to them. Instead, we provide you with the choices described in this
        policy to manage your privacy preferences.
      </p>

      <h2 id="updates-to-policy">7. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        technology, regulation, or our business practices. When we make changes,
        we will update the &quot;Last Updated&quot; date at the top of this
        policy. We encourage you to review this policy periodically.
      </p>

      <h2 id="contact-us">8. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or this Cookie
        Policy, please contact us:
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
        For more information about how we handle your personal data, please see
        our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </>
  );
}
