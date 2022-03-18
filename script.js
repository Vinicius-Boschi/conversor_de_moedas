function Conversion() {
    let valorElemento = document.querySelector("#valor").value
    let conversion = document.querySelector("#conversionValue")
    let list = document.querySelector("#dropdown").value
    let Dolar = parseFloat(valorElemento)
    let Real = Dolar * 5.02
    let Euro = Dolar * 0.91
    let Libra = Dolar * 0.76
    let Iene = Dolar * 119.19

    switch(list) { 
      case "real": 
        conversion.innerHTML = `${Real.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} reais.`
        break
      case "euro":
        conversion.innerHTML = `${Euro.toLocaleString("de-De", {style: "currency", currency: "EUR"})} euros.`
        break
      case "libra":
        conversion.innerHTML = `${Libra.toLocaleString("en-Gb", {style: "currency", currency: "GBP"})} libras.`
        break
      case "iene":
        conversion.innerHTML = `${Iene.toLocaleString("ja-JP", {style: "currency", currency: "JPY"})} ienes.`
        break 
      default:  
        conversion.innerHTML = "<h3 style='color: red'>Erro, por favor digite um número válido.<h3>"
        break
    }
}    