import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  },[])

  return (
    <div>
      <Search />
      {countries.map((country) => {
        return (
          <Country key={country.name} country={country} />
        )})}
    </div>
  )
}

export default App
