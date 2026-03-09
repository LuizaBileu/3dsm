class celular{
    constructor(marca, cor, modelo, bateria, ligado){
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
        this.bateria = bateria;
        this.ligado = false;
    }

    ligarCelular(){
        this.ligado = true
    }

    mostrarBateria(){
        return `Essa é a porcentagem do seu celular${this.bateria}`
    }

    carregarCelular(porcentagem){
        this.bateria += porcentagem  
    }
}