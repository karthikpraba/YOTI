import React from "react";

const HiPage = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Image on the left */}
      <img
        src="https://placekitten.com/150/150" // Replace with your image URL
        alt="Sample Image"
        style={{ maxWidth: "150px", maxHeight: "150px", marginRight: "20px" }}
      />

      {/* Content on the right */}
      <div>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default HiPage;
