import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadHistory from "./history.js";
import loadReservations from "./reservations.js";

const tabs = document.querySelector("#tabs")

loadHome()

document.addEventListener('click', (e) => {
    if (e.target.classList.contains("home")) loadHome();
    if (e.target.classList.contains("menu")) loadMenu();
    if (e.target.classList.contains("history")) loadHistory();
    if (e.target.classList.contains("reservations")) loadReservations();
});