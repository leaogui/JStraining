class Teste{
    constructor(nome, idade) {
        this.idade=idade;
        this.nome=nome;
    }

    oi(){
        alert("Oi, meu nomé é "+this.nome+", tenho "+this.idade+" anos.");
    }

}

teste = new Teste("Otávio",18);