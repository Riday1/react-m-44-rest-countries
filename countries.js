const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    console.log(countries);
    const countiresHTML = countries.map(country => getCountryHTML(country))
    // console.log(countiresHTML)
    const countriesContainer = document.getElementById('country-container')
    console.log(countriesContainer)
    countriesContainer.innerHTML = countiresHTML.join(' ');

}

const getCountryHTML = (country) => {
    return `
        <div class= "country">
            <h2>${country.name.common}</h2>
            <img src = "${country.flags.png}">
        </div>
    
    `
}
loadCountries();











/* const friends = ['sabit', 'shishir', 'shorif', 'samir'];
const totalArray = friends.join(' ');
console.log(totalArray) */
