import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";

function App() {
  return (
    //BEM convention
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
      {/*Footer*/}
    </div>
  );
}

export default App;
