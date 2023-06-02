class ValidaCPF {

    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
    
    geraDigito(cpfSemDigitos){
        cpfSemDigitos = Array.from(cpfSemDigitos);
        let mult = cpfSemDigitos.length + 1;
        let total = cpfSemDigitos.reduce((acc, obj, pos) => {            
            if(pos < cpfSemDigitos.length){
                acc = acc + (obj * mult);
                mult--;
            }
            return acc;
        }, 0);
        const digito = 11 - (total % 11);
        if(digito <= 9){
            return String(digito);
        } else {
            return 0;
        }
    }

    geraCPF(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraCPF();
        return this.novoCPF === this.cpfLimpo;
    }
}

class LoadPage {
    constructor(page){
        Object.defineProperty(this, 'page', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: page
        });
    }

    async loadPageFetch(){
        try {
            let parser = new DOMParser();
            const response = await fetch(this.page);
            if(response.status !== 200) throw new Error('Erro de carregamento');
            const html = await response.text();
            let doc = parser.parseFromString(html, "text/html");
            return doc;
        } catch(e){
            console.log(e); 
        }
    }
}

class ShowResult {
    constructor(document, cpf){
        Object.defineProperty(this, 'document', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: document
        });

        Object.defineProperty(this, 'cpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf
        });
    }
    
    alterDoc(selector, flag) {
        if(flag){
            const result = this.document.querySelector(selector);
            result.classList.remove('h1invalid');
            result.innerHTML = `${this.cpf} é Válido!`;
        } else {
            const result = this.document.querySelector(selector);
            result.classList.add('h1invalid');
            result.innerHTML = `${this.cpf} não é Válido!`;
        }
    }

    loadResults(selector, response) {
        const result = document.querySelector(selector);
        result.innerHTML = response;
    }
}

function main(){
    try {
        const form = document.querySelector('.form');
        const inputCPF = document.querySelector('#input');
        const result = document.querySelector('.result');
        form.addEventListener('submit', function(event){
            event.preventDefault();
            const pLoad = new LoadPage('result.html');        
            const cpf = new ValidaCPF(inputCPF.value);
            if(cpf.valida()){
                pLoad.loadPageFetch().then(value => {
                    const result = new ShowResult(value, cpf.cpfLimpo);
                    result.alterDoc('.result', true);
                    result.loadResults('.results', result.document.documentElement.innerHTML);
                });
            } else {
                pLoad.loadPageFetch().then(value => {
                    const result = new ShowResult(value, cpf.cpfLimpo);
                    result.alterDoc('.result', false);
                    result.loadResults('.results', result.document.documentElement.innerHTML);
                });
            }
        });
    } catch (e) {
        console.log(e);
    }
} main();