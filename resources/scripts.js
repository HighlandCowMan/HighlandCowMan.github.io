/**
 * Converts temperatures, dude.
 * (Used in the main page temperature convertor)
 * @param {string} type Either "F_to_C" or "C_to_F"
 */
function convertTemperature(type) {
    let celsiusInput = document.getElementById("celsiusInput").value;
    let fahrenheitInput = document.getElementById("fahrenheitInput").value;
    let celsiusOutput = document.getElementById("celsiusOutput");
    let fahrenheitOutput = document.getElementById("fahrenheitOutput");


    if (type == "F_to_C") {
        celsiusOutput.innerText = ((fahrenheitInput - 32) * (5/9)).toFixed(2);
    } 
    else if (type == "C_to_F") {
        fahrenheitOutput.innerText = ((celsiusInput * (9/5)) + 32).toFixed(2);
    } 
    
    else {
        console.log("In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. “Whenever you feel like criticizing anyone,” he told me, “just remember that all the people in this world haven't had the advantages that you've had.” He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgements, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.");
    }
}