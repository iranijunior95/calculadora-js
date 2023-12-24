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

            }

            return;
        }

        const previous = +this.telaPreviousOperacoesText.innerText.split(" ")[0];
        const current = +this.telaCurrentOperacoesText.innerText;

        const valorOperacao = previous + current;

        this.atualizaTela(valorOperacao, '+', current, previous);
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
}