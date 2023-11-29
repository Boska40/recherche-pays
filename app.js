let infos=document.querySelector("section");

// variables qui vont recevoir les infos du pays
var capitalDiv=document.createElement('div');
var flagDiv=document.createElement('div');
var countryDiv=document.createElement('div');
var continentDiv=document.createElement('div');

function search(){
    // on récupère la valeur du texte saisi dans l'input
    let textCountry=document.querySelector(".text").value
    countryDiv.innerHTML=`<span>Pays</span><br><p>${textCountry}</p>`

    // url de l'API où on prend les données
    let url="https://restcountries.com/v3.1/name/" + textCountry;

    fetch(url).then(response => response.json().then(data =>{
        const country=data[0];
        const capital=country.capital;
        const continent=country.continents;
        const flag=country.flags.svg;


        capitalDiv.innerHTML=`<span>Capitale</span><br><p>${capital}</p>`
        continentDiv.innerHTML=`<span>Continent</span><br><p>${continent}</p>`
        flagDiv.innerHTML=`<span>Drapeau</span><br><img src="${flag}">`

        infos.appendChild(countryDiv);
        infos.appendChild(continentDiv);
        infos.appendChild(capitalDiv);
        infos.appendChild(flagDiv);


    }))

}
