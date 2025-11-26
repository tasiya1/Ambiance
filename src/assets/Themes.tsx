
export type ThemeName = keyof typeof themes;

type Theme = {
        "--main-theme-color": string,
        "--main-theme-background-color": string,
        "--accent-color": string,
        "--notebook-bg-image": string,
        "--todo-list-bg-image": string,
        "--clock-bg-image": string,
        "--font-color": string
}

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
        "--font-color": "#1f1f1f",
        "--chibbidibbey-appearance": "url(https://media.tenor.com/RIZhO8NjO8sAAAAj/fish.gif)"
    },
    typewriter: {
        "--main-theme-color": "#e7bea8ff",
        "--main-theme-background-color": "#33261fff",
        "--accent-color": "#faf4e9ff",
        "--notebook-bg-image": "url(https://www.shutterstock.com/image-vector/geometric-pattern-diamond-shape-on-260nw-2613685275.jpg)",
        "--todo-list-bg-image": "url(https://images.orientbell.com/media/catalog/product/o/d/odh_diamond_beige_hl.png)",
        "--clock-bg-image": "url(https://images.unsplash.com/photo-1530819568329-97653eafbbfa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8)",
        "--font-color": "#161513ff"
    },
    pastel: {
        "--main-theme-color": "#ffb5b5ff",
        "--main-theme-background-color": "#f6f2f1ff",
        "--accent-color": "#ef6381ff",
        "--notebook-bg-image": "url(https://i.pinimg.com/736x/81/24/d6/8124d6aea68abf42820a0eae0102f9fd.jpg)",
        "--todo-list-bg-image": "url(https://static.vecteezy.com/system/resources/previews/005/269/515/non_2x/love-heart-pattern-pink-pastel-seamless-background-free-vector.jpg)",
        "--clock-bg-image": "url(https://images.squarespace-cdn.com/content/v1/65ce335afc22cf681a065426/0b1abd69-ee62-416d-82a6-645981a1cf43/The+Self-Love+Bootcamp.png)",
        "--font-color": "#161314ff"
    },
    cyberpunk: {
        "--main-theme-color": "#1c1327ff",
        "--main-theme-background-color": "#202020ff",
        "--accent-color": "#820fdbff",
        "--notebook-bg-image": "url(https://i.ytimg.com/vi/e1ynOu30S7A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOOWPwuLf3p7bHm0u_Emx319q1Tg)",
        "--todo-list-bg-image": "url(https://img.freepik.com/premium-vector/futuristic-abstract-technology-cyberpunk-wallpaper_636138-1939.jpg)",
        "--clock-bg-image": "url(https://wallpapers.com/images/hd/cyberpunk-pixel-art-0wsff2qqmw168u7t.jpg)",
        "--font-color": "#a5eaffff"
    },
    forest: {
        "--main-theme-color": "#c9d7d0ff",
        "--main-theme-background-color": "#1e2221ff",
        "--accent-color": "#abedffff",
        "--notebook-bg-image": "url(https://garden.spoonflower.com/c/9160006/p/f/m/niSo-qhJ0r5QOfoJW2nf0pt4eVcEKO_LnBKeJQMZ01jNkCh1-dxbEg/Couched%20Diamond%20-%20Stonewashed%20-%20Small%20-%20Cream%20Light%20Aqua.jpg)",
        "--todo-list-bg-image": "url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)",
        "--clock-bg-image": "url(https://cdn.shopify.com/s/files/1/0565/7080/6458/files/foggy-forest-wallpaper-mural-plain.jpg?v=1632987442)",
        "--font-color": "#091c14ff"
    }
}

export function applyTheme(themeName: ThemeName) {
  const theme = themes[themeName];
  if (!theme) return;

  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  localStorage.setItem("theme", themeName);
}
