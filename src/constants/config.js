// IFP (Interactive Flat Panel) Configuration
export const IFP_CONFIG = {
  // Font sizes optimized for large screens
  fontSize: {
    xs: "1rem", // 16px
    sm: "1.25rem", // 20px
    base: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "2.5rem", // 40px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
  },

  // Touch targets (minimum 44px for accessibility)
  touchTarget: {
    min: "60px", // Minimum touch size
    comfortable: "80px", // Comfortable size
    large: "100px", // Large buttons
  },

  // Spacing for better readability
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },

  // Transition speeds
  transition: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
};

// Theme colors
export const THEME = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
  },
  success: {
    500: "#22c55e",
    600: "#16a34a",
  },
  warning: {
    500: "#f59e0b",
    600: "#d97706",
  },
  error: {
    500: "#ef4444",
    600: "#dc2626",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    500: "#6b7280",
    700: "#374151",
    900: "#111827",
  },
};
