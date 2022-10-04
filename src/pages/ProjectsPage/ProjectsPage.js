import './ProjectsPage.scss';
import { Component } from "react";
import ProjectsNav from '../../components/ProjectsNav/ProjectsNav';

class ProjectsPage extends Component {
    render() {
        return (
            <div className='projects-page'>
                <div className='projects-page__hero'></div>
                <ProjectsNav />
            </div>
        )
    }
}

export default ProjectsPage;