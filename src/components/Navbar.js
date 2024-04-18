import { motion, useTransform, useScroll, useMotionValueEvent, useAnimate } from "framer-motion";

import { useState } from "react";

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
      height: "300px",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        staggerChildren: 0.2,
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
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <motion.div className="navbar" variants={xVariants} initial="hidden" animate="visible">
        <Navlinks />
      </motion.div>
      <div className="res-nav" onClick={handleClick}>
        <motion.div variants={visible && lineVariants} animate="visible"></motion.div>
        <motion.div variants={visible && lineVariants} animate="visible2"></motion.div>
      </div>
      {visible && (
        <>
          <motion.div
            className="navlinks"
            variants={navVariants}
            initial="hidden"
            animate="visible">
            <motion.p variants={linksVariants}>Home</motion.p>
            <motion.p variants={linksVariants}>Request</motion.p>
            <motion.p variants={linksVariants}>About</motion.p>
            <motion.p variants={linksVariants}>Contact</motion.p>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Navbar;
