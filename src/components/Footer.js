import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
const xVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    y: "50px",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
};
function Footer() {
  return (
    <>
      <div className="footer">
        <h1> Al-Osaimi Studio</h1>
        <motion.div
          style={{ display: "flex", columnGap: "20px" }}
          variants={xVariants}
          initial="hidden"
          whileInView="visible">
          <motion.div variants={item}>
            <FaInstagram className="insta" />
          </motion.div>

          <motion.div variants={item}>
            <BsTwitterX className="insta" />
          </motion.div>
          <motion.div variants={item}>
            <FaWhatsapp className="insta" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
