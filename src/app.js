import "regenerator-runtime";
import "bootstrap";
import "./scss/app.scss";
import "./styles/style.css";
import "../src/scripts/component/landing-page";
import "../src/scripts/component/modal-box";
import swal from 'sweetalert';
import main from "../src/scripts/view/main";


document.addEventListener("DOMContentLoaded", main, swal);