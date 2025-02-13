var btnYes = document.getElementById('btn-yes');
var btnNo = document.getElementById('btn-no');
let paddingValue = 50;
var clickYesBtn =  btnYes.addEventListener("click",mudarTela)
var clickNoBtn = btnNo.addEventListener("click",aumentaCaixa)



function aumentaCaixa(){
    paddingValue *= 1.5; // Dobra o valor do padding a cada clique
    btnYes.style.padding = paddingValue + 'px';  // Atualiza o estilo do padding
    btnYes.style.margin = '5px'
    
}

function mudarTela(){
    window.location.href = './pag2.html';
}
