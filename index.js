var escondido = false;

esconderSobreMim = function(){
    var sobreMim = document.getElementById("conteudo");
    this.escondido = !this.escondido;
    sobreMim.hidden = this.escondido;
    console.log(sobreMim.hidden);
};

toggleMenu = function(bool){
    var menuHamburguer = document.getElementById("backMenu");
    console.log(bool);    
    //menuHamburguer.style.height = bool ? "100%" : "0";
    menuHamburguer.style.width = bool ? "100%" : "0";
    
}