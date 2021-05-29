export const changeTheme = (theme ,currentTheme) =>{

    var sun = document.getElementById('gg-sun');
    var moon = document.getElementById('gg-moon');

    if (theme) {
        sun.style.display = "block";
        moon.style.display = "none";
        currentTheme = "dark"
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
        currentTheme = "light"
    }

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
}