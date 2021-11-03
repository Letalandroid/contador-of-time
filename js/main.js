let i = prompt("Introduzca el inicio del contador en segundos:");
const sound = new Audio("src/soundEffect.mp3");

if (i != undefined) {

    let temporizador = setInterval(() => {

        document.getElementById("countBack").innerHTML = i;

        console.log(i);

        if (i > 20) {

            document.getElementById("countBack").style.color = "#0f0";

        } else if (i == 20) {

            document.getElementById("countBack").style.color = "#f17014";

        } else if (i == 10) {

            document.getElementById("countBack").style.color = "#f00";

        } else if (i == 0) {

            clearInterval(temporizador);
            sound.play();

            console.log("Reproduciendo despertador...")

        }

        i--;

    }, 1000)

} else {

    document.getElementById("countBack").style.fontSize = "5em";
    document.getElementById("countBack").style.color="#f00";
    document.getElementById("countBack").innerHTML = "Introduzca un valor por favor.";

}