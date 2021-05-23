import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectImages from './Components/ProjectImages/ProjectImages';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>

          <Route path="/project-images/:title">
            {/* <Header/> */}
            <ProjectImages/>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
