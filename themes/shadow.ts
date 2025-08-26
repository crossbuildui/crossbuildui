// import { AppConfig, defaultAppConfig } from '@crossbuildui/core'; Ucomment this line
// export const shadowTheme: Partial<AppConfig> =  {
export const shadowTheme = { //Remove this line and use the line above in to export and define app themes
    "themes": {
        "light": {
            "colors": {
                "default": {
                    "50": "#f8f9fa",
                    "100": "#f1f3f4",
                    "200": "#e8eaed",
                    "300": "#dadce0",
                    "400": "#bdc1c6",
                    "500": "#9aa0a6",
                    "600": "#80868b",
                    "700": "#5f6368",
                    "800": "#3c4043",
                    "900": "#202124",
                    "foreground": "#202124",
                    "DEFAULT": "#9aa0a6"
                },
                "primary": {
                    "50": "#f3f4f6",
                    "100": "#e5e7eb",
                    "200": "#d1d5db",
                    "300": "#9ca3af",
                    "400": "#6b7280",
                    "500": "#374151",
                    "600": "#1f2937",
                    "700": "#111827",
                    "800": "#0f172a",
                    "900": "#020617",
                    "foreground": "#ffffff",
                    "DEFAULT": "#374151"
                },
                "secondary": {
                    "50": "#f8fafc",
                    "100": "#f1f5f9",
                    "200": "#e2e8f0",
                    "300": "#cbd5e1",
                    "400": "#94a3b8",
                    "500": "#64748b",
                    "600": "#475569",
                    "700": "#334155",
                    "800": "#1e293b",
                    "900": "#0f172a",
                    "foreground": "#ffffff",
                    "DEFAULT": "#64748b"
                },
                "success": {
                    "50": "#f0fdf4",
                    "100": "#dcfce7",
                    "200": "#bbf7d0",
                    "300": "#86efac",
                    "400": "#4ade80",
                    "500": "#22c55e",
                    "600": "#16a34a",
                    "700": "#15803d",
                    "800": "#166534",
                    "900": "#14532d",
                    "foreground": "#ffffff",
                    "DEFAULT": "#22c55e"
                },
                "warning": {
                    "50": "#fefce8",
                    "100": "#fef9c3",
                    "200": "#fef08a",
                    "300": "#fde047",
                    "400": "#facc15",
                    "500": "#eab308",
                    "600": "#ca8a04",
                    "700": "#a16207",
                    "800": "#854d0e",
                    "900": "#713f12",
                    "foreground": "#000000",
                    "DEFAULT": "#eab308"
                },
                "danger": {
                    "50": "#fef2f2",
                    "100": "#fee2e2",
                    "200": "#fecaca",
                    "300": "#fca5a5",
                    "400": "#f87171",
                    "500": "#ef4444",
                    "600": "#dc2626",
                    "700": "#b91c1c",
                    "800": "#991b1b",
                    "900": "#7f1d1d",
                    "foreground": "#ffffff",
                    "DEFAULT": "#ef4444"
                },
                "background": "#ffffff",
                "foreground": "#202124",
                "content1": {
                    "DEFAULT": "#f8f9fa",
                    "foreground": "#202124"
                },
                "content2": {
                    "DEFAULT": "#f1f3f4",
                    "foreground": "#202124"
                },
                "content3": {
                    "DEFAULT": "#e8eaed",
                    "foreground": "#202124"
                },
                "content4": {
                    "DEFAULT": "#dadce0",
                    "foreground": "#202124"
                },
                "focus": "#374151",
                "overlay": "#202124"
            }
        },
        "dark": {
            "colors": {
                "default": {
                    "50": "#0a0a0b",
                    "100": "#121214",
                    "200": "#1a1a1d",
                    "300": "#232326",
                    "400": "#2b2b2f",
                    "500": "#404044",
                    "600": "#565659",
                    "700": "#6b6b6e",
                    "800": "#808083",
                    "900": "#959598",
                    "foreground": "#e4e4e7",
                    "DEFAULT": "#2b2b2f"
                },
                "primary": {
                    "50": "#020617",
                    "100": "#0f172a",
                    "200": "#111827",
                    "300": "#1f2937",
                    "400": "#374151",
                    "500": "#6b7280",
                    "600": "#9ca3af",
                    "700": "#d1d5db",
                    "800": "#e5e7eb",
                    "900": "#f3f4f6",
                    "foreground": "#ffffff",
                    "DEFAULT": "#6b7280"
                },
                "secondary": {
                    "50": "#0f172a",
                    "100": "#1e293b",
                    "200": "#334155",
                    "300": "#475569",
                    "400": "#64748b",
                    "500": "#94a3b8",
                    "600": "#cbd5e1",
                    "700": "#e2e8f0",
                    "800": "#f1f5f9",
                    "900": "#f8fafc",
                    "foreground": "#ffffff",
                    "DEFAULT": "#94a3b8"
                },
                "success": {
                    "50": "#14532d",
                    "100": "#166534",
                    "200": "#15803d",
                    "300": "#16a34a",
                    "400": "#22c55e",
                    "500": "#4ade80",
                    "600": "#86efac",
                    "700": "#bbf7d0",
                    "800": "#dcfce7",
                    "900": "#f0fdf4",
                    "foreground": "#ffffff",
                    "DEFAULT": "#4ade80"
                },
                "warning": {
                    "50": "#713f12",
                    "100": "#854d0e",
                    "200": "#a16207",
                    "300": "#ca8a04",
                    "400": "#eab308",
                    "500": "#facc15",
                    "600": "#fde047",
                    "700": "#fef08a",
                    "800": "#fef9c3",
                    "900": "#fefce8",
                    "foreground": "#000000",
                    "DEFAULT": "#facc15"
                },
                "danger": {
                    "50": "#7f1d1d",
                    "100": "#991b1b",
                    "200": "#b91c1c",
                    "300": "#dc2626",
                    "400": "#ef4444",
                    "500": "#f87171",
                    "600": "#fca5a5",
                    "700": "#fecaca",
                    "800": "#fee2e2",
                    "900": "#fef2f2",
                    "foreground": "#ffffff",
                    "DEFAULT": "#f87171"
                },
                "background": "#0a0a0b",
                "foreground": "#e4e4e7",
                "content1": {
                    "DEFAULT": "#121214",
                    "foreground": "#e4e4e7"
                },
                "content2": {
                    "DEFAULT": "#1a1a1d",
                    "foreground": "#e4e4e7"
                },
                "content3": {
                    "DEFAULT": "#232326",
                    "foreground": "#e4e4e7"
                },
                "content4": {
                    "DEFAULT": "#2b2b2f",
                    "foreground": "#e4e4e7"
                },
                "focus": "#6b7280",
                "overlay": "#e4e4e7"
            }
        }
    },
    "layout": {
        "disabledOpacity": "0.4",
        "borderRadius": {
            sm: 2,
            md: 4,
            lg: 8,
            full: 9999,
        }
    }
}