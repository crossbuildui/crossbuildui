// import { AppConfig, defaultAppConfig } from '@crossbuildui/core'; Ucomment this line
// export const cosmicTheme: Partial<AppConfig> =  {
export const cosmicTheme = { //Remove this line and use the line above in to export and define app themes
    "themes": {
        "light": {
            "colors": {
                "default": {
                    "50": "#f8faff",
                    "100": "#f0f4fe",
                    "200": "#e8eefd",
                    "300": "#e0e8fc",
                    "400": "#d8e2fb",
                    "500": "#d0dcfa",
                    "600": "#acb7d1",
                    "700": "#8892a8",
                    "800": "#646d7e",
                    "900": "#404755",
                    "foreground": "#1a1d29",
                    "DEFAULT": "#d0dcfa"
                },
                "primary": {
                    "50": "#f0f4ff",
                    "100": "#dde4ff",
                    "200": "#c2ccff",
                    "300": "#9ca9ff",
                    "400": "#7075ff",
                    "500": "#4338ca",
                    "600": "#3730a3",
                    "700": "#312e81",
                    "800": "#1e1b4b",
                    "900": "#0f0c29",
                    "foreground": "#ffffff",
                    "DEFAULT": "#4338ca"
                },
                "secondary": {
                    "50": "#fdf2ff",
                    "100": "#fae8ff",
                    "200": "#f5d0fe",
                    "300": "#f0abfc",
                    "400": "#e879f9",
                    "500": "#d946ef",
                    "600": "#c026d3",
                    "700": "#a21caf",
                    "800": "#86198f",
                    "900": "#581c87",
                    "foreground": "#ffffff",
                    "DEFAULT": "#d946ef"
                },
                "success": {
                    "50": "#ecfdf5",
                    "100": "#d1fae5",
                    "200": "#a7f3d0",
                    "300": "#6ee7b7",
                    "400": "#34d399",
                    "500": "#10b981",
                    "600": "#059669",
                    "700": "#047857",
                    "800": "#065f46",
                    "900": "#064e3b",
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
                "background": "#fafbff",
                "foreground": "#1a1d29",
                "content1": {
                    "DEFAULT": "#ffffff",
                    "foreground": "#1a1d29"
                },
                "content2": {
                    "DEFAULT": "#f8faff",
                    "foreground": "#1a1d29"
                },
                "content3": {
                    "DEFAULT": "#f0f4fe",
                    "foreground": "#1a1d29"
                },
                "content4": {
                    "DEFAULT": "#e8eefd",
                    "foreground": "#1a1d29"
                },
                "focus": "#4338ca",
                "overlay": "#1a1d29"
            }
        },
        "dark": {
            "colors": {
                "default": {
                    "50": "#0a0b14",
                    "100": "#151829",
                    "200": "#1f253d",
                    "300": "#2a3352",
                    "400": "#344066",
                    "500": "#4a5780",
                    "600": "#606e99",
                    "700": "#7685b3",
                    "800": "#8c9ccc",
                    "900": "#a2b3e6",
                    "foreground": "#e2e8f0",
                    "DEFAULT": "#344066"
                },
                "primary": {
                    "50": "#0f0c29",
                    "100": "#1e1b4b",
                    "200": "#312e81",
                    "300": "#3730a3",
                    "400": "#4338ca",
                    "500": "#7075ff",
                    "600": "#9ca9ff",
                    "700": "#c2ccff",
                    "800": "#dde4ff",
                    "900": "#f0f4ff",
                    "foreground": "#ffffff",
                    "DEFAULT": "#7075ff"
                },
                "secondary": {
                    "50": "#581c87",
                    "100": "#86198f",
                    "200": "#a21caf",
                    "300": "#c026d3",
                    "400": "#d946ef",
                    "500": "#e879f9",
                    "600": "#f0abfc",
                    "700": "#f5d0fe",
                    "800": "#fae8ff",
                    "900": "#fdf2ff",
                    "foreground": "#ffffff",
                    "DEFAULT": "#e879f9"
                },
                "success": {
                    "50": "#064e3b",
                    "100": "#065f46",
                    "200": "#047857",
                    "300": "#059669",
                    "400": "#10b981",
                    "500": "#34d399",
                    "600": "#6ee7b7",
                    "700": "#a7f3d0",
                    "800": "#d1fae5",
                    "900": "#ecfdf5",
                    "foreground": "#ffffff",
                    "DEFAULT": "#34d399"
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
                "background": "#0a0b14",
                "foreground": "#e2e8f0",
                "content1": {
                    "DEFAULT": "#151829",
                    "foreground": "#e2e8f0"
                },
                "content2": {
                    "DEFAULT": "#1f253d",
                    "foreground": "#e2e8f0"
                },
                "content3": {
                    "DEFAULT": "#2a3352",
                    "foreground": "#e2e8f0"
                },
                "content4": {
                    "DEFAULT": "#344066",
                    "foreground": "#e2e8f0"
                },
                "focus": "#7075ff",
                "overlay": "#e2e8f0"
            }
        }
    },
    "layout": {
        "disabledOpacity": "0.3",
        "borderRadius": {
            sm: 6,
            md: 12,
            lg: 18,
            full: 9999,
        }
    }
}