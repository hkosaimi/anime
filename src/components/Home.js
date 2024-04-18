import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

function Image({ title, id }) {
  return (
    <>
      <motion.div
        className="gallary"
        style={{ position: "relative", top: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
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
          <Image title="Vitrupe, Limbaži Municipality, Latvia" id={img4} />
          <Image title="Standing Man Beside Camel on Desert" id={img2} />
          <Image title="Türkiye" id={img3} />
        </div>
      </div>
    </>
  );
}

export default Home;
