//     ✅ Ce que ça change
// Aucun setState synchrone dans useEffect → plus de warning React
// L’état initial est déterminé dès le premier rendu via useState lazy
// La classe .dark est appliquée automatiquement dès que isDark change
// Toggle fonctionne parfaitement et sauvegarde dans localStorage
// Compatible SSR (Next.js App Router

export const getInitialDarkMode = (): boolean => {
  if (typeof window === "undefined") return false; // SSR safety
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

 // 2️⃣ Appliquer la classe .dark sur <html> au premier rendu et quand isDark change
export const applyDarkModeClass = (isDark: boolean) => {
  const html = document.documentElement;
  if (isDark) html.classList.add("dark");
  else html.classList.remove("dark");
};
