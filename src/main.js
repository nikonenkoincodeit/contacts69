import { formLnk } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formLnk.addEventListener("submit", onSubmit);

function onSubmit(e) { 
    e.preventDefault();
    /*const {
    elements: { name, number, email },
  } = e.currentTarget;
    let nameCurrent = name.value.trim();
    let numberCurrent = number.value.trim();
    let emailCurrent = email.value.trim();
    console.log(nameCurrent, numberCurrent, emailCurrent);*/
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    e.target.reset();
}