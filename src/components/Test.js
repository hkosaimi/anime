import { motion, useTransform, useScroll, useMotionValueEvent, useAnimate } from "framer-motion";
import { useRef, useState } from "react";
import { navigate } from "react-router-dom";

function Test() {
  const [show, setShow] = useState(true);
  const title = ["I'm", "Hussain", "Al-Osaimi"];
  const xVariants = {
    hidden: {
      y: "50px",
      opacity: 0,
    },
    visible: {
      y: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
        stiffness: 100,
        staggerChildren: 0.5,
      },
    },
  };
  const exitVariants = {
    visible: {
      scale: [1, 1.1, 0],
      transition: {
        duration: 1,
      },
    },
  };

  setTimeout(() => {
    setShow(false);
  }, 5000);

  return (
    <>
      {show && (
        <>
          <motion.div
            className="temp"
            variants={show ? xVariants : exitVariants}
            animate="visible"
            initial="hidden"
            style={{ paddingTop: "200px" }}>
            {title.map((x) => (
              <motion.p variants={xVariants}>{x}</motion.p>
            ))}
          </motion.div>
          <motion.div
            variants={!show && exitVariants}
            animate="visible"
            initial="hidden"
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "10px",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "90000",
              position: "absolute",
              top: "54%",
              left: "45%",
            }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  repeat: Infinity,
                  duration: 1,
                },
              }}
              style={{
                width: "10px",
                height: "10px",
                background: "red",
                borderRadius: "50%",
              }}></motion.div>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <motion.path
                initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
                animate={{
                  pathLength: 1,
                  fill: "rgba(255, 255, 255, 1)",
                  transition: { duration: 3, repeat: Infinity },
                }}
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"
              />
            </svg>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Test;
