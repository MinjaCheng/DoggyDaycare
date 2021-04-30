import './register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from "./Switch";

const Register = ({ fetchData }) => {

    const [atDaycare, setAtDayCare] = useState(false);
    const [searchWord, setSearchWord] = useState("");

    function handleSearch(e) {
        //console.log("value:"+e.target.value)
        setSearchWord(e.target.value.toLowerCase());
    }

    return (
        <section className='container'>
            <div className='search-toggle'>
                <input className="search-field" type="text" onChange={handleSearch} placeholder="Search" />
                <div className="daycare">At daycare:</div>
                <div className="toggle-button"><Switch isOn={atDaycare} handleToggle={() => setAtDayCare(!atDaycare)} /></div>
            </div>

            <div className='dog-reg'>
                {fetchData.map((data, index) => (
                    <div hidden={(!data.present && atDaycare) || (searchWord !== "" && !data.name.toLowerCase().includes(searchWord) && !data.breed.toLowerCase().includes(searchWord))} key={data}>
                        <img className="dog-img" src={data.img} alt={data.name} />
                        <p className="dog-name">{data.name.toUpperCase()}</p>
                        <p className="dog-breed">{data.breed.charAt(0).toUpperCase() + data.breed.slice(1)}</p>
                        <p className="at-daycare">At Daycare: <span className={"dog-present" + (data.present ? ' yes' : ' no')}>{data.present ? 'Yes' : 'No'}</span></p>
                        <Link to={"/info?index=" + index} style={{ textDecoration: 'none' }}>
                            <nav className="more-info">{"More Info >"}</nav>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Register;