import './JobSitesList.scss';
import { Component } from "react";
import JobManager from '../JobManager/JobManager';
import { Link } from 'react-router-dom';

class JobSitesList extends Component {
    render() {
        return (
            <div className='job-sites'>
                <h1 className='job-sites__title'>MANAGE SITE</h1>
                <Link to='/admin/manage' className='job-sites__back'>GO BACK</Link>
                <h2 className='job-sites__sub-title'>Job Sites</h2>
                <div className='job-sites__list'>
                    <JobManager />
                    <JobManager />
                    <JobManager />
                    <JobManager />
                    <JobManager />
                    <JobManager />
                    <JobManager />
                    <JobManager />
                </div>
            </div>
        )
    }
}

export default JobSitesList;