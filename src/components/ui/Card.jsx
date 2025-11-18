import { motion } from "framer-motion";

export function Card({
  children,
  hover = false,
  onClick,
  className = "",
  ...props
}) {
  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      whileTap={onClick ? { scale: 0.97 } : {}}
      whileHover={hover ? { scale: 1.03, y: -4 } : {}}
      onClick={onClick}
      className={`
        bg-white rounded-2xl shadow-lg p-6
        transition-all duration-300
        ${hover ? "cursor-pointer hover:shadow-2xl" : ""}
        ${onClick ? "active:shadow-md" : ""}
        ${className}
      `}
      {...props}>
      {children}
    </Component>
  );
}
