import './ContactForm.scss';

const ContactForm = () => {
    return ( 
        <div className='contact'>
            <form className='contact__form'>
                <div className='contact__form-split'>
                    <div className='contact__form-split--left'>
                        <label for='name' className='contact__form-label'>NAME *</label><br/>
                        <input type='text' id='name' name='name' placeholder='John Doe' className='contact__form-input' />   
                    </div>
                    <div>
                        <label for='email' className='contact__form-label'>EMAIL *</label><br/>
                        <input type='text' id='email' name='email' placeholder='john.doe@gmail.com' className='contact__form-input' />  
                    </div>
                </div>
                <label for='message' className='contact__form-label'>MESSAGE *</label><br/>
                <textarea id='message' name='message' className='contact__form-input-mess' /><br/>
                <button type='submit' className='contact__form-input-button'>SEND</button>
            </form>
        </div>
    )
}

export default ContactForm;