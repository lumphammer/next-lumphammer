import { useCallback } from "react";

export default function useCycleBrowserTheme() {
  const handleCycleTheme = useCallback(() => {
    const storedTheme = document.documentElement.getAttribute("data-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    let newTheme;
    if (!storedTheme) {
      newTheme = systemTheme === "dark" ? "light" : "dark";
    } else if (storedTheme === "dark") {
      newTheme = systemTheme === "dark" ? "system" : "light";
    } else {
      newTheme = systemTheme === "dark" ? "dark" : "system";
    }

    if (newTheme === "system") {
      document.documentElement.removeAttribute("data-theme");
      try {
        localStorage.removeItem("theme");
      } catch (e) {
        console.error("Failed to save theme preference:", e);
      }
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
      try {
        localStorage.setItem("theme", newTheme);
      } catch (e) {
        console.error("Failed to save theme preference:", e);
      }
    }
  }, []);

  return { handleCycleTheme };
}
