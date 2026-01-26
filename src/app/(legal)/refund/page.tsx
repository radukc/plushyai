import Link from "next/link";
import { Metadata } from "next";
import { LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund Policy - Plushify",
  description:
    "Learn about Plushify's refund policy for credit purchases and subscriptions.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <header className="mb-8 pb-8 border-b">
        <h1 className="font-bold tracking-tight mb-2">Refund Policy</h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: {LEGAL_LAST_UPDATED}
        </p>
      </header>

      <p className="lead">
        At Plushify, we want you to be completely satisfied with your purchase.
        This Refund Policy outlines the circumstances under which we offer
        refunds and how to request one.
      </p>

      <h2 id="overview">1. Overview</h2>
      <p>
        Due to the digital nature of our service and the computational resources
        required to generate plushie transformations, our refund policy is
        designed to be fair while protecting against abuse. We handle each
        refund request on a case-by-case basis.
      </p>

      <h2 id="credit-purchases">2. Credit Purchases</h2>

      <h3>Unused Credits</h3>
      <p>
        If you have purchased credits but have not used any of them, you may be
        eligible for a full refund within 14 days of purchase. To qualify:
      </p>
      <ul>
        <li>The refund request must be made within 14 days of the purchase date</li>
        <li>No credits from the purchase have been used</li>
        <li>
          This is your first refund request (we allow one courtesy refund per
          account)
        </li>
      </ul>

      <h3>Partially Used Credits</h3>
      <p>
        If you have used some of the credits from your purchase, refunds are
        generally not available. However, we may consider partial refunds in
        exceptional circumstances, such as:
      </p>
      <ul>
        <li>Technical issues that prevented proper use of the service</li>
        <li>Billing errors or duplicate charges</li>
        <li>Service unavailability for extended periods</li>
      </ul>

      <h3>Fully Used Credits</h3>
      <p>
        Credits that have been fully consumed are not eligible for refund, as
        the service has been delivered as described.
      </p>

      <h2 id="refund-eligibility">3. Refund Eligibility</h2>
      <p>You may be eligible for a refund if:</p>
      <ul>
        <li>
          <strong>Technical Failure:</strong> Our service failed to process your
          image due to a technical error on our end, and we were unable to
          resolve the issue
        </li>
        <li>
          <strong>Duplicate Charge:</strong> You were charged multiple times for
          the same purchase
        </li>
        <li>
          <strong>Unauthorized Purchase:</strong> Someone made a purchase on
          your account without your authorization (you must report this within
          48 hours)
        </li>
        <li>
          <strong>Service Unavailability:</strong> The service was unavailable
          for more than 24 consecutive hours during your active usage period
        </li>
      </ul>

      <h2 id="non-refundable">4. Non-Refundable Situations</h2>
      <p>Refunds will not be provided in the following situations:</p>
      <ul>
        <li>
          <strong>Dissatisfaction with Results:</strong> If you are unhappy with
          the artistic output of a transformation (AI results are subjective and
          vary)
        </li>
        <li>
          <strong>User Error:</strong> Uploading incorrect images, choosing
          unintended settings, or accidental credit usage
        </li>
        <li>
          <strong>Policy Violations:</strong> Credits consumed while violating
          our <Link href="/acceptable-use">Acceptable Use Policy</Link>
        </li>
        <li>
          <strong>Expired Credits:</strong> Credits that have expired according
          to our terms (credits are valid for 12 months from purchase)
        </li>
        <li>
          <strong>Free Credits:</strong> Promotional or bonus credits cannot be
          refunded or exchanged for monetary value
        </li>
        <li>
          <strong>Multiple Refund Requests:</strong> We allow one courtesy
          refund per account
        </li>
      </ul>

      <h2 id="how-to-request">5. How to Request a Refund</h2>
      <p>To request a refund, please follow these steps:</p>
      <ol>
        <li>
          <strong>Contact Support:</strong> Send an email to{" "}
          <Link href="mailto:support@plushify.com">support@plushify.com</Link>{" "}
          with the subject line &quot;Refund Request&quot;
        </li>
        <li>
          <strong>Provide Details:</strong> Include the following information:
          <ul>
            <li>Your account email address</li>
            <li>Date of purchase</li>
            <li>Transaction ID or receipt number</li>
            <li>Reason for the refund request</li>
            <li>Any relevant screenshots or documentation</li>
          </ul>
        </li>
        <li>
          <strong>Wait for Review:</strong> Our team will review your request
          within 3-5 business days
        </li>
        <li>
          <strong>Receive Response:</strong> We will notify you of our decision
          via email
        </li>
      </ol>

      <h2 id="processing-time">6. Processing Time</h2>
      <p>Once a refund is approved:</p>
      <ul>
        <li>
          <strong>Credit Card Payments:</strong> Refunds will be processed
          within 5-10 business days. The time for the refund to appear in your
          account depends on your card issuer.
        </li>
        <li>
          <strong>PayPal:</strong> Refunds will be processed within 3-5 business
          days.
        </li>
        <li>
          <strong>Other Payment Methods:</strong> Processing times may vary. We
          will inform you of the expected timeline.
        </li>
      </ul>
      <p>
        Please note that while we process refunds promptly, the time for the
        refund to appear in your account may vary depending on your financial
        institution.
      </p>

      <h2 id="credit-adjustments">7. Credit Adjustments</h2>
      <p>
        In some cases, instead of a monetary refund, we may offer credit
        adjustments:
      </p>
      <ul>
        <li>
          <strong>Additional Credits:</strong> If a generation failed due to a
          technical issue, we will restore the credits used
        </li>
        <li>
          <strong>Bonus Credits:</strong> As a goodwill gesture for service
          issues, we may add bonus credits to your account
        </li>
      </ul>
      <p>
        Credit adjustments are applied automatically within 24 hours of approval
        and do not affect your right to request a monetary refund if eligible.
      </p>

      <h2 id="exceptions">8. Exceptions</h2>
      <p>
        We reserve the right to make exceptions to this policy on a case-by-case
        basis. Factors we may consider include:
      </p>
      <ul>
        <li>Your account history and standing</li>
        <li>The nature and severity of the issue</li>
        <li>The impact on your experience</li>
        <li>Our ability to verify the claim</li>
      </ul>

      <h2 id="disputes">9. Disputes</h2>
      <p>
        If you disagree with our refund decision, you may request a review by
        replying to our response email. A different member of our team will
        review your case. Our final decision on the review will be binding.
      </p>
      <p>
        If you initiate a chargeback or dispute with your payment provider
        before contacting us, we may be unable to provide support for your
        request, and your account may be suspended pending resolution.
      </p>

      <h2 id="contact">10. Contact</h2>
      <p>
        If you have any questions about this Refund Policy, please contact us:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <Link href="mailto:support@plushify.com">support@plushify.com</Link>
        </li>
        <li>
          <strong>Address:</strong> Plushify Inc., 123 Plushie Lane, San
          Francisco, CA 94102
        </li>
      </ul>

      <p className="mt-8 text-sm">
        This Refund Policy is part of our{" "}
        <Link href="/terms">Terms of Service</Link>. By using Plushify, you
        agree to be bound by this policy.
      </p>
    </>
  );
}
