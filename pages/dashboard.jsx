import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div>
        <p>Download Lik Melo from Google Drive:</p>
        <a href="https://drive.google.com/drive/folders/1D86x5zhlhjL0WPkguLZMGvcPmDRfY6US?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button style={{borderRadius: "5px"}}>Download from Google Drive</button>
        </a>
      </div>
      <div style={{margin: "20px 0"}}>
        <h2>Video 1</h2>
        <div style={{height: 0, paddingBottom: "56.25%", position: "relative", width: "100%"}}>
          <iframe
            allow="autoplay; gyroscope;"
            allowFullScreen
            height="100%"
            referrerPolicy="strict-origin"
            src="https://www.kapwing.com/e/6415a7679383e00017cf4425?autoplay=true"
            style={{border: 0, height: "100%", left: 0, overflow: "hidden", position: "absolute", top: 0, width: "100%"}}
            title="Embedded content made on Kapwing"
            width="100%">
          </iframe>
        </div>
        <p style={{fontSize: "12px", textAlign: "right"}}>Video edited on <a href="https://www.kapwing.com/video-editor">Kapwing</a></p>
      </div>
      <div style={{margin: "20px 0"}}>
        <h2>Video 2</h2>
        <div style={{height: "450.00px", width: "300.00px", position: "relative"}}>
          <iframe
            allow="autoplay; gyroscope;"
            allowFullScreen
            height="100%"
            referrerPolicy="strict-origin"
            src="https://www.kapwing.com/e/6415a856d5600e040aacea96?autoplay=true"
            style={{border: 0, height: "100%", left: 0, overflow: "hidden", position: "absolute", top: 0, width: "100%"}}
            title="Embedded content made on Kapwing"
            width="100%">
          </iframe>
        </div>
        <p style={{fontSize: "12px", textAlign: "right"}}>Video edited on <a href="https://www.kapwing.com/video-editor">Kapwing</a></p>
      </div>
    </div>
  );
}
