import './styles.css'
import { dropDown } from '../drop-down-btn'

const dropDownFunction = () => {
    const dropDownBtn = document.querySelector(".drop-down-button")

    dropDownBtn.addEventListener("click", dropDown)
}

dropDownFunction()