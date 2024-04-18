import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import Footer from "./Footer";

function Image({ title, id }) {
  return (
    <>
      <motion.div className="gallary" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <img src={id} />
        <h1>{title}</h1>
      </motion.div>
    </>
  );
}
function Home() {
  return (
    <>
      <div className="home">
        <div className="img-container">
          <Image title="" id={img4} />
          <Image title="" id={img2} />
          <Image title="" id={img3} />
          <Image title="" id={img5} />
          <Image title="" id={img6} />
          <Image title="" id={img7} />
          <Image title="" id={img8} />
        </div>
      </div>
    </>
  );
}

export default Home;
