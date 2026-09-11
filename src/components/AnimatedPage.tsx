import { motion } from "motion/react";

const pageTransition = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);