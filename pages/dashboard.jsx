import React from "react";

export default function Dashboard() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "likemelo.pdf";
    link.download = "likemelo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadVideo = () => {
    const link = document.createElement("a");
    link.href = "likemelo.mp4";
    link.download = "likemelo.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonStyle = {
    borderRadius: "10px",
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    margin: "10px"
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div>
        <p>Download the PDF:</p>
        <button onClick={downloadPDF} style={buttonStyle}>Download PDF</button>
      </div>
      <div>
        <p>Like Melo:</p>
        <video width="320" height="240" controls>
          <source src="likemelo.mp4" type="video/mp4" />
        </video>
        <button onClick={downloadVideo} style={buttonStyle}>Download Video</button>
      </div>
    </div>
  );
}

