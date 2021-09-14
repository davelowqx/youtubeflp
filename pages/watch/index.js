import { useRouter } from "next/router";

export default function Watch() {
  const router = useRouter();
  const { v } = router.query;
  return (
    <div className="container">
      <div>
        <iframe
          className="invertedX"
          src={`https://www.youtube.com/embed/${v}`}
        ></iframe>
      </div>
    </div>
  );
}
