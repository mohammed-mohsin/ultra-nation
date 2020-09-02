import React from 'react';
import './Nation.css'
import { Link } from 'react-router-dom';

const Nation = (props) => {
    const { name, flag } = props.nation
    console.log(props.nation)
    return (
        <>

            <Link style={{ 
                textDecoration: 'none'
            }}to={`/nation/${name}`}>
                <div className="">
                    <div className="card 1">
                        <div className="card_image"> <img src={flag} /> </div>
                        <div className="card_title title-white ">
                            <p >{name}</p>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    );
};

export default Nation;