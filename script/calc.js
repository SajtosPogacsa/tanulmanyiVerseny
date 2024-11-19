const avgBtn = document.getElementById("avg")
let output = document.getElementById("output")
let back = document.getElementById("back")


function displayShield(average) {
    if (average < 3) {
        output.innerHTML = `<p> Az osztály átlaga: ${average} </p>
            <p>Gratulálok! Az osztályotok a Bronz szintet érte el.</p>
            <img src="../assets/img/bronz.png" alt="">`

    }
    else if (average < 4) {
        output.innerHTML = `<p> Az osztály átlaga: ${average} </p>
                <p>Gratulálok! Az osztályotok a Silver szintet érte el.</p>
                <img src="../assets/img/silver.png" alt="">`

    }
    else if (average < 4.5) {
        output.innerHTML =`<p> Az osztály átlaga: ${average} </p>
                <p>Gratulálok! Az osztályotok a Gold szintet érte el.</p>
                <img src="../assets/img/Gold.png" alt="">`

    }
    else if (average < 5.01) {
        output.innerHTML =`<p> Az osztály átlaga: ${average} </p>
                <p>Gratulálok! Az osztályotok a Emerald szintet érte el.</p>
                <img src="../assets/img/emerald.png" alt="">`

    }
    else {
        output.innerHTML =`                <p> Az osztály átlaga: ${average} </p>
                <p>Gratulálok! Az osztályotok a Legendás szintet érte el.</p>
                <img src="../assets/img/legends.png" alt="">`

    }
    back.style.display = "block";
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

back.addEventListener("click", () => {
    window.location.href = "../html/index.html"
})