const countries = document.querySelector('.countries');
const btn     = document.querySelector('.btn');


infoCountries = async (codes) => {
    let res  = await fetch('https://restcountries.com/v3.1/alpha?codes='+codes);
    let info = await res.json();
    //console.log(info);
    countries.innerHTML = "<h3>"+ info.codes +" - " + info.common + "</h3>" + 
                        "<img src='"+ info.flags['front_default'] +"'>";
}

randomNumber = () => {
    return Math.ceil(Math.random()*862);
}


btn.onclick = () => {
    infoCountries(randomNumber());
}

infoCountries(randomNumber());