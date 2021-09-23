import './home.css';
import pic from './home.svg';

function Home() {
    return (

        <div className="intro">
            
            <img  className="intro__image" src={pic} alt='pic' loading='lazy' />

            <div className='intro__desc'>
                <h1 className='intro__head'>Hi, I'm Vaibhav Agrawal</h1>
                <h1 className='intro__text'>Web Developer.</h1>
                <div className="details">
                    <p>I enjoy solving complex problems.</p>
                    <p>Frequently praised as detail-oriented by my peers,</p> 
                    <p>I can be relied upon to help your company achieve </p>
                    <p>its goals by providing sustainable and scalable solution.</p>
                    <a href="#about" className='intro__aboutLink'>Get In Touch</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
