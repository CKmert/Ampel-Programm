// If Statements

function main() {

    var input = document.getElementById("inputColor")
    // Hole das InputFeld aus der HTML Datei
    var color = input.value;        
    // Value ist der Wert den man einträgt
    var lowerColorName = color.toLowerCase();
    // mache dein eingetragenen Wert zu kleinbuchstaben
    if(lowerColorName == "grün"){
        alert("Fahren !");
    } else if(lowerColorName == "gelb") {
        alert("Anfahren oder Bremsen!");
    } else if(lowerColorName == "rot") {
        alert("Anhalten!")
    } else {
        alert("Gebe eine gültige Ampel-Farbe ein!")
}
}