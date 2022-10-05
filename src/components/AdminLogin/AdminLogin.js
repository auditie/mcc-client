import './AdminLogin.scss';

const AdminLogin = () => {
    return (
        <div className='admin-login'>
            <h1 className='admin-login__title'>LOGIN</h1>
            <form className='admin-login__form'>
                <div className='admin-login__form-split'>
                    <div>
                        <label for='username' className='admin-login__form-label'>USERNAME</label><br/>
                        <input type='text' id='username' name='username' className='admin-login__form-input' /><br/>
                    </div>
                    <div>
                        <label for='password' className='admin-login__form-label'>PASSWORD</label><br/>
                        <input type='text' id='password' name='password' className='admin-login__form-input' /><br/>
                    </div>
                </div>
                <button type='submit' className='admin-login__form-button'>LOG IN</button>
            </form>
        </div>
    )
}

export default AdminLogin;