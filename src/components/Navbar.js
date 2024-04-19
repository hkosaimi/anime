import { motion, useTransform, useScroll, useMotionValueEvent, useAnimate } from "framer-motion";

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);
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
  function Navlinks() {
    return (
      <>
        <p>Home</p>
        <p>Request</p>
        <p>About</p>
        <p>Contact</p>
      </>
    );
  }

  const handleClick = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const lineVariants = {
    visible: {
      rotate: "45deg",
      y: "8px",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
    visible2: {
      rotate: "-45deg",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const navVariants = {
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    visible: {
      width: "200px",
      height: "350px",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const linksVariants = {
    hidden: {
      x: "40px",
    },
    visible: {
      x: 0,

      transition: {
        ease: "easeIn",
      },
    },
  };
  return (
    <>
      <motion.div className="navbar" variants={xVariants} initial="hidden" animate="visible">
        <Navlinks />
      </motion.div>

      <div className="res-nav" onClick={handleClick}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "5px",
            cursor: "pointer",
            paddingRight: "20px",
          }}>
          <motion.div
            className="line"
            variants={visible && lineVariants}
            animate="visible"></motion.div>
          <motion.div
            className="line"
            variants={visible && lineVariants}
            animate="visible2"></motion.div>
        </div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "7px",

            alignItems: "center",
            justifyContent: "center",
            zIndex: "90000",
            paddingLeft: "20px",
          }}>
          <p style={{ fontFamily: "Pacifico", filter: "drop-shadow(0 0 10px #000)" }}>
            Al-Osaimi Studio
          </p>
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
      </div>
      {visible && (
        <>
          <motion.div
            className="navlinks"
            variants={navVariants}
            initial="hidden"
            animate="visible">
            <Link to="/">
              <motion.p
                onClick={() => {
                  setVisible(false);
                }}
                variants={linksVariants}>
                Home
              </motion.p>
            </Link>

            <motion.p variants={linksVariants}>Request</motion.p>
            <motion.p variants={linksVariants}>About</motion.p>
            <motion.p variants={linksVariants}>Contact</motion.p>
            <Link to="/login">
              <motion.button
                variants={linksVariants}
                onClick={() => {
                  setVisible(false);
                }}>
                LOG IN
              </motion.button>
            </Link>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Navbar;
