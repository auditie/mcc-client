import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import AdminPage from './pages/AdminPage/AdminPage';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/projects' component={ProjectsPage} />
          {/* <Route path='/projects/:projectId' component={ProjectPage} /> */}
          <Route path='/project' component={ProjectPage} />
          <Route path='/admin' component={AdminPage} />
        </Switch>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
