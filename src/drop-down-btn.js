




export const hamburgerChange = () => {
    const buttonContainer = document.querySelector('.button-container')

    buttonContainer.classList.toggle('active')
    
}

export const reusableBtnFunction = () => {
    const buttons = document.querySelectorAll('.drop-down-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            const targetContainerSelector = button.id.replace('btn-', 'dropdown-')
            const container = document.querySelector(`.drop-down-container[data-target="${targetContainerSelector}"]`);
            
                container.classList.toggle('expanded');
                container.classList.toggle('minimized');

        });
    });
};