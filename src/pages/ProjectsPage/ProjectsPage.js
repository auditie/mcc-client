import './ProjectsPage.scss';
import { Component } from "react";
import ProjectsNav from '../../components/ProjectsNav/ProjectsNav';
import ProjectLink from '../../components/ProjectLink/ProjectLink';
import heroImg from '../../assets/images/heros/house4.png';
import defaultImg from '../../assets/images/placeholders/house.jpg';

// let backgroundStyle = {
//     backgroundImage: `url(${defaultImg})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
// };

class ProjectsPage extends Component {
    state = {
        projects: [],
        location: 'Colony'
    }

    // handleLocationSelect = id => {
    //     this.setState({location: })
    // }

    render() {
        return (
            <div className='projects-page'>
                <div className='projects-page__hero' >
                    <img src={heroImg} alt='house' className='projects-page__hero-img' />
                </div>
                <div className='projects-page__guide'>
                    <ProjectsNav />
                    <div className='projects-page__links'>
                        <ProjectLink />
                        <ProjectLink />
                        <ProjectLink />
                        <ProjectLink />
                        <ProjectLink />
                        <ProjectLink />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage;