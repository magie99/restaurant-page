import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const tabs = document.querySelector("#tabs")

tabs.addEventListener('click', (e) => {
    const targetId = e.target.id; // Die ID des geklickten Elements prüfen

    if (targetId === "home") loadHome();
    if (targetId === "menu") loadMenu();
    if (targetId === "about") loadAbout();
});