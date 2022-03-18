import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Topics from './components/Topics';
import UserProfile from './components/UserProfile';

import './App.scss';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
