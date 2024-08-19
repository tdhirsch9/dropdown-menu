
export const dropDown = () => {
    const buttonContainer = document.querySelector('.button-container')
    const dropDownContainer = document.querySelector(".drop-down-container")
    if (dropDownContainer.classList.contains("minimized")){
        dropDownContainer.classList.remove("minimized")
        dropDownContainer.classList.add("expanded")
        buttonContainer.classList.add("active")
    } else{
        dropDownContainer.classList.remove("expanded")
        dropDownContainer.classList.add("minimized")
        buttonContainer.classList.remove("active")
    }

}