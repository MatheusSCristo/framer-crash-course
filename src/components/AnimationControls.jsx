import { motion, useAnimationControls } from "framer-motion";
import React from "react";

const AnimationControls = () => {
    
    const controls=useAnimationControls();
    
    
    const handleClick=()=>{
        controls.start("flip")
    }
    
    
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button className="example-button" onClick={handleClick}>Flip it!</button>
      <motion.div
        style={{ background: "black", width: "150px", height: "150px" }}
        variants={{initial:{rotate:0},flip:{rotate:180}}}
        initial="inital"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
