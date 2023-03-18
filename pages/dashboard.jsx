import React from "react";

export default function Dashboard() {
  const buttonStyle = {
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
    margin: "4px 2px",
    cursor: "pointer"
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div>
        <p>Download the PDF manual:</p>
        <a href="/downloads/likemelo.pdf" download="likemelo.pdf" style={buttonStyle}>
          Download PDF
        </a>
      </div>
      <div>
        <p>Like Melo:</p>
        <video width="320" height="240" controls>
          <source src="/downloads/likemelo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

