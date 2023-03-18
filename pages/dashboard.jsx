import React from "react";

export default function Dashboard() {
  const downloadPDF = () => {
    window.open("./downloads/likemelo.pdf");
  };

  const downloadVideo = () => {
    window.open("./downloads/likemelo.mp4");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div>
        <p>Download the PDF manual:</p>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
      <div>
        <p>Like Melo:</p>
        <video width="320" height="240" controls>
          <source src="./downloads/likemelo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
