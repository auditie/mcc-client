import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
      </div>
    </Router>
  );
}

export default App;
