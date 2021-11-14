const login = () => {
        let user = document.getElementById("user").value;
        let password= document.getElementById("password").value;

        if (user==="CODERHOUSE" && password==="JAVASCRIPT"){
                alert ("Welcome")
        } else {
                alert ("Wrong user or password.")
        }
}



// EJERCICIO COMPLEMENTARIO. 

 

/*
const  subscriptionOne = () => {
        let payOne = confirm("Este plan tiene un valor de: $1000 + IVA.")
        let priceOne = parseInt(1000)
        let ivaOne = parseInt((priceOne*21) /100 )
        let totalValue= parseInt((priceOne + ivaOne  ))

        if(payOne) {
                alert (`Gracias por suscribirse el valor final es ${totalValue}` )
        } else {
                alert(`Esperamos verte pronto!`)
        }

}

const  subscriptionTwo = () => {
        let payTwo = confirm("Este plan tiene un valor de: $1500 + IVA.")
        let priceTwo = parseInt(1500)
        let ivaTwo = parseInt((priceTwo*21) /100 )
        let totalValue= parseInt((priceTwo + ivaTwo  ))
        
        if(payTwo) {
                alert (`Gracias por suscribirse el valor final es ${totalValue}` )
        } else {
                alert(`Esperamos verte pronto!`)
        }

}

const  subscriptionThree = () => {
        let payThree = confirm("Valor: $2000 + IVA.")
        let priceThree = parseInt(2000)
        let ivaThree = parseInt((priceThree*21) /100 )
        let totalValue= parseInt((priceThree + ivaThree  ))
        
        if(payThree) {
                alert (`Gracias por suscribirse el valor final es ${totalValue}` )
        } else {
                alert(`Esperamos verte pronto!`)
        }

}
*/