import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Topics from './components/Topics';
import TopicForm from './components/TopicForm';
import TopicDisplay from './components/TopicDisplay';
import UserProfile from './components/UserProfile';
import SignUp from './components/SignUp';
import Resources from './components/Resources';
import Articles from './components/Articles';
import Videos from './components/Videos';
import Forums from './components/Forums';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/new" element={<TopicForm />} />
            <Route path="/topics/:id" element={<TopicDisplay />} />

            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/forums" element={<Forums />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
