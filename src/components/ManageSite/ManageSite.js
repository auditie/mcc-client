import './ManageSite.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class ManageSite extends Component {
    render() {
        return (
            <div className='manage-site'>
                <h1 className='manage-site__title'>MANAGE SITE</h1>
                <div className='manage-site__jobs'>
                    <h2 className='manage-site__jobs-title'>Job Sites</h2>
                    <div className='manage-site__jobs__actions'>
                        <Link className='manage-site__jobs__actions-link' to='/admin/manage/jobsites'>MANAGE JOBS</Link>
                        <Link className='manage-site__jobs__actions-link' to='/admin/new-job'>POST NEW JOB</Link>
                    </div>
                </div>
                <div className='manage-site__employees'>
                    <h2 className='manage-site__employees-title'>Employees</h2>
                    <div className='manage-site__employees__actions'>
                        <Link className='manage-site__employees__actions-link' to='/admin/manage/employees'>MANAGE EMPLOYEES</Link>
                        <Link className='manage-site__employees__actions-link' to='/admin/manage/new-employee'>ADD EMPLOYEE</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageSite;