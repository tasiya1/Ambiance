
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
        "--font-color": "#1f1f1f",
        "--windows-gap": "0px",
        "--border": "2px solid black",
        "--inner-border": "1px solid black",
        "--content-border-radius": "0px",
        "--box-shadow": "none",
        "--window-container-background": "#fff"
    },
    frutiger_aero: {
        "--main-theme-color": "#228dffff",
        "--main-theme-background-color": "#b5f6ffff",
        "--accent-color": "#ff6f00ff",
        "--notebook-bg-image": "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDEzd77BSFDRNElD9f4yv9Iqcz8v6m0piMgfEcY7yKpI2dSC-C3ZLT1bZZl1qIQfqhKU&usqp=CAU)",
        "--todo-list-bg-image": "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Frutiger_Aero_%283%29.jpg/1200px-Frutiger_Aero_%283%29.jpg)",
        "--clock-bg-image": "url(https://miro.medium.com/v2/resize:fit:1400/1*_zqJUXJaDneHRrXeXtR5vQ.webp)",
        "--font-color": "#1f1f1f",
        "--chibbidibbey-appearance": "url(https://media.tenor.com/RIZhO8NjO8sAAAAj/fish.gif)",
        "--windows-gap": "0px",
        "--border": "2px solid black",
        "--inner-border": "1px solid black",
        "--content-border-radius": "0px",
        "--box-shadow": "none",
        "--window-container-background": "#fff"
    },
    typewriter: {
        "--main-theme-color": "#e7bea8ff",
        "--main-theme-background-color": "#33261fff",
        "--accent-color": "#faf4e9ff",
        "--notebook-bg-image": "url(https://www.shutterstock.com/image-vector/geometric-pattern-diamond-shape-on-260nw-2613685275.jpg)",
        "--todo-list-bg-image": "url(https://images.orientbell.com/media/catalog/product/o/d/odh_diamond_beige_hl.png)",
        "--clock-bg-image": "url(https://images.unsplash.com/photo-1530819568329-97653eafbbfa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8)",
        "--font-color": "#161513ff",
        "--windows-gap": "0px",
        "--border": "2px solid black",
        "--inner-border": "1px solid black",
        "--content-border-radius": "0px",
        "--box-shadow": "none",
        "--window-container-background": "#fff"
    },
    pastel: {
        "--main-theme-color": "#ffb5b5ff",
        "--main-theme-background-color": "#f6f2f1ff",
        "--accent-color": "#ef6381ff",
        "--notebook-bg-image": "url(https://i.pinimg.com/736x/81/24/d6/8124d6aea68abf42820a0eae0102f9fd.jpg)",
        "--todo-list-bg-image": "url(https://static.vecteezy.com/system/resources/previews/005/269/515/non_2x/love-heart-pattern-pink-pastel-seamless-background-free-vector.jpg)",
        "--clock-bg-image": "url(https://images.squarespace-cdn.com/content/v1/65ce335afc22cf681a065426/0b1abd69-ee62-416d-82a6-645981a1cf43/The+Self-Love+Bootcamp.png)",
        "--font-color": "#161314ff",
        "--windows-gap": "0px",
        "--border": "2px solid black",
        "--inner-border": "1px solid black",
        "--content-border-radius": "0px",
        "--box-shadow": "none",
        "--window-container-background": "#fff"
    },
    cyberpunk: {
        "--main-theme-color": "#1c1327ff",
        "--main-theme-background-color": "#202020ff",
        "--accent-color": "#820fdbff",
        "--notebook-bg-image": "url(https://i.ytimg.com/vi/e1ynOu30S7A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOOWPwuLf3p7bHm0u_Emx319q1Tg)",
        "--todo-list-bg-image": "url(https://img.freepik.com/premium-vector/futuristic-abstract-technology-cyberpunk-wallpaper_636138-1939.jpg)",
        "--clock-bg-image": "url(https://wallpapers.com/images/hd/cyberpunk-pixel-art-0wsff2qqmw168u7t.jpg)",
        "--font-color": "#a5eaffff",
        "--windows-gap": "0px",
        "--border": "2px solid black",
        "--inner-border": "1px solid black",
        "--content-border-radius": "0px",
        "--box-shadow": "none",
        "--window-container-background": "#fff"
    },
    forest: {
        "--main-theme-color": "#c9d7d0ff",
        "--main-theme-background-color": "#1e2221ff",
        "--accent-color": "#abedffff",
        "--notebook-bg-image": "url(https://garden.spoonflower.com/c/9160006/p/f/m/niSo-qhJ0r5QOfoJW2nf0pt4eVcEKO_LnBKeJQMZ01jNkCh1-dxbEg/Couched%20Diamond%20-%20Stonewashed%20-%20Small%20-%20Cream%20Light%20Aqua.jpg)",
        "--todo-list-bg-image": "url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)",
        "--clock-bg-image": "url(https://cdn.shopify.com/s/files/1/0565/7080/6458/files/foggy-forest-wallpaper-mural-plain.jpg?v=1632987442)",
        "--font-color": "#091c14ff",
        "--windows-gap": "0px",
        "--border": "2px solid black",
        "--inner-border": "1px solid black",
        "--content-border-radius": "0px",
        "--box-shadow": "none",
        "--window-container-background": "#fff"
    },
    soft_white: {
        "--main-theme-color": "#fff",
        "--main-theme-background-color": "#e2e2e2ff",
        "--accent-color": "#71e0ffff",
        "--notebook-bg-image": "linear-gradient(180deg,rgba(250, 250, 250, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        "--todo-list-bg-image": "url(https://i.pinimg.com/736x/f5/a2/44/f5a24493c5efc5d3c8fdcb3a3531cc15.jpg)",
        "--clock-bg-image": "url(https://images.unsplash.com/photo-1600172454284-934feca24ccd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D)",
        "--font-color": "#091c14ff",
        "--windows-gap": "8px",
        "--border": "none",
        "--inner-border": "none",
        "--content-border-radius": "10px",
        "--box-shadow": "0px 10px 15px -3px rgba(0,0,0,0.1)",
        "--window-container-background": "#fff"
    },
    soft_black: {
        "--main-theme-color": "#232323ff",
        "--main-theme-background-color": "#0e0e0eff",
        "--accent-color": "#8e7de1ff",
        "--notebook-bg-image": "linear-gradient(180deg, #191919ff 0%, #1f1f1fff 100%)",
        "--todo-list-bg-image": "url(https://nighteye.app/wp-content/uploads/2020/04/claudio-testa-fb_CZ4hZXWo-unsplash.jpg)",
        "--clock-bg-image": "url(https://nighteye.app/wp-content/uploads/2020/04/claudio-testa-fb_CZ4hZXWo-unsplash.jpg)",
        "--font-color": "#ebebebff",
        "--windows-gap": "8px",
        "--border": "none",
        "--inner-border": "none",
        "--content-border-radius": "10px",
        "--box-shadow": "0px 10px 15px -3px rgba(0,0,0,0.1)",
        "--window-container-background": "#000"
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
