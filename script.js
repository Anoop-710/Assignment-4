const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
    panel.addEventListener('click' , () => {
        removePreviousPanel();
        panel.classList.add('active')
    })
})


function removePreviousPanel(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}