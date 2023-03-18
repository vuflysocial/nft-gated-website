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
    </div>
  );
}
