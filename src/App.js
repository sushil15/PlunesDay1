import './App.css';
import DiscoverSection from './Components/DiscoverSection';
import ExploreSection from './Components/ExploreSection';
import ExploreFac from './Components/ExploreFac';

function App() {
  return (
  <div class="container-fluid">
    <div className="row">
    <DiscoverSection/>
    <ExploreSection/>
    <ExploreFac/>
    </div>
    </div>
    
  );
}

export default App;
