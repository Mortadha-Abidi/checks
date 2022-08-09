import './App.css';
import Adress from './component/Adress';
import FullName from './component/FullName';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
     <div class="card">
    <div class="img">
     <Profile/>
    </div>
    <div class="infos">
      <div class="name">
        <h2><FullName/></h2>
        <h4><Adress/></h4>
      </div>
     
      
      <div class="links">
        
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
