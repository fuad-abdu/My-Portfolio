import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectImages from './Components/ProjectImages/ProjectImages';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/">
            <Header home="active" />
            <Home />
            <Footer />
          </Route>

          <Route path="/project-images/:title">
            <Header/>
            <ProjectImages />
            <Footer />
          </Route>

          <Route path="/about">
            <Header about="active" />
            <About/>
            <Footer />
          </Route>

          <Route path="/contact">
            <Header contact="active" />
            <Contact/>
            <Footer/>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
