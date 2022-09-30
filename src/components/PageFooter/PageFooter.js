import './PageFooter.scss';
import instaIcon from '../../assets/icons/insta-icon.png';

const PageFooter = () => {
    let currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='footer__text'>
                <p className='footer__text-copyright'>&copy; MCC HOMES {currentYear}</p>
            </div>
            <div className='footer__socials'>
                <img src={instaIcon} alt='instagram logo' className='footer__socials-insta' />
            </div>
        </div>
    )
}

export default PageFooter
