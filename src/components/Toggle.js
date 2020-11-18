import { motion } from "framer-motion";
import React, { useState } from "react";

function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="faq__question" onClick={() => setToggle(!toggle)}>
      <motion.h4>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </div>
  );
}

export default Toggle;
