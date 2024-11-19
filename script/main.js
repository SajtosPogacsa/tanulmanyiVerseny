const calcBtn = document.getElementById("calc")

if (calcBtn) {
    calcBtn.addEventListener("click", ()=> {
        window.location.href = "../html/calc.html"
    })
}

let shields = document.querySelectorAll('.front')

shields.forEach(shield => {
    shield.addEventListener("mouseover", ()=> {
        shield.nextElementSibling.style.display = 'block'
    })

    shield.addEventListener("mouseout", ()=> {
        shield.nextElementSibling.style.display = 'none'
    })
})


