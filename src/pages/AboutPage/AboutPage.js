import './AboutPage.scss';
import { Component } from "react";
import hero from '../../assets/images/heros/midwayutah.png';

class AboutPage extends Component {
    render() {
        return (
            <div className='about-us'>
                <div className='about-us__hero'>
                    <img src={hero} className='about-us__hero-image' />
                </div>
                <div className='about-us__intro'>
                    <h1 className='about-us__intro-title'>ABOUT US</h1>
                    <p className='about-us__intro-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Lectus quam id leo in vitae turpis. Vitae et leo duis ut diam quam nulla. Est ultricies integer quis auctor elit sed vulputate mi sit. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Nibh sit amet commodo nulla facilisi nullam. Odio morbi quis commodo odio aenean sed adipiscing. Magna sit amet purus gravida quis. Massa placerat duis ultricies lacus sed turpis tincidunt. Euismod lacinia at quis risus sed vulputate odio ut.
                    </p>
                </div>
                <div className='about-us__mission'>
                    <h1 className='about-us__mission-title'>MISSION STATEMENT</h1>
                    <p className='about-us__mission-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Lectus quam id leo in vitae turpis. 
                    </p>
                </div>
            </div>
        )
    }

}

export default AboutPage;

