import React from 'react';
import {useHistory, useLocation} from 'react-router';
import {useState, useEffect} from 'react';

function Details() {
    let {state} = useLocation();
    let history = useHistory();

    const goBack = () => history.push("./");

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        getCountriesByCode(state.borders);
    }, []);

    const getCountriesByCode = async (borders) => {
        const temp = []
        for( var i = 0; i < borders.length; i++) {
            console.log("HERE222")

            const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${borders[i]}`);
            const data = await res.json();
            temp.push(data);
        }
        setNeighbors(temp);
        console.log(neighbors);
    };

    return (
        <div>
            <div className="bg-gray-100">
                <div className="w-screen shadow-md py-6 px-3 bg-white mb-16">
                    <div className = "container flex mx-auto">
                        <h1 className="font-bold text-xl">Countries of the World</h1>
                    </div>
                </div>
                <div className = "container mx-auto mb-16">
                    <button className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg"
                        onClick={() => goBack()}
                    >
                        <i class="fa fa-arrow-left"></i> Go Back
                    </button>
                </div>
                <div className = "container flex mx-auto p-8 pl-0 pr-0">
                    <img src = {state.flag} className="w-1/2 pr-8" alt={state.name} />
                    <div className = "p-8 pl-0">
                        <h2 className="font-bold text-6xl mb-8">{state.name}</h2>
                        <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                            <p>Native Name: <span className="text-gray-700 text-sm">{state.nativeName}</span></p>
                            <p>Population: <span className="text-gray-700 text-sm">{state.population}</span></p>
                            <p>Continent: <span className="text-gray-700 text-sm">{state.region}</span></p>
                            <p>Sub-Continent: <span className="text-gray-700 text-sm">{state.subregion}</span></p>
                            <p>Capital: <span className="text-gray-700 text-sm">{state.capital}</span></p>
                            <p>Top Level Domain: <span className="text-gray-700 text-sm">{state.topLevelDomain[0]}</span></p>
                            <p>Currencies: <span className="text-gray-700 text-sm">{state.currencies.map( cur => cur.name)}</span></p>
                            <p>Languages: <span className="text-gray-700 text-sm">{state.languages.map( lang => lang.name)}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className = "container flex mx-auto p-8 pl-0 pr-0">
                <div className = "p-8 pl-0">
                    <h2 className="font-bold text-2xl mb-8">Countries bordering {state.name}</h2>
                     <div className="container grid grid-cols-6 2xl:grid-cols-6 md:grid-cols-6 sm:grid-cols-3 gap-16 mx-auto">
                        {neighbors.map( neighbor =>
                            <div>
                                <img src={neighbor.flag} alt={neighbor.title} />
                                <p><span className="font-bold text-gray-700 text-sm">{neighbor.name}</span></p>
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Details;