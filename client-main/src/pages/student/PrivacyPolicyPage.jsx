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
      <p className="text-sm text-gray-700 mb-2">Effective 2025</p>
      <p className="text-sm text-gray-700 mb-6">V-EDU.us LLC</p>

      <p className="text-base text-gray-800 mb-4">
        At <strong>V-EDU.us LLC</strong> (“V-EDU”, “we”, “our”, or “us”), your
        privacy matters. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your personal information when you use our
        services or visit our website at{" "}
        <a
          href="https://v-edu.us"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://v-edu.us
        </a>
        .
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Information We Collect
      </h3>
      <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
        <li>
          <strong>Identity Data</strong> – Full name, email address, phone number,
          mailing address
        </li>
        <li>
          <strong>Enrollment Data</strong> – Courses registered, learning
          progress, and payment history
        </li>
        <li>
          <strong>Technical Data</strong> – IP address, browser type, device
          identifiers, access timestamps
        </li>
        <li>
          <strong>Communication Data</strong> – Emails, messages, support chats,
          and feedback
        </li>
        <li>
          <strong>Usage Data</strong> – Interactions with our LMS, website
          features, and digital resources
        </li>
        <li>
          <strong>Payment Data</strong> – UPI or bank details used for course
          transactions (securely processed)
        </li>
      </ul>
      <p className="text-base text-gray-800 mb-4">
        We collect this information via registration forms, usage of our LMS,
        cookies, support inquiries, and integrations with third-party tools such
        as Zoom, Stripe, and PayPal.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        How We Use Your Information
      </h3>
      <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
        <li>
          Granting you access to enrolled courses and managing your learning
          experience
        </li>
        <li>Processing payments and delivering receipts or certificates</li>
        <li>Sending updates, class reminders, or service notifications</li>
        <li>
          Improving our course content, support efficiency, and platform
          functionality
        </li>
        <li>Complying with legal, tax, and regulatory requirements</li>
        <li>
          Responding to mentor queries, feedback, or learner support cases
        </li>
      </ul>
      <p className="text-base text-gray-800 mb-4">
        <strong>
          We do not sell, rent, or disclose your personal data to advertisers.
        </strong>
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

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Cookies and Tracking Technologies
      </h3>
      <p className="text-base text-gray-800 mb-4">
        We use cookies and similar technologies (e.g., Google Analytics) to
        analyze usage trends and optimize user experience. These cookies do not
        contain personally identifiable information. You may disable cookies via
        your browser settings, though some features may be affected.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Data Security & Retention</h3>
      <p className="text-base text-gray-800 mb-4">
        Your data is retained only as long as necessary to serve its intended
        purpose, or as required by law. We implement physical, technical, and
        administrative safeguards to prevent unauthorized access, misuse, or
        disclosure of your personal data.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Disclosure to Third Parties
      </h3>
      <p className="text-base text-gray-800 mb-4">
        Information may be shared with trusted third-party service providers
        solely for business functions (e.g., LMS hosting, secure payments).
        These vendors are contractually bound to confidentiality and data
        protection standards. We may also disclose information if required by law
        or court order.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Children’s Privacy</h3>
      <p className="text-base text-gray-800 mb-4">
        Our platform is not intended for individuals under 13 years of age. We do
        not knowingly collect data from children. If such data is discovered, it
        will be deleted promptly.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Your Rights</h3>
      <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
        <li>Access or correct your personal data</li>
        <li>Request deletion of your data (if legally permitted)</li>
        <li>Withdraw previously given consent</li>
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
        We may revise this policy from time to time. Any changes will be
        published on this page, and the “Effective” date at the top will reflect
        the latest version. Please check back periodically for updates.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Contact Information</h3>
      <p className="text-base text-gray-800 mb-2">
        If you have questions about this Privacy Policy or your data, please
        reach out:
      </p>
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
        <li>🏢 Entity: V-EDU.us LLC</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;