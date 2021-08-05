import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/blogScreen/blog';
import PopularNews from './Components/Popular-news/PopularNews';
import WorldScreen from './Components/world_news/world_screen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blog/>
      <WorldScreen/>
      <PopularNews />
    </div>
  );
}

export default App;
