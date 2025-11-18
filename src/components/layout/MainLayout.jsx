import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function MainLayout({
  children,
  showHomeButton = false,
  onHomeClick,
}) {
  return (
    <div className="min-h-screen">
      {showHomeButton && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onHomeClick}
          className="fixed top-6 left-6 z-50 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all min-w-[70px] min-h-[70px] flex items-center justify-center"
          aria-label="Back to home">
          <Home size={32} className="text-gray-700" />
        </motion.button>
      )}
      <main>{children}</main>
    </div>
  );
}
