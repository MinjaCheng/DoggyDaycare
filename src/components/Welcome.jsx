import './welcome.css';
import { Link } from 'react-router-dom';
import dog from '../dog.png'

const Welcome = () => (
    <section className="welcome-page">
        <div className="logo"><img className="logo-img" src={dog} alt="Dog and a kennel" /></div>
        <Link to="/register">
            <button className='register-button'>GO TO REGISTER</button>
        </Link>
    </section>
);

export default Welcome;