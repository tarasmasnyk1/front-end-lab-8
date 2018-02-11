function convertion(){
    
    const peroneEuro = 34.5116;
    const peroneUsd = 27.7424;
    const error = "Incorrect Data";
    
    var usd = Number(prompt("Amount of USD", ));
    var euro = Number(prompt("Amount of EURO", ));
    
    
    if(isCorrect(euro, usd))
    {
        resEuro = Math.round((euro*perOneEuro)*1000)/1000;
        resUsd = Math.round((usd*perOneEuro)*1000)/1000;
        resUsdAndEuro = Math.round((perOneEuro/perOneUsd)*1000)/1000;
            }
    else console.log(error);
}

