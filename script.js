
let resultLetter = '';
let result = '';
let output = '';
let outputBox = document.getElementById('output');
let inputBox = document.getElementById('input');
let plugOne = document.getElementById('plugOne');
let plugTwo = document.getElementById('plugTwo');

let rotorOne = document.getElementById('rotorOne');
let rotorTwo = document.getElementById('rotorTwo');
let rotorThree = document.getElementById('rotorThree');

let rotorOnePosition = document.getElementById('rotorOnePosition');
let rotorTwoPosition = document.getElementById('rotorTwoPosition');
let rotorThreePosition = document.getElementById('rotorThreePosition');
let plugboardRow = document.getElementById('plugboardRow');
// console.log(outputBox.value)

// Wiring Scrambles. Index 1 corresponds with "A" and so on.
let defaultAlphabetArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let rotorWiring1 = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ'.split(''); // Q to R turnover next
let rotorWiring2 = 'AJDKSIRUXBLHWTMCQGZNPYFVOE'.split(''); // E to F turnover next
let rotorWiring3 = 'BDFHJLCPRTXVZNYEIWGAKMUSQO'.split(''); // V to W turnover next
let rotorWiring4 = 'ESOVPZJAYQUIRHXLNFTGKDCMWB'.split(''); // J to K turnover next
let rotorWiring5 = 'VZBRGITYUPSDNHLXAWMJQOFECK'.split(''); // Z to A turnover next

let turnoverNextRotor = false;


let plugboard = {
}


// each rotor, when selected, will take instantiate the class Rotor for that particular one.

class Rotor {
    constructor(initialWiring, initialPosition, initialTurnover, rotorOrder) {
        //you need to know the wiring (AKA which rotor it is), the ringSetting, and the initial position to start
        this.rotorWiring = initialWiring;
        this.position = initialPosition;
        this.turnoverPoint = initialTurnover;
        this.outsideRing = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.rotorOrder = rotorOrder;
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

            // determine turnover for the next rotor
                // if (this.rotorWiring === )
        console.log('turnover is ' + this.turnoverPoint)

                // if the turnover point is the same as the window letter, the turnover function will advance the wheel right after that, and in that case, the turnoverNextRotor should be set to true
            if (this.turnoverPoint === this.outsideRing[0]) {
                turnoverNextRotor = true;
            }


            // turnover the rotor if appropriate

        if (this.rotorOrder === 1) {
            this.turnover(1, this.outsideRing)
        } else if (this.rotorOrder === 2 && turnoverNextRotor === true) {
            this.turnover(1, this.outsideRing)
        } else if (this.rotorOrder === 3 && turnoverNextRotor === true) {
            this.turnover(1, this.outsideRing)
        } else {
            console.log('Error: Rotor Order may not be selected')
        }
        // this.turnover(this.ringSetting, this.rotorWiring)
        console.log("Window Letter: " + this.outsideRing[0])
        //"A" comes in, the wheel advances first. this.outsideRing[0] is always the letter in the window
        let firstTrans = this.outsideRing[defaultAlphabetArray.indexOf(letter)]
        console.log('First Trans: ' + firstTrans)
        // console.log(defaultAlphabetArray.indexOf(letter))
        // console.log(this.outsideRing[0])
        // console.log(this.position)
        
        // this returns the letter position correctly, despite the actual letter in the internal wiring
        let secondTrans = this.rotorWiring[defaultAlphabetArray.indexOf(firstTrans)]
        console.log("Second Trans: " + secondTrans)

            return secondTrans

    }
}



//these are passed into a new instance of a Rotor class as "let rotor1 = new Rotor(rotorWiring1, *stuff*)"

// wiring, position, turnover point, rotor order
let debugRotor1 = new Rotor(rotorWiring1, 0, "Q", 1)
let debugRotor2 = new Rotor(rotorWiring2, 0, "Q", 1)
let debugRotor3 = new Rotor(rotorWiring3, 0, "Q", 1)

let rotorConstructor = () => {

}

let forwardRotors = (letter) => {

}

let backwardRotors = (letter) => {

}








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

// let rotorSelect = "I II III IV V".split(' ')
let rotorPosition = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

// as each plugboard pair is added, it goes into the plugboard object as 2 key value pairs so it can be found by a later function from either "end". 

let fillPlugboardDropdowns = (array) => {
    plugOne.innerHTML = '';
    plugTwo.innerHTML = '';
    array.forEach((letter) => plugOne.innerHTML += `<option>${letter}</option>`)
    array.forEach((letter) => plugTwo.innerHTML += `<option>${letter}</option>`)
}

let fillRotorDropdowns = (array, rotor) => {
    rotor.innerHTML = '';
    array.forEach((rotorSetting) => rotor.innerHTML += `<option>${rotorSetting}</option>`);
}

    // fill rotor function. checks for if has been selected. if not, fill. default I, II, III

let fillRotor = () => {
    let rotorSelect = "I II III IV V".split(' ');

    // Fill the rotor dropdowns with default setting
    rotorSelect.splice(/* rotorSelect[i], rotorSelect[i] */);
    
    fillRotorDropdowns(rotorSelect, rotorOne);
    fillRotorDropdowns(rotorSelect, rotorTwo);
    fillRotorDropdowns(rotorSelect, rotorThree);

    rotorOne.value = 'I';
    rotorTwo.value = 'II';
    rotorThree.value = 'III';

}

let fillRotorPositionDropdowns = (array) => {
    rotorOne.innerHTML = '';
    rotorTwo.innerHTML = '';
    rotorThree.innerHTML = '';
    array.forEach((rotor) => rotorOnePosition.innerHTML += `<option>${rotor}</option>`)
    array.forEach((rotor) => rotorTwoPosition.innerHTML += `<option>${rotor}</option>`)
    array.forEach((rotor) => rotorThreePosition.innerHTML += `<option>${rotor}</option>`)
}

let selectRotors = () => {

    rotorOne.value
    rotorTwo.value
    rotorThree.value

    // wiring, position, turnover, 
    let rotor1 = new Rotor(/*rotor wiring */, rotorPosition.indexOf(rotorOnePosition.value), /* rotor turnover position */, 1)
    let rotor2 = new Rotor(/*rotor wiring */, rotorPosition.indexOf(rotorTwoPosition.value), /* rotor turnover position */, 2)
    let rotor3 = new Rotor(/*rotor wiring */, rotorPosition.indexOf(rotorThreePosition.value), /* rotor turnover position */, 3)

    if (rotorOne.value === 'I'){
        console.log('works')
        let rotor1 = new Rotor(rotorWiring1, 0, "Q", 1)    
    } else if (rotorOne.value === 'II') {

    } else if (rotorOne.value === 'III') {

    } else if (rotorOne.value === 'IV') {

    } else if (rotorOne.value === 'V') {

    }
}


// fillPlugboardDropdowns(plugboardAlphabet)
window.onload = function() {
    fillPlugboardDropdowns(plugboardAlphabet)
    fillRotorPositionDropdowns(rotorPosition)
    // fillRotorDropdowns(rotorSelect)
    fillRotor();
}

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
// console.log(plugboard[inputKey])
if(plugboard[inputKey]) {
//    result += plugboard[inputKey]
   resultLetter = plugboard[inputKey]
} else {
    resultLetter = inputKey;
}
console.log(resultLetter)

// rotors and positions--goes through one time, then back through.



// goes back through the plugboard again. 



//this is the output.
// return outputBox.value = result;
}





console.log(rotorPosition[rotorPosition.indexOf(rotorOnePosition.value)])

















