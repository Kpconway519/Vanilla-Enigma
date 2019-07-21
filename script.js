let result = '';
let output = '';
let outputBox = document.getElementById('output');
let inputBox = document.getElementById('input');
let plugOne = document.getElementById('plugOne');
let plugTwo = document.getElementById('plugTwo');
let plugboardRow = document.getElementById('plugboardRow');
// console.log(outputBox.value)

// Wiring Scrambles. Index 1 corresponds with "A" and so on.
let defaultAlphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let rotorWiring1 = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ'.split('');
let rotorWiring2 = 'AJDKSIRUXBLHWTMCQGZNPYFVOE'.split('');
let rotorWiring3 = 'BDFHJLCPRTXVZNYEIWGAKMUSQO'.split('');
let rotorWiring4 = 'ESOVPZJAYQUIRHXLNFTGKDCMWB'.split('');
let rotorWiring5 = 'VZBRGITYUPSDNHLXAWMJQOFECK'.split('');


let plugboard = {
}


// each rotor, when selected, will take instantiate the class Rotor for that particular one.

class Rotor {
    constructor(initialWiring, initialRingSetting, initialPosition, initialTurnover) {
        //you need to know the wiring (AKA which rotor it is), the ringSetting, and the initial position to start
        this.rotorWiring = initialWiring;
        this.ringSetting = initialRingSetting;
        this.position = initialPosition;
        this.turnoverPoint = initialTurnover;
        this.outsideRing = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    }

    turnover(increment, array) {

        if (increment == 0) {
            return array
        } else {

            //   array rotation function:   
            for (let i = 0; i < increment; i++){
                let lastLetter = array[0]
                array.shift()
                array.push(lastLetter);
            }
            return array
        }
    }


    process(letter) {
        //this is the main function which takes in the original letter and returns the outputLetter.
        
        //set up the rotor first
        if (this.isFastRotor === true) {
            this.turnover(1, this.outsideRing)
        } else {
            //turnover at the appropriate point
            
        }
        // this.turnover(this.ringSetting, this.rotorWiring)
        console.log("Window Letter: " + this.outsideRing[0])
        //"A" comes in, the wheel advances first. this.outsideRing[0] is always the letter in the window
        let firstTrans = this.outsideRing[defaultAlphabetArray.indexOf(letter)]
        console.log('First Trans: ' + firstTrans)
        // console.log(defaultAlphabetArray.indexOf(letter))
        // console.log(this.outsideRing[0])
        // console.log(this.position)

        let secondTrans = this.rotorWiring[defaultAlphabetArray.indexOf(firstTrans)]
        console.log("Second Trans: " + secondTrans)

        if (this.ringSetting === 0) {
            return secondTrans
        } else {
            let letterIndex = defaultAlphabetArray.indexOf(secondTrans)
            return defaultAlphabetArray[letterIndex + this.ringSetting]
        }

    }
}



//these are passed into a new instance of a Rotor class as "let rotor1 = new Rotor(rotorWiring1, *stuff*)"

// wiring, ring, position, turnover point
let debugRotor = new Rotor(rotorWiring1, 1, 20, "N")





















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






















