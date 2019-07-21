let result = '';
let output = '';
let outputBox = document.getElementById('output');
let inputBox = document.getElementById('input');
let plugOne = document.getElementById('plugOne');
let plugTwo = document.getElementById('plugTwo');
let plugboardRow = document.getElementById('plugboardRow');
// console.log(outputBox.value)

let plugboard = {
}










// each rotor, when selected, will take instantiate the class Rotor for that particular one.

class Rotor {
    constructor(wiring, ringSetting, position, turnover) {
        //you need to know the wiring (AKA which rotor it is), the ringSetting, and the initial position to start
        this.rotorWiring = wiring;
        this.ringSetting = ringSetting;
        this.position = position;
        this.turnoverPoint = turnover;
    }

    turnover() {
        //turn this rotor over by one notch. Behavior will be different with the fast rotor, which turns over every time.

        //this function will advance this.position by 1;
        alert('works')
    }


}

// Wiring Scrambles. Turned into arrays below for easy iteration. Index 1 corresponds with "A" and so on.

let rotAlph1 = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ';
let rotAlph2 = 'AJDKSIRUXBLHWTMCQGZNPYFVOE';
let rotAlph3 = 'BDFHJLCPRTXVZNYEIWGAKMUSQO';
let rotAlph4 = 'ESOVPZJAYQUIRHXLNFTGKDCMWB';
let rotAlph5 = 'VZBRGITYUPSDNHLXAWMJQOFECK';



let rotorWiring1 = rotAlph1.split('');
let rotorWiring2 = rotAlph2.split('');
let rotorWiring3 = rotAlph3.split('');
let rotorWiring4 = rotAlph4.split('');
let rotorWiring5 = rotAlph5.split('');


























let plugboardAlphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]

// as each plugboard pair is added, it goes into the plugboard object as 2 key value pairs so it can be found by a later function from either "end". 

let fillPlugboardDropdowns = (array) => {
    plugOne.innerHTML = '';
    plugTwo.innerHTML = '';
    array.forEach((letter) => plugOne.innerHTML += `<option>${letter}</option>`)
    array.forEach((letter) => plugTwo.innerHTML += `<option>${letter}</option>`)
}

// fillPlugboardDropdowns(plugboardAlphabet)
window.onload = fillPlugboardDropdowns(plugboardAlphabet)

let addPlug = () => {

    if (plugOne.value === plugTwo.value){
        alert('You must select two different letters to connect.')
    } else {

        //remove plugOne.value and plugTwo.value from the plugboardAlphabet array 
        
        plugboardAlphabet = plugboardAlphabet.filter(letter => letter !== plugOne.value && letter !== plugTwo.value);
        

        //and add to the plugboard object
        
        // console.log(plugboard.hasOwnProperty(plugOne.value))
        plugboard[plugOne.value] = plugTwo.value
        plugboard[plugTwo.value] = plugOne.value
        console.log(plugboard)


        plugboardRow.innerHTML += `<td>${plugOne.value} <i class="fa fa-plug"></i> ${plugTwo.value} <button onclick="removePlug()">Remove</button></td>`
        
        fillPlugboardDropdowns(plugboardAlphabet)
    }
}











let input = async (e) => {
    
    // capture the keypress
let inputKey = e.data.toUpperCase();
// console.log(inputKey)
// plugboard 
console.log(plugboard[inputKey])
if(plugboard[inputKey]) {
   result += plugboard[inputKey]
} else {
    result += inputKey;
}

// rotors and positions--goes through one time, then back through.



// goes back through the plugboard again. 



//this is the output.
return outputBox.value = result;
}






















