"use client";

import { PropsWithChildren, useEffect, useState } from "react";

function toggleTheme() {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
}

export default function ThemeProvider(props: PropsWithChildren) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    toggleTheme();
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return <>{props.children}</>;
}
