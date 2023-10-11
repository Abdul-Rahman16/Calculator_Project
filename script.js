let darkMode = false;

function appendValue(value) {
    document.getElementById('input').value += value;
}

function clearDisplay() {
    document.getElementById('input').value='';
}

function deleteCharacter() {
    let input = document.getElementById('input');
    input.value = input.value.slice(0, -1);
}

function calculate() {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    try {
        document.getElementById('input').value = eval(input);
        output.innerText = '';
    } catch (error) {
         output.innerText = 'Invalid input';
        document.getElementById('input').value="";

    }
}

function toggleMode() {
    let calculator = document.querySelector('.calculator');

    darkMode = !darkMode;

    if (darkMode) {
        calculator.classList.add('dark-mode');
    } else {
        calculator.classList.remove('dark-mode');
    }
}




// let toogle=false;
// function toggleTheme() {
//     let calculator = document.querySelector('.calulator');
//     toggle=!toggle;
//     if(toggle){
//         calculator.classList.add('dark-mode');

//     }
//     else{
//         calculator.classList.remove('dark-mode');
//     }
//     function append(str){
//         const val=document.getElementById('input').value;
//         document.getElementById('input').value=val+Str;

//     }
//     function clearDisplay(){
//         document.getElementById('input').value="";
//     }
//     function deleteCharacter(){
//         const val = document.getElementById('input');
//         input.value=input.value.slice(0,-1);


//     }

// }