import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20 bg-white rounded-lg shadow-lg relative">
      {/* Cross Button */}
      <button
        className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500 font-bold"
        onClick={() => {
          navigate("/#footer");
          setTimeout(() => {
            const footer = document.getElementById("footer");
            if (footer) {
              footer.scrollIntoView({ behavior: "smooth" });
            }
          }, 200);
        }}
        aria-label="Close"
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <p className="text-sm text-gray-700 mb-2">Effective: 2025</p>
      <p className="text-sm text-gray-700 mb-6">Entity: V-EDU us LLC</p>

      <p className="text-base text-gray-800 mb-4">
        At <strong>V-EDU us LLC</strong> (“V-EDU”, “we”, “our”, or “us”), your
        privacy is of utmost importance. This Privacy Policy outlines how we
        collect, use, and safeguard your personal data when you access our
        services via{" "}
        <a
          href="https://v-edu.us"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://v-edu.us
        </a>{" "}
        or our associated platforms.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        📵 Mobile & SMS Data Privacy Statement
      </h3>
      <p className="text-base text-gray-800 mb-4">
        No mobile information will be shared with third parties/affiliates for
        marketing/promotional purposes. All other categories exclude text
        messaging originator opt-in data and consent; this information will not
        be shared with any third parties.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">What Information We Collect</h3>
      <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
        <li><strong>Identity Data:</strong> Name, email address, phone number, and mailing address</li>
        <li><strong>Enrollment Data:</strong> Courses enrolled, progress status, and transaction history</li>
        <li><strong>Technical Data:</strong> IP address, browser/device information, login times</li>
        <li><strong>Communication Data:</strong> Messages, feedback, queries, and support conversations</li>
        <li><strong>Usage Data:</strong> Interactions with our LMS, website, and learning resources</li>
        <li><strong>Payment Data:</strong> Paypal / Stripe information for transaction completion (securely handled)</li>
      </ul>
      <p className="text-base text-gray-800 mb-4">
        We collect this data through forms, cookies, email communications, LMS
        usage, and integrations with trusted third parties (e.g., Zoom, Stripe,
        PayPal).
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">How We Use Your Information</h3>
      <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
        <li>Granting access to learning materials and managing enrollments</li>
        <li>Processing secure payments and issuing receipts/certifications</li>
        <li>Sending essential updates, course reminders, and notifications</li>
        <li>Enhancing website functionality and learner experience</li>
        <li>Meeting legal and regulatory requirements</li>
        <li>Responding to queries, mentor interactions, and support tickets</li>
      </ul>
      <p className="text-base text-gray-800 mb-4">
        <strong>We do not sell, rent, or distribute your data for advertising purposes.</strong>
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">📵 Mobile & SMS Data Privacy (Reiterated for Emphasis)</h3>
      <p className="text-base text-gray-800 mb-4">
        V-EDU.us LLC does not share mobile numbers with any third parties or
        affiliates for promotional or marketing purposes. Text messaging originator
        opt-in data and consent are excluded from all data sharing categories.
        <br />
        SMS communications are used strictly for operational messages such as:
      </p>
      <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
        <li>Class reminders</li>
        <li>Login authentication</li>
        <li>Emergency notifications</li>
      </ul>
      <p className="text-base text-gray-800 mb-4">
        Users may opt out of SMS communications at any time by replying “STOP”.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Cookies & Tracking</h3>
      <p className="text-base text-gray-800 mb-4">
        We use cookies and analytics tools (such as Google Analytics) to improve
        our platform. These help us understand usage patterns and maintain
        security. You may disable cookies via your browser settings; doing so may
        affect site functionality.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Data Security & Retention</h3>
      <p className="text-base text-gray-800 mb-4">
        We retain your information only for as long as necessary to fulfill its
        purpose or comply with applicable laws.
        Robust technical and organizational safeguards are in place to prevent
        unauthorized access or misuse.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Disclosure to Third Parties
      </h3>
      <p className="text-base text-gray-800 mb-4">
        We only share limited personal data with verified service providers
        (e.g., hosting, payment gateways, video tools) strictly to deliver core
        services. These partners are contractually obligated to maintain
        confidentiality and comply with our privacy standards.
        Disclosure to legal or government bodies may occur if required by law.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Children’s Privacy</h3>
      <p className="text-base text-gray-800 mb-4">
        Our platform is not intended for users under 13. We do not knowingly
        collect personal data from children. If identified, such data will be
        promptly deleted.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Your Rights</h3>
      <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
        <li>Access, review, or correct your data</li>
        <li>Request deletion (subject to legal limitations)</li>
        <li>Withdraw previously granted consent</li>
        <li>Opt out of non-essential communications</li>
      </ul>
      <p className="text-base text-gray-800 mb-4">
        To exercise your rights, contact us at{" "}
        <a
          href="mailto:support@v-edu.us"
          className="text-blue-600 hover:underline"
        >
          support@v-edu.us
        </a>
        .
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Policy Updates</h3>
      <p className="text-base text-gray-800 mb-4">
        We may update this Privacy Policy from time to time. Any revisions will
        be posted on this page with a new “Effective” date. Continued use of our
        services implies acceptance of the updated policy.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Contact</h3>
      <p className="text-base text-gray-800 mb-2">V-EDU us LLC</p>
      <ul className="list-none pl-0 text-gray-800 mb-2">
        <li>
          📧 Email:{" "}
          <a
            href="mailto:support@v-edu.us"
            className="text-blue-600 hover:underline"
          >
            support@v-edu.us
          </a>
        </li>
        <li>
          🌐 Website:{" "}
          <a
            href="https://v-edu.us"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://v-edu.us
          </a>
        </li>
        <li>🏢 Registered U.S. Entity</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;