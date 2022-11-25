const cardapioDeCafe = ['Espresso', 'Americano', 'Cappucino', 'Latte', 'Mocha']
const cardapioDeSalgados = ['Pão de queijo', 'Pão na chapa', 'Cueca virada', 'Torta de limão']
const cardapio = cardapioDeCafe.concat(cardapioDeSalgados)
console.log(cardapio)

const escolherAlgoParaComer = () => {
    cardapio.sort()
    console.log(cardapio.sort())
}

escolherAlgoParaComer()

cardapio.length