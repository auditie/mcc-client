import './ContactPage.scss';
import { Component } from "react";
import ContactForm from '../../components/ContactForm/ContactForm';

class ContactPage extends Component {
    render() {
        return (
            <div className='contact-page'>
                <h1 className='contact-page__title'>CONTACT US</h1>
                <div className='contact-page__split'>
                    <ContactForm />
                    <div className='contact-page__split--right'>
                        <div>
                            <h2 className='contact-page__sub-head'>CALL US</h2>
                            <h3 className='contact-page__body-text'>(435)654-0907</h3>
                        </div>
                        <div>
                            <h2 className='contact-page__sub-head'>VISIT US</h2>
                            <h3 className='contact-page__body-text'>599 N Main Street,<br/>Heber City, Utah 84032</h3>
                        </div>
                        <div>
                            <h2 className='contact-page__sub-head'>FOLLOW US</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;