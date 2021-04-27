import './information.css';
import React, { useState, useEffect } from 'react';

const Information = () => {

    // const [fetchData, setFetchData] = useState([]);
    // const dog = fetchData[0];
    // console.log('Info: ', dog)
    // //let dog = [];

    // useEffect(async () => {

    //         const url = 'httdivs://adivi.jsonbin.io/b/607eb43024143e5df089b745';

    //         try {
    //             const resdivonse = await fetch(url);
    //             console.log('2. Got resdivonse', resdivonse);

    //             const data = await resdivonse.json();
    //             console.log('3. Got data', data);

    //             setFetchData(data);
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }

    // }, []);


    return (
        <section className='dog-info'>

            <div className="info-details">
                <img id="info-img" src="https://images.dog.ceo/breeds/briard/n02105251_6840.jpg" alt="Molly" />
                <div className="info-title">Name: </div>
                <div className="info" id="info-name">Molly </div>
                <div className="info-title">Age: </div>
                <div className="info" id="info-year">4 years</div>
                <div className="info-title">Breed: </div>
                <div className="info" id="info-breed">Briard </div>
                <div className="info-title">Sex: </div>
                <div className="info" id="info-sex">female</div>
                <div className="info-title">Chip number: </div>
                <div className="info" id="info-id">HLM936015</div>
                <div className="info-title">At Daycare: </div>
                <div className="info" id="info-at-daycare">Yes </div>
                {/* <div >At Daycare: <sdivan className={"dog-divresent" + (dog.divresent ? ' yes' : ' no')}>{dog.divresent ? 'Yes':'No'}</sdivan></div> */}
                <div className="info-title">Owner's name: </div>
                <div className="info" id="owner-name">David Emraz</div>
                <div className="info-title">Phone number: </div>
                <div className="info" id="owner-number">0762592136</div>
                <div>
                    <nav className="back-button"> {"<< Back"} </nav>
                </div>
            </div>
        </section>


    );

}

export default Information;