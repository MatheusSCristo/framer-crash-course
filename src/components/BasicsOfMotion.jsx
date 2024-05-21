import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const BasicsOfMotion = () => {
  const [active, setActive] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => setActive((prevState) => !prevState)}
        layout
      >
        Show/Hide
      </motion.button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ rotate: "0deg",scale:0,y:0}}
            animate={{ rotate: "180deg",scale:1,y:[0,150,-150,-150,0] }}
            exit={{ rotate: "0deg",scale:0,y:0 }}
            transition={{ duration: 5, ease: "backInOut",times: [0,0.2,0.8,0.9,1]}}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "red",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
