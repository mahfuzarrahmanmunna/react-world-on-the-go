import React, { use } from 'react';
import Country from './Country';
import './countries.css'

const Countries = ({ fetchApi }) => {
    const rests = use(fetchApi);
    return (
        <div>
            <h3>Travelling Country : {rests.length} </h3>
            <div className='countries' >
                {
                    rests.map(rest => <Country rest={rest} key={rest.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;