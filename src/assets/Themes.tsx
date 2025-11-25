export const themes = {
    lilac: {
        "--main-theme-color": "#E5B7ED",
        "--main-theme-background-color": "#1f1f1f",
        "--accent-color": "#f1edac",
        "--notebook-bg-image": "url(https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)",
        "--todo-list-bg-image": "url(https://i.pinimg.com/736x/24/ce/20/24ce20015e788d39c0006d219c9c4dbe.jpg)",
        "--clock-bg-image": "url(https://cdn.wallpapersafari.com/37/96/thwpNs.png)",
        "--font-color": "#1f1f1f"
    },
    frutiger_aero: {
"--main-theme-color": "#228dffff",
        "--main-theme-background-color": "#b5f6ffff",
        "--accent-color": "#ff6f00ff",
        "--notebook-bg-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDEzd77BSFDRNElD9f4yv9Iqcz8v6m0piMgfEcY7yKpI2dSC-C3ZLT1bZZl1qIQfqhKU&usqp=CAU)",
        "--todo-list-bg-image": "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Frutiger_Aero_%283%29.jpg/1200px-Frutiger_Aero_%283%29.jpg)",
        "--clock-bg-image": "url(https://miro.medium.com/v2/resize:fit:1400/1*_zqJUXJaDneHRrXeXtR5vQ.webp)",
        "--font-color": "#1f1f1f"
    }
}

export function applyTheme(themeName: keyof typeof themes) {
  const theme = themes[themeName];
  if (!theme) return;

  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  localStorage.setItem("theme", themeName);
}
