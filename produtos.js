class Produtos{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome
        this.dataCadastro = dataCadastro
        this.descicao =  descricao
        this.preco = preco
    }
    mostrarProduto(){
        return this.nome + this.dataCadastro + this.descricao + this.preco
    }
}
const produto = new Produtos ("Pelucia Kakyoin", "21/03/2023", "Pelucia fofa do meu amor", 50)
console.log(produto.mostrarProduto())

class ProdutosDois extends Produtos{
    constructor(nome, dataCadastro, descricao, preco, img){
        super (nome, dataCadastro, descricao, preco)
        this.img = img
    }

    mostrarProdutoDois(){
        return`
        <h1>${this.nome}</h1>`
    }
}
const produtodois = new ProdutosDois("Pelucia Kakyoin", "21/03/2023", "Pelucia fofa do meu amor", 50, "hbnuijim")
console.log(produtodois)

let Popo = document.getElementById("popo")

Popo.insertAdjacentHTML('afterbegin', produtodois.mostrarProdutoDois())