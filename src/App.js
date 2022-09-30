import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <Switch>
          <Route path='/about' element={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
