import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
const xVariants = {
  hidden: {
    y: "50px",
  },
  visible: {
    y: "0",
    transition: {
      duration: 1,
      type: "spring",
      staggerChildren: 0.2,
    },
  },
};

function Footer() {
  return (
    <>
      <div className="footer">
        <h1>Hussain Al-Osaimi Studio</h1>
        <motion.div
          style={{ display: "flex", columnGap: "20px" }}
          variants={xVariants}
          initial="hidden"
          whileInView="visible">
          <div>
            <FaInstagram className="insta" />
          </div>

          <div>
            <BsTwitterX className="insta" />
          </div>
          <div>
            <FaWhatsapp className="insta" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
