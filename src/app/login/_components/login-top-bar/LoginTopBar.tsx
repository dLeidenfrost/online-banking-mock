"use client";

import { SelectInput } from "@/components/ui/select-input";
import { SelectInputOption } from "@/components/ui/select-input/SelectInput";
import { Locale } from "@/i18n/config";
import { setLocale } from "@/utils/locale";
import { useLocale } from "next-intl";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdMonitor } from "react-icons/md";

const languages = [
  { id: 1, name: "en", description: "English", buttonLabel: "EN" },
  { id: 2, name: "es", description: "Español", buttonLabel: "ES" },
];

const themes = [
  {
    id: 1,
    name: "light",
    description: "Light Mode",
    icon: <MdLightMode className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "dark",
    description: "Dark Mode",
    icon: <MdDarkMode className="h-5 w-5" />,
  },
  {
    id: 3,
    name: "system",
    description: "System Mode",
    icon: <MdMonitor className="h-5 w-5" />,
  },
];

function toggleTheme() {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
}

export default function LoginTopBar() {
  const currentTheme = localStorage.getItem("theme");
  const currentSelectedTheme = currentTheme
    ? themes.find(t => t.name === currentTheme)
    : themes[themes.length - 1];
  const locale = useLocale();
  const currentSelectedLocale = languages.find(l => l.name === locale);

  function onSetTheme(option: SelectInputOption) {
    const theme = option?.name;
    if (theme === "system") {
      window.localStorage.removeItem("theme");
    } else {
      window.localStorage.setItem("theme", theme);
    }
    toggleTheme();
  }

  function onSetLanguage(option: SelectInputOption) {
    const locale = option.name;
    setLocale(locale as Locale);
  }

  return (
    <div className="flex space-x-4">
      <SelectInput
        options={themes}
        onChange={onSetTheme}
        defaultValue={currentSelectedTheme}
      />
      <SelectInput
        options={languages}
        onChange={onSetLanguage}
        defaultValue={currentSelectedLocale}
      />
    </div>
  );
}
