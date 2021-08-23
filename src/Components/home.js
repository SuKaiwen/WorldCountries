import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CountryCard from './countryCard';

function Home() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        await setCountries(data);
    }

    const filterByContinent = async continent => {
        if(continent === '') return;
        const res = await fetch(`https://restcountries.eu/rest/v2/region/${continent}`);
        const data = await res.json();
        await setCountries(data);
    }

    const searchCountry = async term => {
        if(term.length < 3 || term === '') return;
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`);
        const data = await res.json();
        console.log(data);
        await setCountries(data);
    }

    return (
        <div id="dark" className="bg-gray-100">
            <div id="dark" className="w-screen shadow-md py-6 px-3 bg-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Countries of the World</h1>
                </div>
            </div>
             <div className="flex container mx-auto mb-16">
                <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input type="text" placeholder="Search for a country..." className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700" onChange={ term => searchCountry(term.target.value)} />
                <select className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={ val => filterByContinent(val.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div className="container grid grid-cols-4 gap-16 mx-auto">
                {countries.map( (country, index ) => <Link to={{ pathname : "details", state: country }}  key={index}><CountryCard
                    title={country.name}
                    image_url={country.flag}
                    population={country.population}
                    region={country.region}
                    subregion={country.subregion}
                    capital={country.capital}
                /></Link> )}
            </div>
        </div>
    )
}

export default Home;