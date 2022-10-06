import './NewJob.scss';
import { Component } from 'react';

class NewJob extends Component {
    render() {
        return (
            <div className='new-job'>
                <h1 className='new-job__title'>MANAGE SITE</h1>
                <h2 className='new-job__sub-title'>New Job Site</h2>
                <form className='new-job__form'>
                    <div className='new-job__form--top'>
                        <div className='new-job__form--left'>
                            <label for='job-name' className='new-job__form-label'>JOB NAME</label>
                            <input type='text' id='job-name' name='job-name' className='new-job__form-input' placeholder='NAME' />
                            <label for='builder' className='new-job__form-label'>BUILDER</label>
                            <input type='text' id='builder' name='builder' className='new-job__form-input' placeholder='NAME' />
                            <label for='architect' className='new-job__form-label'>ARCHITECT</label>
                            <input type='text' id='architect' name='architect' className='new-job__form-input' placeholder='NAME' />
                        </div>
                        <div className='new-job__form--right'>
                            <label for='location' className='new-job__form-label'>LOCATION</label>
                            <select id='location' name='location' className='new-job__form-select'>
                                <option value='Red Cloud'>RED CLOUD</option>
                                <option value='Deer Crest'>DEER CREST</option>
                                <option value='Promontory'>PROMONTORY</option>
                                <option value='Colony'>COLONY</option>
                                <option value='Other'>OTHER</option>
                            </select>
                            <label for='interior' className='new-job__form-label'>ARCHITECT</label>
                            <input type='text' id='interior' name='interior' className='new-job__form-input' placeholder='NAME' />
                        </div>
                    </div>
                    <label for='description' className='new-job__form-label'>DESCRIPTION</label>
                    <textarea id='description' name='description' className='new-job__form-input-mess' />
                    <div className='new-job__form-entry'>
                        <button className='new-job__form-entry__button'>ADD PHOTOS</button>
                        <button type='submit' className='new-job__form-entry__button'>SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewJob;