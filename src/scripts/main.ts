import "../styles/style.scss";
import "../styles/reset.scss";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const circle: HTMLDivElement = document.querySelector(".box-circle-menu")!;
const boxNavigationList: HTMLUListElement = document.querySelector(".box-navigation-list")!;
const iconHouse: HTMLElement = document.querySelector(".bi-list")!;

circle!.onclick = () => {
    boxNavigationList?.classList.toggle("active");
    iconHouse.classList.toggle("bi-x");
};