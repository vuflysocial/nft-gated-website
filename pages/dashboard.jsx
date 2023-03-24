import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div>
        <p>Download Like Melo from Google Drive:</p>
        <a href="https://drive.google.com/drive/folders/1D86x5zhlhjL0WPkguLZMGvcPmDRfY6US?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button style={{borderRadius: "5px"}}>Download from Google Drive</button>
        </a>
      </div>
      <div>
        <iframe src="https://cattree.herokuapp.com/rooms" width="300%" height="500px"></iframe>
      </div>
      <div>
        <div style={{width: "500px", maxWidth: "100%"}}>
          <div style={{height: "0", paddingBottom: "100%", position: "relative"}}>
            <iframe
              width="500"
              height="500"
              style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}
              frameBorder="0"
              src="https://imgflip.com/embed/7fociq"
            >
            </iframe>
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "10px"}}>
              <p style={{textAlign: "center", fontWeight: "bold", marginBottom: "5px"}}>Attention!</p>
              <p style={{textAlign: "center", fontSize: "14px"}}>This content may contain flashing or moving images.</p>
            </div>
          </div>
          <p><a href="https://imgflip.com/gif/7fociq">via Imgflip</a></p>
        </div>
      </div>
    </div>
  );
}
