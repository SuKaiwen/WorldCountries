import React from 'react';

function CountryCard({title, image_url, population, region, subregion, capital}){
    return (
        <div className="container rounded-lg shadow-lg bg-white">
            <img src={image_url} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" alt={title} />
            <div className="p-4">
                <h3 className="font-bold mb-4">{title}</h3>
                <p className="text-xs">Population: <span className="text-gray-700">{population}</span></p>
                <p className="text-xs">Continent: <span className="text-gray-700">{region}</span></p>
                <p className="text-xs">Sub-Continent: <span className="text-gray-700">{subregion}</span></p>
                <p className="text-xs">Capital: <span className="text-gray-700">{capital}</span></p>
            </div>
        </div>

    )
}

export default CountryCard;