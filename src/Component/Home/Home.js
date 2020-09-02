import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nation from '../Nation/Nation';

const Home = () => {
    const [nations, setNations] = useState([])
    useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all"
        axios(url).then(data => setNations(data.data))
    }, [])
    return (
        <>
            <h1 style={{
                fontSize: "5rem",
                color: "#800080",
                fontWeight: "bold",
                textAlign: "center"
            }}>Ultra Nation</h1>

            <div style={{
                zIndex: "0",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
            }}>


                {
                    nations.map(nation => <Nation key={nation.name} nation={nation} />)
                }
            </div>
        </>
    );
};

export default Home;