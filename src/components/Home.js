import React from "react";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
      <div className="home">
        <motion.h1 initial={{ x: "-300px" }} animate={{ x: "100px" }}>
          Photography is passion
        </motion.h1>
      </div>
    </>
  );
}

export default Home;
