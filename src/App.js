
import './App.css';
import './Components/Navbar.css';
import './Components/Header.css';
import './Components/Profile.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

const App = () => {
  return ( <div className='app-wrapper'>
       <Header />
       <Navbar />
       <Profile />
              
     </div>);
}


  

export default App;
