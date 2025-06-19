import React from "react";

const EnrollNowModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center space-y-6">
        {/* Back Button */}
        <button
          onClick={onClose} // Close the modal
          className="absolute top-3 left-4 text-gray-500 hover:text-gray-700 text-sm font-medium"
        >
          ← Back
        </button>

        {/* Stripe Buy Button */}
        <script
          async
          src="https://js.stripe.com/v3/buy-button.js"
        ></script>
        <stripe-buy-button
          buy-button-id="buy_btn_1RTN78LR5W9p8YK7WRThvFtz"
          publishable-key="pk_live_51ROty0LR5W9p8YK78vG1oilWcp5blFSvTFZrGGisTnrRs96OfmpeI26O6cMPMcwHXSr1SeOkJlKuGHH0bBg9IMw100ibyfTgDL"
        >
        </stripe-buy-button>

        {/* "or" Text */}
        <p className="text-black font-bold"></p>

        {/* PayPal Button - Commented Out */}
        {/*
        <style>
          {`.pp-VEAG2FR87HNKE {
            text-align: center;
            border: none;
            border-radius: 0.25rem;
            min-width: 11.625rem;
            padding: 0 2rem;
            height: 2.625rem;
            font-weight: bold;
            background-color: #FFD140;
            color: #000000;
            font-family: "Helvetica Neue", Arial, sans-serif;
            font-size: 1rem;
            line-height: 1.25rem;
            cursor: pointer;
          }`}
        </style>
        <form
          action="https://www.paypal.com/ncp/payment/VEAG2FR87HNKE"
          method="post"
          target="_blank"
          style={{
            display: "inline-grid",
            justifyItems: "center",
            alignContent: "start",
            gap: "0.5rem",
          }}
        >
          <input
            className="pp-VEAG2FR87HNKE"
            type="submit"
            value="Pay Now"
          />
          <img
            src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
            alt="cards"
          />
          <section style={{ fontSize: "0.75rem" }}>
            Powered by{" "}
            <img
              src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
              alt="paypal"
              style={{
                height: "0.875rem",
                verticalAlign: "middle",
              }}
            />
          </section>
        </form>
        */}
      </div>
    </div>
  );
};

export default EnrollNowModal;