import React from 'react';
import {useState, useEffect} from 'react';

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

    const searchCountry = async term => {
        if(term.length < 3 || term === '') return;
        const res = await fetch('https://restcountries.eu/rest/v2/name/${term}');
        const data = await res.json();
        await setCountries(data);
    }

    const filterByContinent = async continent => {
        if(continent === '') return;
        const res = await fetch('https://restcountries.eu/rest/v2/region/${continent}');
        const data = await res.json();
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
                <i class="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input type="text" placeholder="Search countries..." className="pl-10 p-2 shadow-md rounded-md w-1/3"
                    onChange={(e) => searchCountry(e.target.value)}
                />
                <select className="ml-auto my-2 p-2 shadow-md rounded-md font-md" onChange={e => filterByContinent(e.target.value)}>
                    <option>All Continents</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Home;