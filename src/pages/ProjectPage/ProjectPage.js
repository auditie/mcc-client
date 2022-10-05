import './ProjectPage.scss';
import { Component } from "react";
import heroImg from '../../assets/images/heros/snowhouse.png';

class ProjectPage extends Component {
    render() {
        return (
            <div className='project-page'>
                <div className='project-page__hero'>
                    <img src={heroImg} alt='house' className='project-page__hero-img' />
                    <div className='project-page__hero-text'>
                        <h1 className='project-page__hero-title'>RED CLOUD 8</h1>
                        <p className='project-page__hero-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Lectus quam id leo in vitae turpis. Vitae et leo duis ut diam quam nulla. Est ultricies integer quis auctor elit sed vulputate mi sit. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Nibh sit amet commodo nulla facilisi nullam. </p>
                        <p className='project-page__hero-credit'>
                            BUILDER: GARY HILL <br/>
                            ARCHITECT: MICHAEL UPWALL <br/>
                            INTERIOR DESIGN: JANE DOE
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage;