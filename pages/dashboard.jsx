import React from "react";

export default function Dashboard() {
  const buttonStyle = {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    textDecoration: "none",
    display: "inline-block",
    margin: "0.5rem 0",
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div>
        <a href="/downloads/likemelo.pdf" download="likemelo.pdf" style={buttonStyle}>
  Download PDF
</a>

      </div>
      <div>
        <p>Like Melo:</p>
        <video width="320" height="240" controls>
          <source src="/downloads/likemelo.mp4" type="video/mp4" />
            <a href="/downloads/likemelo.mp4" download="likemelo.mp4" style={buttonStyle}>
  Download Video
</a>

        </video>
      </div>
    </div>
  );
}

