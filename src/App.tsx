import { Route, Routes, useLocation } from "react-router-dom"; 
import NavBar from "./components/NavBar"; 
import ProtectedRoute from "./components/ProtectedRoute"; 
import HomePage from "./pages/HomePage"; 
import BlogsPage from "./pages/BlogsPage"; 
import BlogPage from "./pages/BlogPage"; 
import LoginPage from "./pages/LoginPage"; 
import AdminPage from "./pages/AdminPage"; 
import NotFoundPage from "./pages/NotFoundPage"; 
import { motion, AnimatePresence } from "motion/react";

// 1. Define your transition animation variants
const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
};

// 2. Extract routes to a separate component to safely use the useLocation hook
function AnimatedRoutes() {
  const location = useLocation();

  return (
    // mode="wait" ensures the outgoing page completes its animation before the incoming page mounts
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
              <HomePage />
            </motion.div>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
              <BlogsPage />
            </motion.div>
          } 
        />
        <Route 
          path="/blog/:slug" 
          element={
            <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
              <BlogPage />
            </motion.div>
          } 
        />
        <Route 
          path="/login" 
          element={
            <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
              <LoginPage />
            </motion.div>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
                <AdminPage />
              </motion.div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="*" 
          element={
            <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
              <NotFoundPage />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div>
      {/* NavBar stays persistent outside AnimatePresence so it won't re-render or animate */}
      <NavBar /> 
      <AnimatedRoutes />
    </div>
  );
}

export default App;