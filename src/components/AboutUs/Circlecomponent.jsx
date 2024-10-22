import React from "react";

// Define the component
const AffiliateBanner = ({ bannerText, imageSrc }) => {
  return (
    <div style={styles.container}>
      <div style={styles.circle}>
        {imageSrc && <img src={imageSrc} alt={bannerText} style={styles.image} />}
      </div>
      <div style={styles.textContainer}>
        <p style={styles.text}>{bannerText}</p>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Set flex direction to column
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #33b38a, #304785)",
    borderRadius: "10px",
    padding: "20px",
    position: "relative",
    width: "400px",
    height: "200px",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
  },
  circle: {
    position: "absolute",
    top: "-30px",
    right: "50px",
    width: "80px",
    height: "80px",
    backgroundColor: "#2d3478",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center", // Center the image vertically
    justifyContent: "center", // Center the image horizontally
    overflow: "hidden", // Ensure the image doesn't overflow the circle
  },
  image: {
    width: "60%", // Image fills the circle
    height: "60%", // Image fills the circle
    objectFit: "contain", // Maintain aspect ratio and cover the circle
  },
};

export default AffiliateBanner;
