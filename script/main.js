const calcBtn = document.getElementById("calc")
const avgBtn = document.getElementById("avg")

if (calcBtn) {
    calcBtn.addEventListener("click", ()=> {
        window.location.href = "../html/calc.html"
    })
}

avgBtn.addEventListener("click", () => {
    let input = document.getElementById("input")
    let sum = 0;


    let data = input.value.split(",")
    data.forEach(element => {
        sum += parseInt(element)
    });

    let average = sum / data.length
    displayShield(average)
})


function displayShield(average) {
    let output = document.getElementById("output")
    output.innerHTML += `Az osztály átlaga ${average}`
}