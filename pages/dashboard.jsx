import React from "react";

export default function Dashboard() {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/downloads/likemelo.pdf';
    link.download = 'likemelo.pdf';
    link.click();
  };

  const downloadVideo = () => {
    const link = document.createElement('a');
    link.href = '/downloads/likemelo.mp4';
    link.download = 'likemelo.mp4';
    link.click();
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
          <source src="/downloads/likemelo.mp4" type="video/mp4" />
        </video>
        <button onClick={downloadVideo}>Download video</button>
      </div>
    </div>
  );
}
