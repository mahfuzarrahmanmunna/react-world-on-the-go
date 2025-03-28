import { useState } from 'react';
import './country.css'

const Country = ({ rest }) => {

    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // if (visited === true) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }

        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>

            <h4>Country : {rest.name.common} </h4>
            <img src={rest.flags.png} alt="" />
            <p>Independent : {rest.independent ? 'Free this country' : 'Not free'}</p>
            <p>Population : {rest.population}</p>
            <button onClick={handleVisited}>{
                visited ? 'Visited' : 'Not visited'
            }</button>
        </div>
    );
};

export default Country;