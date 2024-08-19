import './styles.css'
import { hamburgerChange, reusableBtnFunction } from '../drop-down-btn'

const dropDownFunction = () => {
    const dropDownBtn = document.querySelector(".drop-down-button")
    reusableBtnFunction()

    dropDownBtn.addEventListener("click", () => {
        hamburgerChange()
    })
}

document.addEventListener('DOMContentLoaded', dropDownFunction);