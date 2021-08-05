import './App.scss';
import Blog from './Components/blogScreen/blog';
import Footer from './Components/footer/footer';
// import Screen from './Components/Screens/Screen';
import PopularNews from './Components/Popular-news/PopularNews';
import WorldScreen from './Components/world_news/world_screen';

function App() {
  return (
    <div className="App">
      {/* <Screen/> */}
      <Blog/>
      <WorldScreen/>
      <PopularNews />
      <Footer/>
    </div>
  );
}

export default App;
