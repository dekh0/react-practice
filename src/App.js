import './App.css';
import React from 'react';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {
  return (
    <React.StrictMode>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="wrapper-profile">
          <Routes>
            <Route path='/dialogs'
              element={<Dialogs
                store={props.store}
              />} />
            <Route path='/profile'
              element={<Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />} />
            <Route path='/news,' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </React.StrictMode>

  );
}

export default App;
