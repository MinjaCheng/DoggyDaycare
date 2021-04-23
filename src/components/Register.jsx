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
        <section className='dog-info'>
            {fetchData.map((d, index) => (
            <div key={d}>
                <img src={d.img} alt={d.name} />
                <p>Name: {d.name}</p>
                <p>Breed: {d.breed}</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
        ))}
        </section>

    
    );
}

export default Register;