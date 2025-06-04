import React from "react";

const SheryIframe = () => {
  return (
    <div
      style={{
        position: "relative", // Ensure it stays within its section
        width: "100vw", // Full width of the viewport
        height: "100vh", // Full height of the viewport
        margin: 0,
        padding: 0,
        border: "none",
        overflow: "hidden",
      }}
    >
      <iframe
        src="/shery.html"
        title="Shery Visual Section"
        style={{
          position: "absolute", // Ensure it fills the parent container
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
      />
    </div>
  );
};

export default SheryIframe;