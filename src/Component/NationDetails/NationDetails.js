import React, { useState, useEffect } from 'react';
import './/NationDetails.css'
import { useParams } from 'react-router';
import axios from 'axios';

const NationDetails = () => {
    let { name } = useParams()
    const [country, setCountry] = useState({})
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        axios(url)
            .then(data => setCountry(data.data[0]))
    }, [])
    const { flag, cioc, capital, region, language, population, area, currencies, gini, latlng } = country





    return (
        <>
            <div className="bg-sec" style={{
                backgroundImage: `url(${flag})`,
                height: "100vh",
                width: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>

                <div className="card-detail-container">
                    <div className="card-detail">

                        <div className="card-detail-title">
                            <img src={flag} />
                            {name}
                        </div>

                        <div className="card-detail-body">
                            <div><strong>Code: </strong>{cioc}</div>
                            <div><strong>Capital: </strong>{capital}</div>
                            <div><strong>Region: </strong>{region}</div>
                            <div><strong>Population: </strong>{population} M</div>
                            <div><strong>Area: </strong>{area}</div>
                            <div><strong>World Bank Gini: </strong>{gini}%</div>
                        </div>

                    </div>
                </div>

            </div>



        </>


    );
};

export default NationDetails;