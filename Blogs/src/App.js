import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Create from './create.js';
import BlogDetails from './blogDetails.js';
import NotFound from './Notfound.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route paht='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;