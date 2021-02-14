import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import FilesView from './components/filesView/FilesView';
import SideIcons from './components/sideIcons/SideIcons';
import { auth, provider } from "./firebase";
import DriveIcon from '././media/driveIcon.png';

function App() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={DriveIcon} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;
