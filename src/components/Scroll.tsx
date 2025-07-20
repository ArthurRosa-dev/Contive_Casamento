import { useEffect, useState } from "react";

function Scroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 5;

      setHidden(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`scroll-indicator ${hidden ? "hidden" : ""}`}>
      <span className="arrow" />
    </div>
  );
}

export default Scroll;
