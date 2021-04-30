import './information.css';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Information = ({ fetchData }) => {

    let index = Number(useLocation().search.split("index=")[1]);
    // console.log("index is", index);

    let history = useHistory();

    if (fetchData) {
        if (isNaN(index) || index > fetchData.length || index < 0) {
            history.push("/register");
        }
    }

    if (fetchData[index]) {

        let dog = fetchData[index];

        return (
            <section className='grid'>
                <div className="dog-info">
                    <img className="info-img" src={dog.img} alt={dog.name} />
                    <div className="info-title">Name: </div>
                    <div className="info" id="info-name">{dog.name}</div>
                    <div className="info-title">Age: </div>
                    <div className="info" id="info-age">{dog.age} years</div>
                    <div className="info-title">Breed: </div>
                    <div className="info" id="info-breed">{dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)}</div>
                    <div className="info-title">Sex: </div>
                    <div className="info" id="info-sex">{dog.sex}</div>
                    <div className="info-title">Chip number: </div>
                    <div className="info" id="info-id">{dog.chipNumber}</div>
                    <div className="info-title">At Daycare: </div>
                    <div className="info" id="info-at-daycare">
                        <span className={"info-present" + (dog.present ? ' yes' : ' no')}>{dog.present ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="info-title">Owner's name: </div>
                    <div className="info" id="owner-name">{dog.owner.name} {dog.owner.lastName}</div>
                    <div className="info-title">Phone number: </div>
                    <div className="info" id="owner-number">{dog.owner.phoneNumber}</div>
                    <div>
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <nav className="back-button"> {"<< Back"} </nav>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
    else return ("LOADING...");
}

export default Information;