import { motion, useTransform, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { useRef } from "react";

function Cards() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["1 0.5", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [1, 0], [1, 0.5]);
  const opacityProgress = useTransform(scrollYProgress, [1, 0], [1, 0.2]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const scaleSpring = useSpring(scrollYProgress, { stiffness: 400 });
  return (
    <>
      <motion.div className="card-container">
        <motion.div
          className="card"
          ref={targetRef}
          style={{
            scale: scaleSpring,
            opacity: opacityProgress,
          }}>
          Hi there, welcome to my website
        </motion.div>
      </motion.div>
    </>
  );
}

export default Cards;
