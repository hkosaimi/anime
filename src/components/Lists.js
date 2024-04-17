import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Lists() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  let [x, setX] = useState(0);
  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    x = latest;
    setX(x * 100);
    return x;
  });

  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      {Math.floor(x) !== 0 && <h1>{Math.floor(x)}%</h1>}

      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}

export default Lists;
