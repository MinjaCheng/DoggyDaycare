import './register.css';
// import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Register = ({fetchData}) => {

    // const [fetchData, setFetchData] = useState([]);
    // const [selectedDog, setSelectedDog] = useState(null);
    // console.log('Selected Dog index: ', selectedDog);

    // useEffect( async () => {
        
    //     const url = 'https://api.jsonbin.io/b/6087ced8f6655022c46cff44/1';
            
    //         try {
    //             const response = await fetch(url);
    //             console.log('2. Got response', response);

    //             const data = await response.json();
    //             console.log('3. Got data', data);

    //             setFetchData(data);
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
        
    // }, []);

    // const handleDecided = async ({selectedDog}) => {
    //     console.log('Funkar detta??', selectedDog)
    // }

    return (
        <section className='dog-reg'>
            {fetchData.map((d, index) => (
            <div key={d} >
                <img id="dog-img"src={d.img} alt={d.name} />
                <p id="dog-name">{d.name.toUpperCase()}</p>
                <p id="dog-breed">{d.breed.charAt(0).toUpperCase() + d.breed.slice(1)}</p>
                <p id="at-daycare">At Daycare: <span className={"dog-present" + (d.present ? ' yes' : ' no')}>{d.present ? 'Yes':'No'}</span></p>
                <Link to={"/info?index="+index} style={{ textDecoration: 'none' }}>
                    <nav id="more-info">{"More Info >"}</nav>
                </Link>
            </div>
            
        ))}
        </section>

    
    );
}

export default Register;