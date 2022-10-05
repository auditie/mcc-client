import './SiteManager.scss';
import { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import AdminLogin from '../../components/AdminLogin/AdminLogin';

class AdminPage extends Component {
    render() {
        return (
            <div className='admin-page'>
                <Switch>
                    <Route path='/admin' component={AdminLogin} />
                </Switch>
            </div>
        )
    }
}

export default AdminPage;