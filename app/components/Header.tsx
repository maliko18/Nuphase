"use client";

import NavBar from "./NavBar";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      {/* Background qui scroll avec la page */}
      <div className="relative h-28 bg-white dark:bg-neutral-950 z-10" />
      
      <motion.div
        initial={{ y: -112, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <NavBar />
      </motion.div>
    </>
  );
}
