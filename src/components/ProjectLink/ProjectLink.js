import './ProjectLink.scss';
import defaultImg from '../../assets/images/placeholders/house.jpg';

const ProjectLink = () => {
    return (
        <div className='project-link' style={{ backgroundImage: `url(${defaultImg})`,
        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat' }}>
            <div className='project-link__square' />
            <img src={defaultImg} alt='house' className='project-link__img' />
            <div className='project-link__overlay' />
            <h3 className='project-link__title'>PROJECT NAME</h3>
        </div>
    )
}

export default ProjectLink;