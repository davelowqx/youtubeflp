import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setError(false);
    setInput(e.target.value.trim());
  };

  const parseUrl = () => {
    let res;
    if (
      (res = input.match(
        /^https:\/\/youtu\.be\/([a-zA-Z0-9\-\_]{11})([?].*)?$/
      ))
    ) {
      router.push(`/watch?v=${res[1]}`);
    } else if (
      (res = input.match(
        /^(?:(?:https?:\/\/)?www\.)?(?:youtube\.com\/watch\?v=)([a-zA-Z0-9\-\_]{11})([\/\&].*)?$/
      ))
    ) {
      router.push(`/watch?v=${res[1]}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className="m-3">
      <h1>Horizontally flip YouTube videos</h1>
      <p>
        Simply change the url from <b>youtube</b> to <b>youtubeflp</b>!
      </p>
      <div className="d-flex">
        <input
          className={`w-100 ${error ? "border-red" : ""}`}
          type="text"
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          value={input}
          onChange={handleChange}
        />
        <button
          className="bg-gray-dark"
          onClick={() => navigator.clipboard.readText().then(setInput)}
        >
          📋
        </button>
        <button
          className="bg-green round-border-right"
          type="submit"
          onClick={() => parseUrl()}
        >
          GO
        </button>
      </div>
    </div>
  );
}
