import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        gap: "0.8rem",
      }}
    >
      <motion.div
        style={{ height: "100vh", width: "100vw", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: "red",
          transition: "1s background",
        }}
      />
    </div>
  );
};

export default ViewBasedAnimations;
