function main() {
    const form = document.querySelector('.form');
    const inputCPF = document.querySelector('#input');
    const result = document.querySelector('.result');
    // const sendButton = document.querySelector('.btn');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        let cleanCPF = inputCPF.value.replace(/\D+/g, '');
        let mult = 10;
        cleanCPF = Array.from(cleanCPF);        
        let firstDigite = cleanCPF.reduce((acc, obj, pos) => {            
            if(pos < 9){
                acc = acc + (obj * mult);
                mult--;
            }
            return acc;
        }, 0);        
        firstDigite = 11 - (firstDigite % 11);
        if(firstDigite > 9){
            firstDigite = 0;
        }
        mult = 11;
        let secondDigite = cleanCPF.reduce((acc, obj, pos) => {            
            if(pos < 10){
                acc = acc + (obj * mult);
                mult--;
            }
            return acc;
        }, 0);
        secondDigite = 11 - (secondDigite % 11);
        if(secondDigite > 9){
            secondDigite = 0;
        }
        if (firstDigite === Number(cleanCPF[9]) && secondDigite === Number(cleanCPF[10])){
            result.classList.remove('h1invalid');
            result.innerHTML = `${cleanCPF.join('')} é Válido!`;
        } else {
            result.classList.add('h1invalid');
            result.innerHTML = `${cleanCPF.join('')} não é Válido!`;
        }
        inputCPF.value = '';
    });
}
main();