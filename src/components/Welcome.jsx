import './welcome.css';
import {Link} from 'react-router-dom';

const Welcome = () => (
    <section className="welcome-page">
        <div className="logo"><img src="img/dog.png" alt="Dog and a kennel" /></div>
        <Link to="/register">
            <button className='register-button'>GO TO THE REGISTER</button>
        </Link>
        
    </section>
);

export default Welcome;