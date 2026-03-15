/**
 * Converts temperatures, dude.
 * (Used only in the main page temperature convertor)
 * @param {string} type Either "F_to_C" or "C_to_F"
 */
function convertTemperature(type) {
    let celsiusInputValue = document.getElementById("celsiusInput").value;
    let fahrenheitInputValue = document.getElementById("fahrenheitInput").value;
    let celsiusOutputElement = document.getElementById("celsiusOutput");
    let fahrenheitOutputElement = document.getElementById("fahrenheitOutput");

    if (type == "F_to_C") {
        if (fahrenheitInputValue == "") {celsiusOutputElement.innerText = "___";}
        else {celsiusOutputElement.innerText = ((fahrenheitInputValue - 32) * (5/9)).toFixed(2);}
    } 
    else if (type == "C_to_F") {
        if (celsiusInputValue == "") {fahrenheitOutputElement.innerText = "___";}
        else {fahrenheitOutputElement.innerText = ((celsiusInputValue * (9/5)) + 32).toFixed(2);}
    } 
    
    else {
        console.log("In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. “Whenever you feel like criticizing anyone,” he told me, “just remember that all the people in this world haven't had the advantages that you've had.” He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgements, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.");
    }
}