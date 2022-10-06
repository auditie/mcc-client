import './AdminPage.scss';
import { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import AdminLogin from '../../components/AdminLogin/AdminLogin';
import ManageSite from '../../components/ManageSite/ManageSite';
import NewJob from '../../components/NewJob/NewJob';

class AdminPage extends Component {
    render() {
        return (
            <div className='admin-page'>
                <Switch>
                    <Route path='/admin' exact component={AdminLogin} />
                    <Route path='/admin/manage' component={ManageSite} />
                    <Routhe path='/admin/manage/new-job' component={NewJob} />
                </Switch>
            </div>
        )
    }
}

export default AdminPage;