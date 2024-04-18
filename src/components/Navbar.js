import { motion, useTransform, useScroll, useMotionValueEvent, useAnimate } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
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
  return (
    <>
      <motion.div className="navbar" variants={xVariants} initial="hidden" animate="visible">
        <motion.p variants={xVariants}>Home</motion.p>
        <motion.p variants={xVariants}>Request</motion.p>
        <motion.p variants={xVariants}>About</motion.p>
        <motion.p variants={xVariants}>Contact</motion.p>
      </motion.div>
      <div className="res-nav">
        <GiHamburgerMenu />
      </div>
    </>
  );
}

export default Navbar;
