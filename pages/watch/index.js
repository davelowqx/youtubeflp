import { useRouter } from "next/router";
import React from "react";

export default function Watch() {
  const router = useRouter();
  const { v } = router.query;
  const [inverted, setInverted] = React.useState(true);
  React.useEffect(() => {
    document?.addEventListener("keydown", (event) => {
      if (event.repeat) {
        return;
      }
      if (event.code === "KeyF") {
        console.log("keydown");
        setInverted(!inverted);
      }
    });
  }, []);
  return (
    <div className="container">
      <div>
        <iframe
          className={inverted ? "invertedX" : ""}
          src={`https://www.youtube.com/embed/${v}?autoplay=1&fs=0&loop=1`}
        ></iframe>
      </div>
      <div className="popup">
        <button onClick={() => setInverted(!inverted)}>FLIP</button>
      </div>
    </div>
  );
}
