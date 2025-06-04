
import React from "react";

const Shery = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/shery.html"
        title="Shery Section"
        width="100%"
        height="100%"
        style={{ border: "none", display: "block" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Shery;

