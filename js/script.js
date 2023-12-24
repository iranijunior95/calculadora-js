const telaPreviousOperacoes = document.querySelector('#previous-operacoes');
const telaCurrentOperacoes = document.querySelector('#current-operacoes');
const botoes = document.querySelectorAll('button');

const calc = new Calculadora(telaPreviousOperacoes, telaCurrentOperacoes);

botoes.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        const valor = btns.innerText;

        if(+valor >= 0 || valor === ".") {
            console.log('numero: '+valor);
            calc.adicionarDigitos(valor);
        }else {
            
            switch (valor) {
                case 'CE':
                    console.log('operação: CE');
                    break;

                case 'backspace':
                    console.log('operação: backspace');
                    break;

                case 'percent':
                    console.log('operação: porcentagem');
                    break;

                case 'pen_size_3':
                    console.log('operação: divisao');
                    break;

                case 'close':
                    console.log('operação: multiplicação');
                    break;

                case 'remove':
                    console.log('operação: subtração');
                    break;

                case 'add':
                    calc.somar();
                    break;

                case 'equal':
                    console.log('operação: igualdade');
                    break;
            }

        }
    });
});