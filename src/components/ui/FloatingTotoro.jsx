// src/components/FloatingTotoro.jsx
import React from "react";
import { motion } from "framer-motion";

const FloatingTotoro = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "150px",
        zIndex: 10,
      }}
    >
      <img
        src="/asset/totoro.png"
        alt="Floating Totoro"
        style={{ width: "100%", objectFit: "contain" }}
      />
    </motion.div>
  );
};

export default FloatingTotoro;
