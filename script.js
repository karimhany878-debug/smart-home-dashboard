
function light() {
    let lightElement = document.querySelector("#light_statues");
    
    if (lightElement.textContent === "OFF") {
        lightElement.textContent = "ON";
        alert("Turning lightss on");
    } 
    else {
        lightElement.textContent = "OFF";
        alert("Turning lightss off");
    }
}
//انا اتعلمت من yahya tech حاجات ممتازه بجد انصح المبتدئين بمتابعته لان شرحه فعال و شكرا