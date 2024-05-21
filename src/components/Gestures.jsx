import { motion, MotionConfig } from "framer-motion";
import React from "react";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.75, rotate: "360deg" }}
        transition={{ duration: 0.1 }}
      >
        <motion.button className="example-button">Click me</motion.button>
        <motion.button className="example-button">Click me</motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
