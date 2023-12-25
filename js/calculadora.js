class Calculadora {
    constructor(telaPreviousOperacoesText, telaCurrentOperacoesText) {
        this.telaPreviousOperacoesText = telaPreviousOperacoesText;
        this.telaCurrentOperacoesText = telaCurrentOperacoesText;
        this.currentOperacoes = "";
    }

    adicionarDigitos(digito) {

        if(digito === "." && this.telaCurrentOperacoesText.innerText.includes(".")) {
            return;
        }

        this.currentOperacoes = digito;
        this.atualizaTela();
    }

    somar() {

        if(this.telaCurrentOperacoesText.innerText === "") {
            if(this.telaPreviousOperacoesText.innerText !== "") {
                this.changeOperacao('+');
            }

            return;
        }

        const previous = +this.telaPreviousOperacoesText.innerText.split(" ")[0];
        const current = +this.telaCurrentOperacoesText.innerText;

        const valorOperacao = previous + current;

        this.atualizaTela(valorOperacao, '+', current, previous);
    }

    subtrair() {

        if(this.telaCurrentOperacoesText.innerText === "") {
            if(this.telaPreviousOperacoesText.innerText !== "") {
                this.changeOperacao('-');
            }

            return;
        }

        const previous = +this.telaPreviousOperacoesText.innerText.split(" ")[0];
        const current = +this.telaCurrentOperacoesText.innerText;

        const valorOperacao = previous - current;

        this.atualizaTela(valorOperacao, '-', current, previous);
    }

    multiplicar() {

        if(this.telaCurrentOperacoesText.innerText === "") {
            if(this.telaPreviousOperacoesText.innerText !== "") {
                this.changeOperacao('*');
            }

            return;
        }

        const previous = +this.telaPreviousOperacoesText.innerText.split(" ")[0];
        const current = +this.telaCurrentOperacoesText.innerText;

        const valorOperacao = previous * current;

        this.atualizaTela(valorOperacao, '*', current, previous);
    }

    dividir() {

        if(this.telaCurrentOperacoesText.innerText === "") {
            if(this.telaPreviousOperacoesText.innerText !== "") {
                this.changeOperacao('/');
            }

            return;
        }

        const previous = +this.telaPreviousOperacoesText.innerText.split(" ")[0];
        const current = +this.telaCurrentOperacoesText.innerText;

        const valorOperacao = previous / current;

        this.atualizaTela(valorOperacao, '/', current, previous);
    }

    porcentagem() {
        if(this.telaPreviousOperacoesText.innerText === "") {
            return;
        }

        const operacao = this.telaPreviousOperacoesText.innerText.split(" ")[1];

        const previous = +this.telaPreviousOperacoesText.innerText.split(" ")[0];
        const current = +this.telaCurrentOperacoesText.innerText;

        if(operacao === '*') {
            const valorOperacao = eval((previous * current / 100));

            this.atualizaTela(valorOperacao, operacao, current, previous);
        }else if(operacao === '/') {
            const valorOperacao = eval(previous / (current / 100));

            this.atualizaTela(valorOperacao, operacao, current, previous);
        }else {
            const valorOperacao = eval(previous + operacao + (previous * current / 100));

            this.atualizaTela(valorOperacao, operacao, current, previous);
        }
    }

    igualdade() {
        if(this.telaPreviousOperacoesText.innerText === "") {
            return;
        }

        const operacao = this.telaPreviousOperacoesText.innerText.split(" ")[1];

        const previous = +this.telaPreviousOperacoesText.innerText.split(" ")[0];
        const current = +this.telaCurrentOperacoesText.innerText;

        const valorOperacao = eval(previous + operacao + current);

        this.atualizaTela(valorOperacao, operacao, current, previous);
    }

    atualizaTela(operacaoValor = null, operacao = null, current = null, previous = null) {

        if(operacaoValor === null) {
            this.telaCurrentOperacoesText.innerText += this.currentOperacoes;
        }else {

            if(previous === 0) {
                operacaoValor = current;
            }

            this.telaPreviousOperacoesText.innerText = `${operacaoValor} ${operacao}`;
            this.telaCurrentOperacoesText.innerText = "";
        }
        
    }

    changeOperacao(operacao) {

        const mathOperacoes = ["+", "-", "*", "/"];

        if(!mathOperacoes.includes(operacao)) {
            return;
        }

        this.telaPreviousOperacoesText.innerText = this.telaPreviousOperacoesText.innerText.slice(0, -1) + operacao;
    }

    deletarDigito() {
        this.telaCurrentOperacoesText.innerText = this.telaCurrentOperacoesText.innerText.slice(0, -1);
    }

    limparTela() {
        this.telaCurrentOperacoesText.innerText = "";
        this.telaPreviousOperacoesText.innerText = "";
    }
}