let result = '';
let output = '';
let outputBox = document.getElementById('output');
let inputBox = document.getElementById('input');
let plugOne = document.getElementById('plugOne');
let plugTwo = document.getElementById('plugTwo');
let plugboardRow = document.getElementById('plugboardRow');
// console.log(outputBox.value)

// Wiring Scrambles. Index 1 corresponds with "A" and so on.

let outsideRingDefault = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let rotorWiring1 = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ'.split('');
let rotorWiring2 = 'AJDKSIRUXBLHWTMCQGZNPYFVOE'.split('');
let rotorWiring3 = 'BDFHJLCPRTXVZNYEIWGAKMUSQO'.split('');
let rotorWiring4 = 'ESOVPZJAYQUIRHXLNFTGKDCMWB'.split('');
let rotorWiring5 = 'VZBRGITYUPSDNHLXAWMJQOFECK'.split('');


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
        this.outsideRing = outsideRingDefault;
    }

    turnover(increment, array) {

        //this function will advance this.position by 1;
        alert('works')

        //   array rotation function:   
            for (let i = 0; i < increment; i++){
                let lastLetter = array[array.length - 1]
                array.pop()
                array.unshift(lastLetter);
                // console.log('works')
            }
            return array
    }


    process(letter) {
        //this is the main function which takes in the original letter and returns the outputLetter.
    
        //"A" comes in
        // you have to know the ringSetting offset and that will give you the translation for "A"
            //position is let position = outsideRing.indexOf(letter)
        // the translated "A" is now transLetter1 **This is the index in the wiring array**
            // let transLetter1 = this.rotorWiring[position]
        // transLetter 1 becomes transLetter2 **This is the letter of the wiring array**
        // transLetter 2 becomes the outputLetter **This is determined by position. How?**

        // return outputLetter;
    }
}



//these are passed into a new instance of a Rotor class as "let rotor1 = new Rotor(rotorWiring1, *stuff*)"

let debugRotor = new Rotor(rotorWiring1, 1, 1, "N")





















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






















