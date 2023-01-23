import logo from './logo.svg';
import './App.css';
import { tweetPosts } from './const';
import ProfileCard from './components/components';

function App() {
  return (
    <div className="App">

      {
        tweetPosts.map(profile => (
          <ProfileCard 
            profileData = {profile}
          />
        ))
      }
      
    </div>
  );
}

export default App;
