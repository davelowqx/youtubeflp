import { useRouter } from "next/router";
import React from "react";

export default function Watch() {
  const router = useRouter();
  const { v } = router.query;
  const [inverted, setInverted] = React.useState(true);
  const toggleInvert = () => setInverted(!inverted);

  React.useEffect(() => {
    /*
    document
      .getElementById("iframe")
      .contentWindow.body.addEventListener("keydown", (event) => {
        if (event.repeat) {
          return;
        }
        if (event.code === "KeyF") {
          console.log("keydown");
          toggleInvert();
        }
      });
      */
  }, []);
  return (
    <div className="container">
      <iframe
        id="iframe"
        onClick={toggleInvert}
        className={inverted ? "invertedX" : ""}
        src={`https://www.youtube.com/embed/${v}?autoplay=1&fs=0&loop=1`}
      ></iframe>
      <div className="overlay">
        <button onClick={toggleInvert}>{inverted ? "FLOP" : "FLIP"}</button>
      </div>
    </div>
  );
}
