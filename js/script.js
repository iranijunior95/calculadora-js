const telaPreviousOperacoes = document.querySelector('#previous-operacoes');
const telaCurrentOperacoes = document.querySelector('#current-operacoes');
const botoes = document.querySelectorAll('button');

const calc = new Calculadora(telaPreviousOperacoes, telaCurrentOperacoes);

botoes.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        const valor = btns.innerText;

        if(+valor >= 0 || valor === ".") {
            calc.adicionarDigitos(valor);
        }else {
            
            switch (valor) {
                case 'CE':
                    calc.limparTela();
                    break;

                case 'backspace':
                    calc.deletarDigito();
                    break;

                case 'percent':
                    calc.porcentagem();
                    break;

                case 'pen_size_3':
                    calc.dividir();
                    break;

                case 'close':
                    calc.multiplicar();
                    break;

                case 'remove':
                    calc.subtrair();
                    break;

                case 'add':
                    calc.somar();
                    break;

                case 'equal':
                    calc.igualdade();
                    break;
            }

        }
    });
});