import './AdminPage.scss';
import { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import AdminLogin from '../../components/AdminLogin/AdminLogin';
import ManageSite from '../../components/ManageSite/ManageSite';

class AdminPage extends Component {
    render() {
        return (
            <div className='admin-page'>
                <Switch>
                    <Route path='/admin' exact component={AdminLogin} />
                    <Route path='/admin/manage' component={ManageSite} />
                </Switch>
            </div>
        )
    }
}

export default AdminPage;