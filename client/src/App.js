import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// it's a react component. it provides our application with the store, which holds our application state, which holds all of our data. it has to wrap around everything
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import './App.css';

// api
import destinations from './api/destinations.js';
// private route
import PrivateRoute from './components/common/PrivateRoute';
// menu/footer
import Menu from './components/menu.js';
import Footer from './components/footer.js';
// home
import HomeSection1 from './components/home/home-section-1.js';
import HomeSection2 from './components/home/home-section-2.js';
import HomeSection3 from './components/home/home-section-3.js';
import HomeSection4 from './components/home/home-section-4.js';
import HomeSection5 from './components/home/home-section-5.js';
import HomeSection6 from './components/home/home-section-6.js';
// signin
import SigninSection1 from './components/sign-in/signin-section-1.js';
import SigninSection2 from './components/sign-in/signin-section-2.js';
// signup
import SignupSection1 from './components/sign-up/signup-section-1.js';
import SignupSection2 from './components/sign-up/signup-section-2.js';
// dashboard
import Dashboard from './components/dashboard/dashboard.js';
// blog
import BlogSection1 from './components/blog/blog-section-1.js';
import BlogSection2 from './components/blog/blog-section-2.js';
// contact
import ContactSection1 from './components/contact/contact-section-1.js';
import ContactSection2 from './components/contact/contact-section-2.js';
import ContactSection3 from './components/contact/contact-section-3.js';
import ContactSection4 from './components/contact/contact-section-4.js';
// about-us
import AboutUsSection1 from './components/about-us/about-us-section-1.js';
import AboutUsSection2 from './components/about-us/about-us-section-2.js';
import AboutUsSection3 from './components/about-us/about-us-section-3.js';
import AboutUsSection4 from './components/about-us/about-us-section-4.js';
// atlas
import AtlasSection1 from './components/atlas/atlas-section-1.js';
import AtlasSection2 from './components/atlas/atlas-section-2.js';
import AtlasSection3 from './components/atlas/atlas-section-3.js';
// continent
import ContinentSection1 from './components/atlas/continent/continent-section-1.js';
import ContinentSection2 from './components/atlas/continent/continent-section-2.js';
import ContinentSection3 from './components/atlas/continent/continent-section-3.js';
// manage-profile
import ManageProfile from './components/manage-profile/manage-profile';

// check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token to get user data
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 43200;
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());
    // clear current profile
    store.dispatch(clearCurrentProfile());
    // redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Menu />
            {/* /home */}
            <Route exact path="/" component={ HomeSection1 } />
            <Route exact path="/" component={ HomeSection2 } />
            <Route exact path="/" component={ HomeSection3 } />
            <Route exact path="/" component={ HomeSection4 } />
            <Route exact path="/" component={ HomeSection5 } />
            <Route exact path="/" component={ HomeSection6 } />
            {/* /signin */}
            <Route exact path="/login" component={ SigninSection1 } />
            <Route exact path="/login" component={ SigninSection2 } />
            {/* /signup */}
            <Route exact path="/register" component={ SignupSection1 } />
            <Route exact path="/register" component={ SignupSection2 } />
            {/* /dashboard */}
            <Switch>
              <PrivateRoute exact path="/dashboard" component={ Dashboard } />
            </Switch>
            {/* /manage-profile */}
            <Switch>
              <PrivateRoute exact path="/dashboard/manage-profile" component={ ManageProfile } />
            </Switch>
            {/* /blog */}
            <Route exact path="/blog" component={ BlogSection1 } />
            <Route exact path="/blog" component={ BlogSection2 } />
            {/* /contact */}
            <Route exact path="/contact" component={ ContactSection1 } />
            <Route exact path="/contact" component={ ContactSection2 } />
            <Route exact path="/contact" component={ ContactSection3 } />
            <Route exact path="/contact" component={ ContactSection4 } />
            {/* /about */}
            <Route exact path="/about" component={ AboutUsSection1 } />
            <Route exact path="/about" component={ AboutUsSection2 } />
            <Route exact path="/about" component={ AboutUsSection3 } />
            <Route exact path="/about" component={ AboutUsSection4 } />
            {/* /atlas */}
            <Route exact path="/atlas" component={ AtlasSection1 } />
            <Route exact path="/atlas" render={(props) => <AtlasSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas" component={ AtlasSection3 } />
            {/* /atlas/africa */}
            <Route exact path="/atlas/africa" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/africa" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/africa" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/antarctica */}
            <Route exact path="/atlas/antarctica" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/antarctica" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/antarctica" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/asia */}
            <Route exact path="/atlas/asia" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/asia" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/asia" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/carribean */}
            <Route exact path="/atlas/carribean" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/carribean" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/carribean" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/central-america */}
            <Route exact path="/atlas/central-america" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/central-america" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/central-america" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/europe */}
            <Route exact path="/atlas/europe" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/europe" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/europe" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/middle-east */}
            <Route exact path="/atlas/middle-east" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/middle-east" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/middle-east" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/north-america */}
            <Route exact path="/atlas/north-america" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/north-america" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/north-america" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/south-america */}
            <Route exact path="/atlas/south-america" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/south-america" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/south-america" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            {/* /atlas/south-pacific */}
            <Route exact path="/atlas/south-pacific" render={(props) => <ContinentSection1 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/south-pacific" render={(props) => <ContinentSection2 {...props} destinations={destinations} />} />
            <Route exact path="/atlas/south-pacific" render={(props) => <ContinentSection3 {...props} destinations={destinations} />} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;