"use client";

import { useEffect, useState, ReactNode } from "react";
import { getInitialDarkMode, applyDarkModeClass } from "../../utils/darkMode";

type Props = {
  children: ReactNode;
};

export default function DarkModeProvider({ children }: Props) {
  const [isDark, setIsDark] = useState(getInitialDarkMode);

  // 2️⃣ Appliquer la classe .dark sur <html> au premier rendu et quand isDark change
  useEffect(() => {
    applyDarkModeClass(isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  return (
    <>
      {/* Contenu */}
      {children}
    </>
  );
}
