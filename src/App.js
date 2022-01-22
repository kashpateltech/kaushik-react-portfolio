import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/About.js'
import Work from './pages/Work.js'
import Contact from './pages/Contact.js'
import Cv from './pages/Cv.js'
import NoPage from './pages/NoPage.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Router basename="/kaushik-react-portfolio">
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/cv' component={Cv} />
          <Route component={NoPage} />
        </Switch>
      </>
      <Footer />
    </Router>
  )
}
export default App;

