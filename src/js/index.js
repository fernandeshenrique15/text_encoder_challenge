function removeError(inputEntry){
    if(inputEntry.classList.contains('is-error')) {
        inputEntry.classList.remove('is-error');
    }
}

function addError(inputEntry){
    inputEntry.classList.add('is-error');
}

function scrollMobile(){
    if(window.matchMedia("(max-width: 768px)").matches){
        window.scrollTo(0, 900);
    }
}

function copy(){
    var inputOutput = document.getElementById('inputOutput');
    inputOutput.select();
    inputOutput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputOutput.value);
}

function encrypt() {
    var inputEntry = document.getElementById('inputEntry');
    var inputOutput = document.getElementById('inputOutput');
    var divNoContent = document.getElementById('no-content');
    var divResult = document.getElementById('result');
    var textEntry = inputEntry.value;
    inputOutput.value = '';
    var textOutput = inputOutput.value;

    if(textEntry == ""){
        addError(inputEntry);
    } else {
        removeError(inputEntry);
        for (var i = 0; i < textEntry.length; i++) {
            var charAt = textEntry.charAt(i);
            
            if(charAt === 'e'){
                textOutput += 'enter';
            } else if(charAt === 'i'){
                textOutput += 'imes';
            } else if(charAt === 'a'){
                textOutput += 'ai';
            } else if(charAt === 'o'){
                textOutput += 'ober';
            } else if(charAt === 'u'){
                textOutput += 'ufat';
            } else {
                textOutput += charAt;
            }
        }

        divNoContent.style.display = "none";
        divResult.style.display = "table-cell";
        inputOutput.value = textOutput;

        scrollMobile();

    }
}

function decrypt() {
    var inputEntry = document.getElementById('inputEntry');
    var inputOutput = document.getElementById('inputOutput');
    var divNoContent = document.getElementById('no-content');
    var divResult = document.getElementById('result');
    var textEntry = inputEntry.value;
    inputOutput.value = '';
    var textOutput = inputOutput.value;
    
    if(textEntry == ""){
        addError(inputEntry);
    } else {
        removeError(inputEntry);
        for (var i = 0; i < textEntry.length; i++) {
            var restLetters = '';
            var charAt = textEntry.charAt(i);                    
            if(charAt === 'e'){
                restLetters = textEntry.substring(i, i+5);
                if(restLetters === 'enter'){
                    textOutput += 'e';
                    i += 4;
                } else {
                    textOutput += charAt;
                }
            } else if(charAt === 'i'){
                restLetters = textEntry.substring(i, i+4);
                if(restLetters === 'imes'){
                    textOutput += 'i';
                    i += 3;
                } else {
                    textOutput += charAt;
                }
            } else if(charAt === 'a'){
                restLetters = textEntry.substring(i, i+2);
                if(restLetters === 'ai'){
                    textOutput += 'a';
                    i += 1;
                } else {
                    textOutput += charAt;
                }
            } else if(charAt === 'o'){
                restLetters = textEntry.substring(i, i+4);
                if(restLetters === 'ober'){
                    textOutput += 'o';
                    i += 3;
                } else {
                    textOutput += charAt;
                }
            } else if(charAt === 'u'){
                restLetters = textEntry.substring(i, i+4);
                if(restLetters === 'ufat'){
                    textOutput += 'u';
                    i += 3;
                } else {
                    textOutput += charAt;
                }
            } else {
                textOutput += charAt;
            }
        }

        divNoContent.style.display = "none";
        divResult.style.display = "table-cell";
        inputOutput.value = textOutput;

        scrollMobile();
    }
}