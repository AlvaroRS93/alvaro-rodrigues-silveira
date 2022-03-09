var escondido = false;

esconderSobreMim = function(){
    var sobreMim = document.getElementById("conteudo");
    this.escondido = !this.escondido;
    sobreMim.hidden = this.escondido;
    console.log(sobreMim.hidden);
};