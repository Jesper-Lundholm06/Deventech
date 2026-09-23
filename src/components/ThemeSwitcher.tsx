import { useTheme, type Theme } from "../context/ThemeContext";

const themeOptions: { id: Theme; label: string }[] = [
  { id: "light", label: "Light Precision" },
  { id: "dark", label: "Dark Tech" },
  { id: "heritage", label: "Heritage" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 left-4 z-[60] max-w-[calc(100vw-2rem)] rounded-lg border border-line bg-card px-3 py-2.5 shadow-lg shadow-navy/10">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate">
        Preview design
      </p>
      <div className="mt-1.5 flex flex-wrap justify-end gap-1">
        {themeOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setTheme(option.id)}
            aria-pressed={theme === option.id}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              theme === option.id
                ? "bg-brand text-white"
                : "text-navy hover:bg-surface"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
