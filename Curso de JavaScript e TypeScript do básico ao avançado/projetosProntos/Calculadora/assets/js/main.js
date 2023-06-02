function Calculator() {
    this.display = document.querySelector('.display');

    this.addNumToDisplay = (element) => {
        this.display.value += element.innerText;
    };

    this.clearNumToDisplay = () => {
        this.display.value = '';
    };

    this.percentToDisplay = () => {
        let num = Number(this.display.value);
        this.display.value = num / 100;
    };
    
    this.backSpaceToDisplay = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.inversionToDisplay = () => {
        try {
            let num = Number(this.display.value);
            num = 1 / num;
            if(isNaN(num)) {
                alert('Conta inválida!');
                return;
            }
            this.display.value = num;         
        } catch(event) { 
            alert('Conta inválida!');
            return;
        }
    };

    this.squareToDisplay = () => {
        try {
            let num = Number(this.display.value);
            num = num**2;
            if(isNaN(num)) {
                alert('Conta inválida!');
                return;
            }
            this.display.value = num;         
        } catch(event) { 
            alert('Conta inválida!');
            return;
        }
    };

    this.squareRootToDisplay = () => {
        try { 
            let num = Number(this.display.value);
            num = Math.sqrt(num);
            if(isNaN(num)) {
                alert('Conta inválida!');
                return;
            }
            this.display.value = num;         
        } catch(event) { 
            alert('Conta inválida!');
            return;
        }
    };

    this.positiveOrNegativeToDisplay = () => {
        let num = Number(this.display.value);
        this.display.value = num*(-1);
    };

    this.runOperations  = () => {
        try {
            const op = eval(this.display.value);
            if(isNaN(op)) {
                alert('Conta inválida!');
                return;
            }
            this.display.value = op;
        } catch(event) {
            alert('Conta inválida!');
            return;
        }
    };	

    this.eventCapture = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if(element.classList.contains('btn-num') || element.classList.contains('btn-sum') || element.classList.contains('btn-subt') || element.classList.contains('btn-mult') || element.classList.contains('btn-division') || element.classList.contains('btn-dot')){
                this.addNumToDisplay(element);
            }
            if(element.classList.contains('btn-percent')){
                this.percentToDisplay();
            }
            if(element.classList.contains('btn-clear1')){
                this.clearNumToDisplay();
            }
            if(element.classList.contains('btn-backspace')){
                this.backSpaceToDisplay();
            }
            if(element.classList.contains('btn-inversion')){
                this.inversionToDisplay();
            }
            if(element.classList.contains('btn-square')){
                this.squareToDisplay();
            }
            if(element.classList.contains('btn-square-root')){
                this.squareRootToDisplay();
            }
            if(element.classList.contains('btn-positiveOrNegative')){
                this.positiveOrNegativeToDisplay();
            }
            if(element.classList.contains('btn-equals')){
                this.runOperations();
            }
        });
    };
    
    this.start = () => {
        this.eventCapture();
    };
}

const calculator = new Calculator();
calculator.start();
