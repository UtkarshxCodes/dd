import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnPolicyPage = () => {
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
      <h2 className="text-2xl font-bold mb-4">Return & Cancellation Policy</h2>
      <p className="text-sm text-gray-700 mb-4">Effective 2025</p>
      <p className="text-sm text-gray-700 mb-4">
        At V-EDU.us LLC, we are committed to ensuring a smooth and trustworthy
        experience for our learners. We understand that plans may change, and we
        offer a straightforward cancellation and refund process for your peace of
        mind.
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <strong>Full Refund on Course Registration:</strong> If you decide not to
        proceed with your course after registration, you are eligible for a 100%
        refund of the $199 registration amount, no questions asked.
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <strong>How to Cancel and Request a Refund:</strong> Please email us at{" "}
        <a
          href="mailto:support@v-edu.us"
          className="text-blue-600 hover:underline"
        >
          support@v-edu.us
        </a>{" "}
        with your full name, registered email address, and payment confirmation or
        reference number. Refunds will be processed to your original payment method
        within 5–7 business days after confirmation.
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <strong>Important Notes:</strong> Refund requests must be submitted before
        the course begins or before any course material is accessed. If course
        access has already been granted or live sessions attended, refund
        eligibility may be reviewed on a case-by-case basis. Any third-party
        processing fees (if applicable) may be deducted from the refunded amount.
      </p>
      <p className="text-sm text-gray-700 mb-4">
        <strong>Contact Us:</strong>
        <br />📧 Email:{" "}
        <a
          href="mailto:support@v-edu.us"
          className="text-blue-600 hover:underline"
        >
          support@v-edu.us
        </a>
        <br />📞 Phone:{" "}
        <a
          href="tel:+18883444990"
          className="text-blue-600 hover:underline"
        >
          +1 (888) 344-4990
        </a>
        <br />🏢 Address: 1908 Thomes Ave STE 12363, Cheyenne, WY 82001
      </p>
    </div>
  );
};

export default ReturnPolicyPage;