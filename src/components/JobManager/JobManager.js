import './JobManager.scss';

const JobManager = () => {
    return (
        <div className='job-manager'>
            <h3 className='job-manger__title'>JOB NAME</h3>
            <div className='job-manager__controls'>
                <h4 className='job-manager__controls-action'>Update</h4>
                <h4 className='job-manager__controls-action'>Delete</h4>
            </div>
        </div>
    )
}

export default JobManager;