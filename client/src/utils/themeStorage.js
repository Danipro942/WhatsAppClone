export function setThemeStorage(theme){
    localStorage.setItem('theme', theme)
}

export function getTheme() {
    const themeStorage = localStorage.getItem('theme')
    return themeStorage
}