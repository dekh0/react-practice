import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
