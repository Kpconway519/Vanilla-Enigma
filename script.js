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

let rotors = {

    rotor1: [
        ["E", "A"],
        ["K", "B"],
        ["M", "C"],
        ["F", "D"],
        ["L", "E"],
        ["G", "F"],
        ["D", "G"],
        ["Q", "H"],
        ["V", "I"],
        ["Z", "J"],
        ["N", "K"],
        ["T", "L"],
        ["O", "M"],
        ["W", "N"],
        ["Y", "O"],
        ["H", "P"],
        ["X", "Q"],
        ["U", "R"],
        ["S", "S"],
        ["P", "T"],
        ["A", "U"],
        ["I", "V"],
        ["B", "W"],
        ["R", "X"],
        ["C", "Y"],
        ["J", "Z"]
    ],
    rotor2: [
        ["A", "A"],
        ["J", "B"],
        ["D", "C"],
        ["K", "D"],
        ["S", "E"],
        ["I", "F"],
        ["R", "G"],
        ["U", "H"],
        ["X", "I"],
        ["B", "J"],
        ["L", "K"],
        ["H", "L"],
        ["W", "M"],
        ["T", "N"],
        ["M", "O"],
        ["C", "P"],
        ["Q", "Q"],
        ["G", "R"],
        ["Z", "S"],
        ["N", "T"],
        ["P", "U"],
        ["Y", "V"],
        ["F", "W"],
        ["V", "X"],
        ["O", "Y"],
        ["E", "Z"]
    ],
    rotor3: [
        ["B", "A"],
        ["D", "B"],
        ["F", "C"],
        ["H", "D"],
        ["J", "E"],
        ["L", "F"],
        ["C", "G"],
        ["P", "H"],
        ["R", "I"],
        ["T", "J"],
        ["X", "K"],
        ["V", "L"],
        ["Z", "M"],
        ["N", "N"],
        ["Y", "O"],
        ["E", "P"],
        ["I", "Q"],
        ["W", "R"],
        ["G", "S"],
        ["A", "T"],
        ["K", "U"],
        ["M", "V"],
        ["U", "W"],
        ["S", "X"],
        ["Q", "Y"],
        ["O", "Z"]
    ]
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






















