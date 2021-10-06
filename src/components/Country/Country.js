import React from 'react';

const Country = (props) => {
    console.log(props);
    return (
        <div>
            <h4>This is:  {props.name}</h4>
            <p>Capital is : {props.capital} </p>
            <p>population:{props.population}</p>
        </div>
    );
};

export default Country;