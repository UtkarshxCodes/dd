import React, { useState, useEffect, useRef } from "react";
import USDIcon from "../../assets/USD.png";
import GBPIcon from "../../assets/GBP.png";

const EnrollNowModal = ({ isOpen, onClose }) => {
  const [currency, setCurrency] = useState(""); // No default selection
  const stripeContainerRef = useRef(null);

  // Stripe buy button IDs for each currency
  const stripeBuyButtonIdUSD = "buy_btn_1RTN78LR5W9p8YK7WRThvFtz";
  const stripeBuyButtonIdGBP = "buy_btn_1RmeDzLR5W9p8YK749PdfDMQ";
  const publishableKey =
    "pk_live_51ROty0LR5W9p8YK78vG1oilWcp5blFSvTFZrGGisTnrRs96OfmpeI26O6cMPMcwHXSr1SeOkJlKuGHH0bBg9IMw100ibyfTgDL";

  useEffect(() => {
    if (!currency || !isOpen) return; // Only render if currency is selected and modal is open

    // Load Stripe buy button script only once
    if (!window.StripeBuyButton) {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/buy-button.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.StripeBuyButton = true;
        renderStripeButton();
      };
    } else {
      renderStripeButton();
    }

    function renderStripeButton() {
      if (stripeContainerRef.current) {
        stripeContainerRef.current.innerHTML = "";
        const stripeBtn = document.createElement("stripe-buy-button");
        stripeBtn.setAttribute(
          "buy-button-id",
          currency === "USD" ? stripeBuyButtonIdUSD : stripeBuyButtonIdGBP
        );
        stripeBtn.setAttribute("publishable-key", publishableKey);
        stripeContainerRef.current.appendChild(stripeBtn);
      }
    }
  }, [currency, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center space-y-6">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-4 text-gray-500 hover:text-gray-700 text-sm font-medium"
        >
          ← Back
        </button>

        {/* Currency Selection */}
        <h2 className="text-lg font-bold mb-2">Select Currency</h2>
        <div className="flex gap-4 mb-4">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-bold border transition ${
              currency === "USD"
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setCurrency("USD")}
          >
            <img src={USDIcon} alt="USD" className="w-6 h-6" />
            USD
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-bold border transition ${
              currency === "GBP"
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setCurrency("GBP")}
          >
            <img src={GBPIcon} alt="GBP" className="w-6 h-6" />
            GBP
          </button>
        </div>

        {/* Stripe Buy Button */}
        <div ref={stripeContainerRef} className="w-full flex justify-center"></div>
      </div>
    </div>
  );
};

export default EnrollNowModal;