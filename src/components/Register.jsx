import './register.css';
import React, { useState, useEffect } from 'react';


const Register = () => {

    const url = 'https://api.jsonbin.io/b/607eb43024143e5df089b745';

    useEffect(async () => {
        try {
            const response = await fetch(url);
            console.log('2. Got response', response);

            const data = await response.json();
            console.log('3. Got data', data);

            return data;
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <section className='dog-info'>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src="https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3645.jpg" alt="Molly" />
                <p>Name: Molly 1</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src="https://images.dog.ceo/breeds/husky/n02110185_8860.jpg" alt="Molly" />
                <p>Name: Molly 2</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/beagle/n02088364_13214.jpg"} alt="Molly" />
                <p>Name: Molly 3</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly 4</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly 5</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly 6</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly 7</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly 8</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly 9</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
            <div>
                <img src={"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg"} alt="Molly" />
                <p>Name: Molly 10</p>
                <p>Breed: Briard</p>
                <p>At Daycare: Yes</p>
                <nav>More information ></nav>
            </div>
        </section>
    );
}

export default Register;