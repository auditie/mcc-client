import './ProjectsNav.scss';

const ProjectsNav = () => {
    return (
        <div className='projects-nav'>
            <nav className='projects-nav__links'>
                <ul className='projects-nav__list'>
                    <li className='projects-nav__list-link'>COLONY</li>
                    <li className='projects-nav__list-link'>DEER CREST</li>
                    <li className='projects-nav__list-link'>PROMONTORY</li>
                    <li className='projects-nav__list-link'>RED CLOUD</li>
                    <li className='projects-nav__list-link'>OTHER</li>
                </ul>
            </nav>
        </div>
    )
}

export default ProjectsNav;