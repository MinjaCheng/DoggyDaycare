import './register.css';
import React, { useState, useEffect } from 'react';


const Register = () => {

    const [fetchData, setFetchData] = useState([]);

    useEffect(async () => {

            const url = 'https://api.jsonbin.io/b/607eb43024143e5df089b745';

            try {
                const response = await fetch(url);
                console.log('2. Got response', response);

                const data = await response.json();
                console.log('3. Got data', data);

                setFetchData(data);
            }
            catch (err) {
                console.log(err);
            }
        
    }, []);


    return (
        <section className='dog-reg'>
            {fetchData.map((d, index) => (
            <div key={d}>
                <img id="dog-img"src={d.img} alt={d.name} />
                <p id="dog-name">{d.name.toUpperCase()}</p>
                <p id="dog-breed">{d.breed.charAt(0).toUpperCase() + d.breed.slice(1)}</p>
                <p id="at-daycare">At Daycare: <span className={"dog-present" + (d.present ? ' yes' : ' no')}>{d.present ? 'Yes':'No'}</span></p>
                <nav id="more-info">{"More Info >"}</nav>
            </div>
            
        ))}
        </section>

    
    );
}

export default Register;