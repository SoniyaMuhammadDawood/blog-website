import React from "react";

const TextAnimation: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#262626",
        backgroundImage:
          "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
        backgroundSize: "4vh 4vh",
        fontFamily: "monospace",
      }}
    >
      <h2
        style={{
          display: "inline-block",
          fontSize: "4em",
          color: "#fff",
          fontWeight: 600,
          padding: "0 100px",
        }}
      >
        <span
          style={{
            marginRight: "10rem", // Adding margin-left to "I'm"
          }}
        >
          I&apos;m&nbsp;
        </span>
        {[
          { text: "Coder.", index: 0 },
          { text: "Software engineer.", index: 1 },
          { text: "UI/UX Designer.", index: 2 },
          { text: "Creator.", index: 3 },
          { text: "Team Leader.", index: 4 },
          { text: "Innovator.", index: 5 },
        ].map(({ text, index }) => (
          <span
            key={index}
            style={{
              position: "relative",
              color: "transparent",
              WebkitTextStroke: "1px #01fe87",
              lineHeight: "1.2em",
              padding: "5px 10px",
              animation: `displayText 18s infinite`,
              animationDelay: `${-3 * index}s`,
            }}
            data-text={text}
          >
            {text}
            <span
              style={{
                content: `attr(data-text)`,
                position: "absolute",
                top: "-2px",
                left: "-2px",
                width: "0",
                height: "100%",
                color: "#01fe87",
                overflow: "hidden",
                whiteSpace: "nowrap",
                border: "2px solid #01fe87",
                boxSizing: "border-box",
                borderRadius: "10px",
                padding: "5px 10px",
                animation: "animate 3s linear infinite",
                filter: "drop-shadow(0 0 5px #01fe87) drop-shadow(0 0 25px #01fe87)",
              }}
            ></span>
          </span>
        ))}
      </h2>
      <style>{`
        @keyframes displayText {
          0%, 16.66% {
            display: inline-block;
          }
          16.67%, 100% {
            display: none;
          }
        }
        @keyframes animate {
          0%, 10%, 100% {
            width: 0;
          }
          70%, 90% {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2em;
            padding: 0 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default TextAnimation;
