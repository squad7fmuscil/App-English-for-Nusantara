export function Card({ children, className = "", hover = false, onClick }) {
  const hoverEffect = hover
    ? "hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
    : "";

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-lg p-6 
        ${hoverEffect} 
        ${className}
      `}>
      {children}
    </div>
  );
}
