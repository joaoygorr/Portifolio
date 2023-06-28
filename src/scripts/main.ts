import "../styles/style.scss";
import "../styles/reset.scss";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const circle = document.querySelector(".box-circle-menu");
const boxNavigationList = document.querySelector(".box-navigation-list");

circle?.addEventListener("click", () => {
    boxNavigationList?.classList.toggle("active");
});