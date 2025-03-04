/**
 * Simulador dos operadoreslógicos AND - OR - NOT
 * @author Davi do couto
 */

let recive //Essa variável armazena o parâmetro(valor) recebido do HTML
//As variáveis abaixo são usadas para identificar se o interruptor esta ligado ou desligado (false = desligado | true = ligado)

let sw1 = false
let sw2 = false

//A variável abaixo é usada para verificar se a lâmpaa está quebrada
let broken = false

//A linha abaixo cria uma variável que identifica página HTML
let path = window.location.pathname
alert(path)
// alert(path) apoio ao entendimento dal´gica

function sw(recive) {
    // console.log(recive) | Apoio a lógica

    //lógica para os interruptores
    if (recive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if (recive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    } else if (recive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if (recive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }

    //lógica para quebrar a lâmpada
    if (recive === 3) {
        //A linha abaixo cria um objeto usando a classe Audio
        let som = new Audio()
        console.log(typeof (som))
        som.src = "sound/glassbreaking.wav"
        som.play()

        //Manipulação do DOM
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }

    //Se estiver na página AND e a lampada não estiver quebarada
    if (path === '/and.html' && broken !== true) {
        //lógica para o operador AND
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    //Se estiver na página OR e a lampada não estiver quebarada. se quebrar a lampada, nada mais acende
    if (path === '/or.html' && broken !== true) {
        //lógica para o operador OR
        if (sw1 === true || sw2 === true) {//Se ligar um, liga a lamapada, não precisa ligar os dois para ligar a lampada, pq ta no OU
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    //Se estiver na página NOT e a lampada não estiver quebarada. se quebrar a lampada, nada mais acende
    if (path === '/not.html' && broken !== true) {
        //lógica para o operador NOT
        if (!sw1) {//Se ligar um, liga a lamapada, não precisa ligar os dois para ligar a lampada, pq ta no OU
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }






}