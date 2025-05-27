import React from "react";

const PaymentOptionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center space-y-4">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Complete - Registration
        </h2>
        <p className="text-lg font-semibold text-gray-700">$199.00 USD</p>

        {/* Stripe Button */}
        <script
          async
          src="https://js.stripe.com/v3/buy-button.js"
        ></script>
        <stripe-buy-button
          buy-button-id="buy_btn_1RTMs9LR5W9p8YK7TyWDdJzN"
          publishable-key="pk_live_51ROty0LR5W9p8YK78vG1oilWcp5blFSvTFZrGGisTnrRs96OfmpeI26O6cMPMcwHXSr1SeOkJlKuGHH0bBg9IMw100ibyfTgDL"
        >
        </stripe-buy-button>
        <p className="text-sm text-black mt-1">Powered by Stripe</p>

        {/* PayPal Button */}
        <style>
          {`.pp-CEQKAAE3PSW6G {
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
          action="https://www.paypal.com/ncp/payment/CEQKAAE3PSW6G"
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
            className="pp-CEQKAAE3PSW6G"
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
      </div>
    </div>
  );
};

export default PaymentOptionsModal;