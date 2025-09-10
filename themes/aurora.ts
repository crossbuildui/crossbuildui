// import { AppConfig, defaultAppConfig } from '@crossbuildui/core'; Ucomment this line
// export const auroraTheme: Partial<AppConfig> =  {
export const auroraTheme = { //Remove this line and use the line above in to export and define app themes
    "themes": {
        "light": {
            "colors": {
                "default": {
                    "50": "#fafcff",
                    "100": "#f4f8ff",
                    "200": "#eef4ff",
                    "300": "#e3efff",
                    "400": "#d2e6ff",
                    "500": "#bedcff",
                    "600": "#9ec4d9",
                    "700": "#7eacb3",
                    "800": "#5e948c",
                    "900": "#3e7c66",
                    "foreground": "#0f3460",
                    "DEFAULT": "#bedcff"
                },
                "primary": {
                    "50": "#fff0f5",
                    "100": "#ffe3ec",
                    "200": "#ffc9da",
                    "300": "#ff9fbf",
                    "400": "#ff6b9d",
                    "500": "#ff3b82",
                    "600": "#e91e63",
                    "700": "#c2185b",
                    "800": "#ad1457",
                    "900": "#880e4f",
                    "foreground": "#ffffff",
                    "DEFAULT": "#e91e63"
                },
                "secondary": {
                    "50": "#f0f9ff",
                    "100": "#e0f2fe",
                    "200": "#bae6fd",
                    "300": "#7dd3fc",
                    "400": "#38bdf8",
                    "500": "#0ea5e9",
                    "600": "#0284c7",
                    "700": "#0369a1",
                    "800": "#075985",
                    "900": "#0c4a6e",
                    "foreground": "#ffffff",
                    "DEFAULT": "#0ea5e9"
                },
                "success": {
                    "50": "#f0fdf9",
                    "100": "#ecfdf5",
                    "200": "#d1fae5",
                    "300": "#a7f3d0",
                    "400": "#6ee7b7",
                    "500": "#34d399",
                    "600": "#10b981",
                    "700": "#059669",
                    "800": "#047857",
                    "900": "#065f46",
                    "foreground": "#ffffff",
                    "DEFAULT": "#10b981"
                },
                "warning": {
                    "50": "#fffbeb",
                    "100": "#fef3c7",
                    "200": "#fde68a",
                    "300": "#fcd34d",
                    "400": "#fbbf24",
                    "500": "#f59e0b",
                    "600": "#d97706",
                    "700": "#b45309",
                    "800": "#92400e",
                    "900": "#78350f",
                    "foreground": "#ffffff",
                    "DEFAULT": "#f59e0b"
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
                "background": "#fdfeff",
                "foreground": "#0f3460",
                "content1": {
                    "DEFAULT": "#ffffff",
                    "foreground": "#0f3460"
                },
                "content2": {
                    "DEFAULT": "#fafcff",
                    "foreground": "#0f3460"
                },
                "content3": {
                    "DEFAULT": "#f4f8ff",
                    "foreground": "#0f3460"
                },
                "content4": {
                    "DEFAULT": "#eef4ff",
                    "foreground": "#0f3460"
                },
                "focus": "#e91e63",
                "overlay": "#0f3460"
            }
        },
        "dark": {
            "colors": {
                "default": {
                    "50": "#0c1629",
                    "100": "#162945",
                    "200": "#1f3d62",
                    "300": "#29527f",
                    "400": "#32669c",
                    "500": "#4a7db5",
                    "600": "#6395ce",
                    "700": "#7bace7",
                    "800": "#a1c7f0",
                    "900": "#c7e2f9",
                    "foreground": "#e3f2fd",
                    "DEFAULT": "#32669c"
                },
                "primary": {
                    "50": "#880e4f",
                    "100": "#ad1457",
                    "200": "#c2185b",
                    "300": "#e91e63",
                    "400": "#ff3b82",
                    "500": "#ff6b9d",
                    "600": "#ff9fbf",
                    "700": "#ffc9da",
                    "800": "#ffe3ec",
                    "900": "#fff0f5",
                    "foreground": "#ffffff",
                    "DEFAULT": "#ff6b9d"
                },
                "secondary": {
                    "50": "#0c4a6e",
                    "100": "#075985",
                    "200": "#0369a1",
                    "300": "#0284c7",
                    "400": "#0ea5e9",
                    "500": "#38bdf8",
                    "600": "#7dd3fc",
                    "700": "#bae6fd",
                    "800": "#e0f2fe",
                    "900": "#f0f9ff",
                    "foreground": "#ffffff",
                    "DEFAULT": "#38bdf8"
                },
                "success": {
                    "50": "#065f46",
                    "100": "#047857",
                    "200": "#059669",
                    "300": "#10b981",
                    "400": "#34d399",
                    "500": "#6ee7b7",
                    "600": "#a7f3d0",
                    "700": "#d1fae5",
                    "800": "#ecfdf5",
                    "900": "#f0fdf9",
                    "foreground": "#ffffff",
                    "DEFAULT": "#6ee7b7"
                },
                "warning": {
                    "50": "#78350f",
                    "100": "#92400e",
                    "200": "#b45309",
                    "300": "#d97706",
                    "400": "#f59e0b",
                    "500": "#fbbf24",
                    "600": "#fcd34d",
                    "700": "#fde68a",
                    "800": "#fef3c7",
                    "900": "#fffbeb",
                    "foreground": "#ffffff",
                    "DEFAULT": "#fbbf24"
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
                "background": "#0c1629",
                "foreground": "#e3f2fd",
                "content1": {
                    "DEFAULT": "#162945",
                    "foreground": "#e3f2fd"
                },
                "content2": {
                    "DEFAULT": "#1f3d62",
                    "foreground": "#e3f2fd"
                },
                "content3": {
                    "DEFAULT": "#29527f",
                    "foreground": "#e3f2fd"
                },
                "content4": {
                    "DEFAULT": "#32669c",
                    "foreground": "#e3f2fd"
                },
                "focus": "#ff6b9d",
                "overlay": "#e3f2fd"
            }
        }
    },
    "layout": {
        "disabledOpacity": "0.6",
        "borderRadius": {
            sm: 8,
            md: 16,
            lg: 24,
            full: 9999,
        }
    }
}