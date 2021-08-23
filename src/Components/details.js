import React from 'react';
import {useHistory, useLocation} from 'react-router';

function Details() {
    let {state} = useLocation();
    let history = useHistory();

    const goBack = () => history.push("./");

    return (
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
                    <h2 className="font-bold text-2xl mb-8">{state.name}</h2>
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
    )
}

export default Details;