import React from 'react'

// const Country = ({ name, capital, poputlation, languages, flag }) => {
const Country = ({ country }) => {

    console.log(country.name)
    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h3>languages</h3>
            <ul>
                {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} height="100"/>

        </div>
    )
}

export default Country