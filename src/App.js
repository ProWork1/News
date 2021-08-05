import './App.scss';
// import Screen from './Components/Screens/Screen';
import PopularNews from './Components/Popular-news/PopularNews';
import WorldScreen from './Components/world_news/world_screen';

function App() {
  return (
    <div className="App">
      {/* <Screen/> */}
      <WorldScreen/>
      <PopularNews />
    </div>
  );
}

export default App;
